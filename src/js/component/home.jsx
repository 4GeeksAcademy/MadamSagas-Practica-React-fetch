import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
//onClick --> BFF de los botones
// onChange --> BFF de los Inputs identifica
//              cuando el usuario modifica un input
// Los eventos nos dan una serie de informacion, Valores

//create your first component
const Home = () => {
  //let nuevoTodo = "";
  //nuevoTodo = el valor q vamos a mostrar
  //setNuevoTodo = la funcion para modificar el valor
  //de nuevoTodo
  const [nuevoTodo, setNuevoTodo] = useState("");
  const [todos, setTodos] = useState([
    "Una tarea de prueba, ",
    " Dos tareas de prueba, ",
  ]);
  const handleClick = () => {
    console.log("Nueva tarea:", nuevoTodo);
    // setTodos nos permote modificar todos
    // [...laLista, nuevoTodo]
    setTodos([...todos, nuevoTodo]);
    setNuevoTodo("")
  };

  // Funcion que borre una tarea
  const deleteTodo = (index) => {
    console.log(index);
    //filtro todos los elementos todos los elemente menos aquel elemento que se igual
    //al indice de cuyo indice quiero borrar
    const listaNueva = todos.filter((todo, i) => i !== index);
    setTodos(listaNueva);
  };
  // * Las funciones de JS que manejan eventos NORMALMENTE
  // son llamadas con la palabra "handle" y el evento: nombre del evento
  const handleChange = (event) => {
    setNuevoTodo(event.target.value);
  };

  return (
    <div className="text-center">
      <h1 className="mt-5 text-center">Todo List</h1>

      <div className="container">
        <div className="d-flex gap-1">
          <input value={nuevoTodo} className="form-control" type="text" onChange={handleChange} />
          <button className="btn btn-primary" onClick={handleClick}>
            Agrgar Tarea
          </button>
        </div>

        <p>Nueva Tarea: {nuevoTodo}</p>
        <ul className="list-group">
          {todos.map((todo, index) => {
            return (
              <li className={`list-group-item d-flex 
              justify-content-between 
              align-items-center ${index % 2 === 0 ? "bg-light" : ""}`}>
                {todo}{" "}
                <button
                  className="btn btn-danger justify-content-center"
                  onClick={() => deleteTodo(index)}
                >
                  Borrar
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Home;
