import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { agregar, postTareas } from "../store/todo/todoSlice";

export const AgregarTarea = (props) => {
  const [tarea, setTarea] = useState("");
  const { tareas } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="w-50 mx-auto input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Ingrese una tarea..."
          value={tarea}
          onChange={(evt) => {
            setTarea(evt.target.value);
          }}
        />
        <button
          className="btn btn-outline-primary"
          onClick={() => {
            dispatch(postTareas({ tareas, nombre: tarea }));
            setTarea("");
          }}
        >
          +
        </button>
      </div>
      <div className="text-end text-info w-50">
        Total tareas: {tareas.length}
      </div>
    </div>
  );
};
