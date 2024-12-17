// import { createSlice } from "@reduxjs/toolkit";

// const INITIAL_STATE = {
//     contacts: {
//     items: [],
//     loading: false,
//     error: null
//   },
//   filters: {
// 		name: ""
// 	}
// };

// const contactSlice = createSlice({
//     name: "contact",
//     initialState: INITIAL_STATE,
//     reducers: {
//         addContact: (state, action) => {
//             state.contacts.items.push(action.payload);
//         },

//         deleteContact: (state, action) => {
//             state.contacts.items = state.contacts.items.filter((contact) => contact.id !== action.payload);
//         },
//     }
// })

// export const contactsReducer = contactSlice.reducer;
// export const { addContact, deleteContact } = contactSlice.actions;

import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContacts, deleteContacts } from './contactsOps';

const INITIAL_STATE = {
  items: null,
  loading: false,
  error: null,
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: INITIAL_STATE,
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addContacts.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteContacts.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = state.items.filter(item => item.id !== action.payload.id);
      })
      .addCase(deleteContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),
});

export default contactsSlice.reducer;
