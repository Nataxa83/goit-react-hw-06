import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

import Contact from "../Contact/Contact";

export default function TaskList() {

  const contacts = useSelector(selectContacts);
  const filteredContacts = useSelector(selectNameFilter);

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filteredContacts.toLocaleLowerCase())
  );
  
  if (visibleContacts.length === 0) {
    return <p className={css.text}>No contacts found</p>;
  }
  return (
    <ul className={css.list}>
      {visibleContacts.map((contact) => (
        <li className={css.item} key={contact.id}>
          <Contact data={contact}  />
        </li>
      ))}
    </ul>
  );
}
