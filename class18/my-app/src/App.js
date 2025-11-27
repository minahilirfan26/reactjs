import logo from './logo.svg';
import './App.css';
import { useReducer } from 'react';

let Initial_State = {
  theme: "light",
  site: "SMIT"
}

function reducer(state, action) {
  switch(action.type){
    case "updated_theme":
  return  {
      ...state,
      theme: action.theme
    }
    default: {
      state
    }
  }
}

function App() {
  let [state, dispatch] = useReducer(reducer, Initial_State)
  // console.log(state)
  return (
    <div className="App">
 <h1>{state.theme}</h1>
 <button onClick={()=> dispatch({type: "updated_theme", theme: "dark"})}>Update Theme</button>
    </div>
  );
}

export default App;
