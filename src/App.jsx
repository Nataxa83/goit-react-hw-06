import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import { useDispatch } from "react-redux";
import css from "./App.module.css";
import {  deleteContact } from "./redux/contactsSlice";
export default function App() {
 
  const dispatch = useDispatch();

  // const addContactCard = (newContact) => {
  //   const action = addContact(newContact);
  //   dispatch(action);
  // };

  const deleteContactCard = (contactId) => {
    const action = deleteContact(contactId);
    dispatch(action);
  };

  return (
    <>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm  />
      <SearchBox  />
      <ContactList  onDelete={deleteContactCard} />
    </>
  );
}
