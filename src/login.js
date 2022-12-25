import React from "react";
import axios from "axios";

class Logintable extends React.Component{
    constructor(){
        super()
        this.state = {
            name:null,
            email:null,
            country:null,
            state:null
        }
    }
    postinfo(){
        axios.post('http://localhost:3000/signup', {
            name:this.state.name,
            email:this.state.email,
            country:this.state.country,
            state:this.state.state
        }).then (()=>{
            console.log("patti")
        })
    }
    render(){
        return(
            <div>
                <input type="text" className="ipna" placeholder="Name" onChange={(e)=>{this.setState({name:e.target.value})}}></input>
                <input type="email" className="ipem" placeholder="E-mail" onChange={(e)=>{this.setState({email:e.target.value})}}></input>
                <input type="text" className="ipco" placeholder="Country" onChange={(e)=>{this.setState({country:e.target.value})}}></input>
                <input type="text" className="ipst" placeholder="State/Province" onChange={(e)=>{this.setState({state:e.target.value})}}></input>
                <input type="button" onClick={() => this.postinfo()}></input>
            </div>
        )
    }
}

export default Logintable