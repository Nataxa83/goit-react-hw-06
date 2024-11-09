import ContactList from "./components/ContactList/ContactList";
import initialContacts from "./components/contacts.json";
import { useState, useEffect } from "react";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import { useDispatch, useSelector } from "react-redux";

export default function App() {
  // const [contacts, setContacts] = useState(() => {
  //   const currentContact = localStorage.getItem("contacts");
  //   return currentContact ? JSON.parse(currentContact) : initialContacts;
  // });
  const [filter, setFilter] = useState("");

  
const contacts = useSelector((state) => state.contactsData.items);
const dispatch = useDispatch();

  


  const addContact = (newContact) => {
    // setContacts((prevContact) => {
    //   return [...prevContact, newContact];
    // });
    const action = { type: "contacts/addContact", payload: newContact };
    dispatch(action);
  };



  const deleteContact = (contactId) => {
    // setContacts((prevContact) => {
    //   return prevContact.filter((contact) => contact.id !== contactId);
    // });
    const action = { type: "contacts/deleteContact", payload: contactId };
    dispatch(action);
  };

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
  );

  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </>
  );
}
