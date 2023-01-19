import React, { useContext ,useState } from "react";
import axios from "axios";
import { Link, Navigate } from 'react-router-dom';
import {Username} from './project_context/context';
import { useEffect } from "react";
import { SetCookie,RemoveCookie,GetCookie } from "./cookies";
// import {withRouter} from 'react-router-dom';

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


function Login(){
    const [show,setShow] = useState("hidden")
    const [name,setName] = useState()
    const [state,setState] = useState()
    const [country,setCountry] = useState()
    const [email,setEmail] = useState()
    const [password,setPass] = useState()
    const {username,setUsername} = useContext(Username);
    const validation = async (e) =>{
                e.preventDefault()
                await axios.post("http://localhost:3001/validation",{
                email:email,
                password:password
            }).then((response)=>{
                console.log(response.data)
                        setShow("visible")
                        setName(response.data[0].name)
                        setState(response.data[0].state)
                        setCountry(response.data[0].country)
                        setUsername(name)
            })
    }
    return(
        <div>
            <div className="sform">
                <input type="email" className="ipem" placeholder="email" onChange={(e)=>{setEmail(e.target.value)}}></input>
                <input type="text" className="ippa" placeholder="Password" onChange={(e)=>{setPass(e.target.value)}}></input>
                <input type="button" onClick={(e) => validation(e)} value="Sign-Up"></input>
                <p>Not a member?</p>
                <Link to='/new/signup' className="link1">click here to Signup</Link>
                <Link className="redir" to="/home" style={{color:"white",visibility:show}} value="Sign-Up">Move to home page</Link>
            </div>
        </div>
    )
}
// export default withRouter(Login);
export {Logintable , Login}