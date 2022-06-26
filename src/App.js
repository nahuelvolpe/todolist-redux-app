import React from 'react'
import { Provider } from "react-redux"
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
//import { ListaTareas } from './components/ListaTareas';
import  ListaTareas  from './container/ListaTareas';
import AgregarTarea from './container/AgregarTarea';
//import { AgregarTarea } from './components/AgregarTarea';
import theOnlySourceOfTruth from "./store/store"

const tareas = [
  {id: 1, nombre: "Bañarse", done: false},
  {id: 2, nombre: "Lavar los platos", done: false},
  {id: 3, nombre: "Trabajar", done: false},
]

function App() {
  return (
    <Provider store={theOnlySourceOfTruth}>
      <header className="alert alert-info text-center">
        <h1 className="display-1">Andreani Todo List</h1>
      </header>
      <main>
        <ListaTareas />
        <AgregarTarea />
      </main>
    </Provider>
  );
}

export default App;
