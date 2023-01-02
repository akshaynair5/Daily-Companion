import React from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

class Logintable extends React.Component{
    constructor(){
        super()
        this.state = {
            name:null,
            password:null,
            email:null,
            country:null,
            state:null
        }
    }
    postinfo = async (e) => {
        e.preventDefault();
        try{
                await axios.post("http://localhost:3001/new/signup"  , {
                    uname:this.state.name,
                    upassword:this.state.password,
                    uemail:this.state.email,
                    ucountry:this.state.country,
                    ustate:this.state.state
            })
        } catch(error){
            console.log(error.response);
        }

    }
    render(){
        return(
            <div className="sform">
                <input type="text" className="ipna" placeholder="Name" onChange={(e)=>{this.setState({name:e.target.value})}}></input>
                <input type="text" className="ippa" placeholder="Password" onChange={(e)=>{this.setState({password:e.target.value})}}></input>
                <input type="email" className="ipem" placeholder="E-mail" onChange={(e)=>{this.setState({email:e.target.value})}}></input>
                <input type="text" className="ipco" placeholder="Country" onChange={(e)=>{this.setState({country:e.target.value})}}></input>
                <input type="text" className="ipst" placeholder="State/Province" onChange={(e)=>{this.setState({state:e.target.value})}}></input>
                <input type="button" onClick={(e) => this.postinfo(e)} value="Sign-Up"></input>
                <p>Already a member?</p>
                <Link to='/login' className="link1">click here to login</Link>
            </div>
        )
    }
}

class Login extends React.Component{
    constructor(){
        super()
        this.state = {
            email:null,
            password:null
        }
    }
    render(){
        return(
                <div className="sform">
                    <input type="email" className="ipem" placeholder="E-mail" onChange={(e)=>{this.setState({email:e.target.value})}}></input>
                    <input type="text" className="ippa" placeholder="Password" onChange={(e)=>{this.setState({password:e.target.value})}}></input>
                    <input type="button" onClick={(e) => this.postinfo(e)} value="Sign-Up"></input>
                    <p>Not a member?</p>
                    <Link to='/new/signup' className="link1">click here to Signup</Link>
                </div>
        )
    }
}  

export {Logintable , Login}