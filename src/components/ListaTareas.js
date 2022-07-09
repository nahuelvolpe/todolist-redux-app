import React, { useEffect } from "react";
import Swal from "sweetalert2";
import { useSelector, useDispatch } from "react-redux";
import { borrar, deleteTarea } from "../store/todo/todoSlice";
//import { getTareas } from "../store/todo/todoThunk";
import { getTareas } from "../store/todo/todoSlice";

export const ListaTareas = (props) => {
  const { tareas, loading } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTareas());
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <ul className="list-group w-50 mx-auto">
      <li className="list-group-item active">Lista de tareas</li>
      {tareas.map((tarea) => (
        <li className="list-group-item" key={tarea.id}>
          {tarea.nombre}
          <button
            className="btn btn-danger float-end"
            onClick={() => {
              Swal.fire({
                title: "Seguro desea eliminar la tarea?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Eliminar",
              }).then((result) => {
                if (result.isConfirmed) {
                  dispatch(deleteTarea(tarea.id));
                }
              });
            }}
          >
            -
          </button>
        </li>
      ))}
    </ul>
  );
};
