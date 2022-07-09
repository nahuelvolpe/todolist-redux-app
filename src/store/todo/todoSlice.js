import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getTareas = createAsyncThunk("todo/getTareas", async () => {
  const response = await fetch("http://localhost:3001/tareas");
  const tareas = await response.json();
  return tareas;
});

export const postTareas = createAsyncThunk(
  "todo/postTareas",
  async ({ tareas, nombre }, { rejectWithValue }) => {
    console.log(nombre);
    let nuevaTarea = {
      id: tareas.length + 1,
      nombre: nombre,
      done: false,
    };

    try {
      const response = await fetch("http://localhost:3001/tareas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevaTarea),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteTarea = createAsyncThunk(
  "todo/deleteTarea",
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(`http://localhost:3001/tareas/${id}`, {
        method: "DELETE",
      });
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    loading: false,
    tareas: [],
  },
  reducers: {
    borrar: (state, action) => {
      return state.tareas.filter((t) => t.id != action.payload);
    },
  },
  extraReducers: {
    //getTareas
    [getTareas.pending]: (state) => {
      state.loading = true;
    },
    [getTareas.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.tareas = payload;
    },
    [getTareas.rejected]: (state) => {
      state.loading = false;
    },
    //postTareas
    [postTareas.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.tareas.push(payload);
    },
    [postTareas.rejected]: (state, action) => {
      console.log(action.payload);
    },
    //deleteTarea
    [deleteTarea.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.tareas = state.tareas.filter((t) => t.id != payload);
    },
    [deleteTarea.rejected]: (state, action) => {
      console.log(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { agregar, borrar, initTareas } = todoSlice.actions;

export default todoSlice.reducer;
