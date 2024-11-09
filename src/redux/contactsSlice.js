import CONTACTS from "../components/contacts.json"

const INITIAL_STATE = {

       items: CONTACTS
       

}

export const contactsReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
    case "contacts/addContact":
      return {
        ...state,
        items: [...state.items, action.payload],
      } ;
    case "contacts/deleteContact": 
      return {
          ...state,
          items: state.items.filter(contact => contact.id !== action.payload)
          
          
      } ;
    default:
      return state;
  }

}