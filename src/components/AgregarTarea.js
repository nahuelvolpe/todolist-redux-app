import React, { useState } from 'react'

export const AgregarTarea = (props) => {

  const [tarea, setTarea] = useState("");

  return (
      <div>
        <div className="w-50 mx-auto input-group">
            <input
                type="text"
                className="form-control"
                placeholder="Ingrese una tarea..."
                value={tarea}
                onChange={(evt) => {setTarea(evt.target.value)}}
            />
            <button className="btn btn-outline-primary"
                onClick={()=> {
                    props.addTarea(tarea);
                    setTarea("")
                }}>
                +
            </button>

        </div>
        <div className="text-end text-info w-50">
            Total tareas: {props.totalTareas}
        </div>
    </div>
  )
}
