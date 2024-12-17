// import { configureStore } from "@reduxjs/toolkit";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// import { contactsReducer } from "./contactsSlice";
// import { filterReducer } from "./filtersSlice";

// const contactConfig = {
//   key: "contactsData",
//   storage,
// };

// const persistedContactsReducer = persistReducer(contactConfig, contactsReducer);

// export const store = configureStore({
//   reducer: {
//     contactsData: persistedContactsReducer,
//     filter: filterReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);

import { configureStore } from '@reduxjs/toolkit';
import filtersReducer from './filtersSlice';
import contactsReducer from './contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});



