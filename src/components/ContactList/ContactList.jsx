import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";

export default function TaskList({  onDelete }) {

  const contacts = useSelector((state) => state.contactsData.items);
  const filteredContacts = useSelector((state) => state.filtersData.filter);

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filteredContacts.toLocaleLowerCase().trim())
  );

  return (
    <ul className={css.list}>
      {visibleContacts.map((contact) => (
        <li className={css.item} key={contact.id}>
          <Contact data={contact}  onDelete={onDelete}/>
        </li>
      ))}
    </ul>
  );
}
