import React from "react";
import axios from "axios";
import { Link, Navigate } from 'react-router-dom';
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

class Login extends React.Component{
    constructor(){
        super();
        // this.validation()=this.validation.bind(this);
        this.state = {
            // show:"hidden",
            show:"visible",
            username:null,
            state:null,
            country:null,
            email:null,
            password:null,
            state:null
        }
    }
    validation = async (e) =>{
        e.preventDefault();
                await axios.post("http://localhost:3001/validation",{
                email:this.state.email,
                password:this.state.password
            }).then((response)=>{
                console.log(response.data)
                this.setState({
                    show:"visible",
                    username:response.data[0].name,
                    state:response.data[0].state,
                    country:response.data[0].country,
                    // redirect:true
                })
            })

            // if(this.state.username != null){
                // setTimeout(()=>{
                //     console.log("fu");
                //     this.state.redirect && <Navigate to='/home' replace={true}/>
                // } , 1000)
    }
    redir(){

    }
    // const nav = useNavigate()
    render(){
        return(
                <div className="sform">
                    <input type="email" className="ipem" placeholder="E-mail" onChange={(e)=>{this.setState({email:e.target.value})}}></input>
                    <input type="text" className="ippa" placeholder="Password" onChange={(e)=>{this.setState({password:e.target.value})}}></input>
                    <input type="button" onClick={(e) => this.validation(e)} value="Sign-Up"></input>
                    <p>Not a member?</p>
                    <Link to='/new/signup' className="link1">click here to Signup</Link>
                    <Link className="redir" to="/home" style={{color:"white",visibility:this.state.show}} value="Sign-Up">Move to home page</Link>

                </div>
        )
    }
}  

// export default withRouter(Login);
export {Logintable , Login}