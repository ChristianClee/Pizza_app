import { createSlice } from "@reduxjs/toolkit";
import isEqual from "lodash.isequal";

const initialState = {
  pizzas: [],
  countPizzas: 0,
  price: 0,
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addPizza(state, action) {
      state.countPizzas += 1;
      state.price += action.payload.price;
      // todo =============================================================
      let add = false;
      const { count, ...clone } =  action.payload
      for (let i = 0; i < state.pizzas.length; i++) {
        const {count, ...cloneTwo} = state.pizzas[i]
        if (isEqual(clone, cloneTwo)) {
          state.pizzas[i].count += 1;
          add = true;
          break;
        }
      }
      if (!add) {
        state.pizzas.push(action.payload);
      }
      // todo =============================================================
    },
    addOne(state, action) {
      state.countPizzas += 1;
      state.price += action.payload.price;
      for (let i = 0; i < state.pizzas.length; i++){
        if (isEqual(state.pizzas[i], action.payload)){
          state.pizzas[i].count += 1
          break
        }
      }
    },
    removeOne(state, action) {

      for (let i = 0; i < state.pizzas.length; i++) {
        if (isEqual(state.pizzas[i], action.payload)) {
          state.pizzas[i].count -= 1;
          state.countPizzas -= 1;
          state.price -= action.payload.price;
          if (state.pizzas[i].count < 1) {
            state.pizzas = state.pizzas.filter((item, index) => 
              index !== i
            )
          }
          break;
        }
      }
    },
    cleanRow(state, action) {
      console.log(action.payload);
      for (let i = 0; i < state.pizzas.length; i++) {
        if (isEqual(state.pizzas[i], action.payload)) {
          state.countPizzas -= state.pizzas[i].count;
          state.price -= state.pizzas[i].count * state.pizzas[i].price
          state.pizzas = state.pizzas.filter((item, index) => index !== i);
          break
        }
      }
    },
    cleanAll(state) {
      state.pizzas = []
      state.price = 0
      state.countPizzas = 0
      console.log('fg')
    }
  }
});

export const { addPizza, cleanAll, addOne, removeOne, cleanRow } = cartSlice.actions;
export default cartSlice.reducer;