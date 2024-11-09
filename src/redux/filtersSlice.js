import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    filter: "",
};

// export const filtersReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case "filters/setFilter":
//       return {
//         ...state,
//         filter: action.payload,
//       };
//     default:
//       return state;
//   }
// };

export const filtersSlice = createSlice({
  name: "filter",
  initialState: INITIAL_STATE,
  reducers: {
    onFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const filtersReducer = filtersSlice.reducer;
export const { onFilter } = filtersSlice.actions;