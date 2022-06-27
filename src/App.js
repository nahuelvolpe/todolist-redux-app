import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { ListaTareas } from "./components/ListaTareas";
import { AgregarTarea } from "./components/AgregarTarea";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <header className="alert alert-info text-center">
        <h1 className="display-1">Redux To-do List</h1>
      </header>
      <main>
        <ListaTareas />
        <AgregarTarea />
      </main>
    </Provider>
  );
}

export default App;
