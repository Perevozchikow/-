import React, {useState} from "react";
import './App.css';


function App() {

  const [count, setCount] = useState([]);
  const [value, setValue] = useState("");

  const handleChange = (el) =>  {
    setValue(el.target.value)
  }
  const todoBtn = (el)=>{
    el.preventDefault()
    todo(value)
    setValue("")
  }

  const todo = (value) => {
  console.log(value)
    if (value){
      setCount([...count, {text: value, id: 1}])
    }
  }

  return (

      <div className={"container"}>
        <div  className={"todo_container"}>
          <h3 className={"title"}>To Do App</h3>
          <div>
            <input onChange={handleChange}  value={value} type="text" placeholder="Add new task"/>{todo}
            <button type={"submit"} onClick={todoBtn} id={"btn"} className={"btn"}>+</button>
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
