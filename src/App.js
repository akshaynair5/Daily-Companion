import './App.css';
import Navbar from './components/navbar';
import React from "react";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Logintable from './login.js';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Navbar />} />
        <Route path="/signup" element={<Logintable />} />
      </Routes>
    </Router>
  )
}

export default App;