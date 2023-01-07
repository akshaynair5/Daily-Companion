import axios from "axios";
import React from "react";
import Navbar from "./navbar"

class Notes extends React.Component{
    constructor(){
        super()
        this.state = {
            userid:1,
            usernotes:null,
        }
    }
    saving = async (e) =>{
        e.preventDefault();
        console.log(this.state.note)
        try{
            await axios.post("http://localhost:3001/savingnotes",{
                userid:1,
                note:this.state.note,
            })
        } catch(error){
            console.log(error.response);
        }
    }
    componentDidMount(){
            axios.post("http://localhost:3001/gettingnotes",{
            userid:this.state.userid
            }).then(response => {
                    this.setState({
                        usernotes:response.data
                    })
            })
    }
    render(){
        return(
            <div>
                <div className="nvbarnotes">
                    <input  type="button" value="Logout"></input>
                </div>
                <div className="notepad">
                    <textarea type="text" placeholder="Type your new note here" maxLength={100} onChange={(e)=>this.setState({note:e.target.value})}></textarea>
                    <input type="button" value="+" onClick={(e)=>this.saving(e)}></input>
                </div>
                <div className="savednotes" >
                    {this.state.usernotes?.map(({note})=>(
                            <div className="svnt1">
                                <p style={{color:"black"}}>{note}</p>
                            </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Notes 