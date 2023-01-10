import './App.css';
import Navbar from './components/navbar';
import React, { useContext } from "react";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import {Logintable , Login} from './login.js';
import Notes from './components/notes';
import {Username} from './project_context/context'
function App() {
  const [username,setusername] = useContext(Username)
  return (
    <Router>
      <Username.Provider value = {[username,setusername]}>
        <Routes>
            <Route exact path="/home" element={<Navbar />} />
            <Route exact path="/signup" element={<Logintable />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/notes" element={<Notes />} />
        </Routes>
      </Username.Provider>
    </Router>
  )
}

export default App;