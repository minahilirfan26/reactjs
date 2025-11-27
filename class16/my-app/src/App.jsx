import logo from './logo.svg';
import './App.css';
import AppRouter from './config/router';
import User from './context/Context';
import { useState } from 'react';
import ChatApp from './context/Chat';

function App() {
  let [user, setUser] = useState({name: "minahil", email: "duashaikh603@gmail.com"})

  return (
    <User.Provider value={{user, setUser}}>

    <AppRouter/>
  
  </User.Provider>
  
  );
}

export default App;
