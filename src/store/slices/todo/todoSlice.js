import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: [
    { id: 1, nombre: "Comprar facturas", done: false },
    { id: 2, nombre: "Pasear al perro", done: false },
    { id: 3, nombre: "Trabajar", done: false },
  ],
  reducers: {
    agregar: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      const newTask = {
        id: state.length + 1,
        nombre: action.payload,
        done: false,
      };

      state.push(newTask);
    },
    borrar: (state, action) => {
      return state.filter((t) => t.id != action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { agregar, borrar } = todoSlice.actions;

export default todoSlice.reducer;
