import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  contacts: {
    items: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  },
  filters: {
    name: ""
  }
};

// export const contactsReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case "contacts/addContact": {
//       return {
//         ...state,
//         contacts: {
//           ...state.contacts,
//           items: [...state.contacts.items, action.payload] // Оновлюємо масив items всередині об'єкта contacts
//         }
//       };
//     }

//     case "contacts/deleteContact": {
//       return {
//         ...state,
//         contacts: {
//           ...state.contacts,
//           items: state.contacts.items.filter(
//             (contact) => contact.id !== action.payload
//           )
//         }
//       };
//     }

//     default:
//       return state;
//   }
// };

const contactSlice = createSlice({
    name: "contact",
    initialState: INITIAL_STATE,
    reducers: {
        addContact: (state, action) => {
            state.contacts.items.push(action.payload);
        },

        deleteContact: (state, action) => {
            state.contacts.items = state.contacts.items.filter((contact) => contact.id !== action.payload); 
        },
    }
})

export const contactsReducer = contactSlice.reducer;
export const { addContact, deleteContact } = contactSlice.actions; 
