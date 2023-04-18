import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  category: ["Все", ""],
  sort: ["", "", ""],
  listCategories: [
    "Все",
    "Мясные",
    "Вегетарианские",
    "Гриль",
    "Острые",
    "Закрытые",
  ],
  listSort: ["популярности", "алфавиту", "цене"],
  listSort2: ["rating", "title", "price"],
};
const filterSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    changeCaterory(state, action) {
      if (action.payload === 0) {
        state.category[1] = ""
      } else {
        state.category[1] = action.payload;
      }
      state.category[0] = state.listCategories[action.payload];
        
      
    },
    changeSort(state, action) {
      state.sort[0] = state.listSort[action.payload];
      state.sort[1] = state.listSort2[action.payload];
      state.sort[2] = action.payload;
    }
  }
})

export const { changeCaterory, changeSort } = filterSlice.actions;
export default filterSlice.reducer;