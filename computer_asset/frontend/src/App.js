import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './comp/Navbar';
import Home from './comp/Home';
import SoftInstalled from './comp/SoftInstalled';
import StorageInfo from './comp/StorageInfo';
import MemoryDetails from './comp/MemoryDetails';
import Wel from './comp/Wel';



function App() {
  const [login, setLogin] = useState(true);

  const verifyUser = () => {
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    if (user === "admin@gmail.com" && pass === "admin") {
      setLogin(false);
    }
    console.log(login);
  }

  const logout = () => {
    setLogin(true);
  }

  return (
    <Router>
      <Navbar login={login} logout={logout} />
      <Route path="/" exact>

      <Wel isLoggedIn={login} verifyUser={verifyUser} />
      </Route>

      <Route path="/home">

        <Home login={login} />
      </Route>
      <Route path="/soft_inst">

        <SoftInstalled login={login} />
      </Route>
      <Route path="/storage_info">

        <StorageInfo login={login} />
      </Route>
      <Route path="/mem_details">

        <MemoryDetails login={login} />
      </Route>
    </Router>
  )
}

export default App;
