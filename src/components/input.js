import React from "react";
// import './App.css';

class Inp extends React.Component{
    render(){
        return(
            <div className="inp">
                <input type="text" placeholder= "Enter Country name" className="inpt"></input>
                <input type="text" placeholder= "Enter state name" className="inpt"></input>
            </div>
        )
    }
} 

export default Inp