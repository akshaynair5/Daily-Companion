import './App.css';
import Navbar from './components/navbar';
import React, { useContext } from "react";
import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import Login from './pages/login';
import Notes from './components/notes';
import Register from './pages/register';
import { Navigate } from 'react-router-dom';
import { Authcontext } from './project_context/context';
function App() {
  const {currentUser} = useContext(Authcontext)
  const ProtectedRoute = ({children})=>{
    if(!currentUser){
      return(
        <Navigate to="/Daily-Companion"/>
      )
    }
    return(
      children
    )
  }
  return (
    <BrowserRouter >
        <Routes basename='/Daily-Companion'>
            <Route path="/home" element={<ProtectedRoute><Navbar /></ProtectedRoute>} />
            <Route path="/register" element={<Register />} />
            <Route exact path="/Daily-Companion" element={<Login />} />
            <Route path="/notes" element={<ProtectedRoute><Notes /></ProtectedRoute>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App;