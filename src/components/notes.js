import axios from "axios";
import React from "react";
import { Link, Navigate } from 'react-router-dom';

class Notes extends React.Component{
    constructor(){
        super()
        this.state = {
            userid:1,
            from:null,
            to:null,
            usernotes:null,
            note:null
        }
    }
    saving = async (e) =>{
        e.preventDefault();
        console.log(this.state.note)
        try{
            await axios.post("http://localhost:3001/savingnotes",{
                userid:1,
                note:this.state.note,
                from:this.state.from,
                to:this.state.to
            })
        } catch(error){
            console.log(error.response);
        }
    }
    componentDidMount(){
            axios.post("http://localhost:3001/gettingnotes",{
            userid:this.state.userid
            }).then(response => {
                console.log(response.data)
                    this.setState({
                        usernotes:response.data
                    })
                // this.state.usernotes.map((to,i)=>{
                //     if(to<timestamp()){
                //         const temp = this.state.usernotes.splice(i,1)
                //         this.setState({
                //             usernotes:temp
                //         })
                //     }
                // })
            })
    }
    render(){
        return(
            <div>
                <div className="nvbarnotes">
                    <p className="navbar-brand" ><b>Daily Companion</b></p>
                    <Link to='/home' className="link2" style={{height:"6%"}}>Home</Link>
                    <Link to='/Notes' className="link3" style={{height:"6%"}}>Notes</Link>
                    {/* <input  type="button" value="Logout"></input> */}
                </div>
                <div className="notepad">
                    {/* <textarea type="text" placeholder="Type your new note here" maxLength={100} onChange={(e)=>this.setState({note:e.target.value})}></textarea> */}
                    <div className="inpform">
                        <input className="n" placeholder="Remainder" type="text" onChange={(e)=>this.setState({note:e.target.value})} required></input>
                        <label for="exampleInputEmail1" class="form-label">From</label>
                        <input type="date" placeholder="Add remainder From?" onChange={(e)=>this.setState({from:e.target.value})} required></input>
                        <label for="exampleInputEmail1" class="form-label" style={{left:"20%"}}>To</label>
                        <input type="date" placeholder="Add remainder To?" onChange={(e)=>this.setState({to:e.target.value})} required></input>
                        <input type="button" value="Add Remainder" onClick={(e)=>this.saving(e)} className="addbtn"></input>
                    </div>
                </div>
                <div className="savednotes" >
                    {this.state.usernotes?.map(({note,time,from,to})=>(
                            <div className="svnt1">
                                <p>On - {from}</p>
                                <p>To - {to}</p>
                                <p style={{color:"black"}}>Remainder: {note}.</p>
                                <p style={{fontsize:"10px"}}>Remainder posted on - {time}</p>
                            </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Notes 