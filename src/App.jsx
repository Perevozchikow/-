import React, {useState} from "react";
import './App.css';
import InputTodo from "./Component/input/InputTodo";

function App() {

  const [count, setCount] = useState([]);



  const todo = (value) => {
  console.log(value)
    if (value){
      setCount([...count, {text: value, id: Date.now()}])
    }
  }

  return (

      <div className={"container"}>
        <div  className={"todo_container"}>
          <h3 className={"title"}>To Do App</h3>
          <div>
            <InputTodo todo={todo}/>
            <button type={"submit"} onClick={todo} id={"btn"} className={"btn"}>+</button>
          </div>

          <ul className={"resul"}>{
            count.map(count => {
            return(
                <li key={count.id}>
                  {count.text}
                </li>
            )
          })}

          </ul>


        </div>
      </div>
  )
}

export default App;
