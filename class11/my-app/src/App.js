import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Card from './component/Card.js'
function App() {
  let [todo, setTodo] = useState([
    {value: "Minahil",
      disabled: true
    },
    {value: "dua",
      disabled: true
    }
  ]);
  let [value, setValue] = useState("")
  let addTodo = ()=>{
    setTodo(
      [...todo, {value, disabled: true}]
    )
    setValue("")
  }
  return (
    <div className="App">
    <h1>Todo APP</h1>
    <input type='text' placeholder='Enter todo here...' value={value} onChange={(e)=> setValue(e.target.value)}/>
    <button onClick={addTodo}>Add Todo</button> 
    <button onClick={()=> setTodo([])}>Delete All</button>
    <br/>
    <ul>
      {
        todo.map((v,i)=> <li key={i}> 
        <input defaultValue={v.value} disabled={v.disabled}/> 
        <button onClick={()=>{
          let oldTodo = [...todo];
          oldTodo.splice(i,1);
          setTodo(oldTodo)
        }}>Delete</button>
       {
        v.disabled === true ?
         <button onClick={()=>{
          let oldTodo = [...todo];
          oldTodo.splice(i, 1, {...v, disabled: false})
          setTodo(oldTodo)
        }}>Edit</button> :
        <button onClick={()=>{
          let oldTodo = [...todo]
         oldTodo.splice(i, 1, {...v, disabled: true})
          setTodo(oldTodo)
        }}>Update</button>
       }
        </li>)
      }
    </ul>
    <Card/>
    </div>
  );
}

export default App;
