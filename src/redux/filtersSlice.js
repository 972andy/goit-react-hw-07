// import { createSlice } from "@reduxjs/toolkit";

// const INITIAL_STATE = {
//     filter: "",
// };

// const filterSlice = createSlice({
//     name: "filter",
//     initialState: INITIAL_STATE,
//     reducers: {
//         setFilter: (state, action) => {
//             state.filter = action.payload
//         }
//     }
// })

// export const filterReducer = filterSlice.reducer;
// export const { setFilter } = filterSlice.actions;

import { createSlice } from '@reduxjs/toolkit';
const INITIAL_STATE = {
  name: '',
};
const filtersSlice = createSlice({
  name: 'filters',
  initialState: INITIAL_STATE,
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;
export default filtersSlice.reducer;


