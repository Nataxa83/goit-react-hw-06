import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import { useDispatch } from "react-redux";
import css from "./App.module.css";
import { addContact, deleteContact } from "./redux/contactsSlice";
export default function App() {
  // const [contacts, setContacts] = useState(() => {
  //   const currentContact = localStorage.getItem("contacts");
  //   return currentContact ? JSON.parse(currentContact) : initialContacts;
  // });
  // const [filter, setFilter] = useState("");

  
  // const contacts = useSelector((state) => state.contactsData.items);
  const dispatch = useDispatch();



  


  const addContactCard = (newContact) => {
  //   // setContacts((prevContact) => {
  //   //   return [...prevContact, newContact];
  //   // });
  //   // const action = { type: "contacts/addContact", payload: newContact };
  //   // dispatch(action);
    const action = addContact(newContact);
    dispatch(action);
  };



  const deleteContactCard = (contactId) => {
    // setContacts((prevContact) => {
    //   return prevContact.filter((contact) => contact.id !== contactId);
    // });
   
    const action = deleteContact(contactId);
    dispatch(action);
  };



  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onAdd={addContactCard} />
      <SearchBox  />
      <ContactList  onDelete={deleteContactCard} />
    </>
  );
}
