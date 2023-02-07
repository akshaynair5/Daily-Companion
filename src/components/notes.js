import { setDoc,doc, query, where ,getDocs, addDoc} from "firebase/firestore";
import React, { useContext, useEffect } from "react";
import { Link, Navigate } from 'react-router-dom';
import { db } from "../firebase_config";
import { useState } from "react";
import { Authcontext } from "../project_context/context";
import { collection} from "firebase/firestore";

function Notes(){
    const [from,setFrom]= useState('')
    const [to,setto] = useState('')
    const [usernotes,setUsernotes] = useState([])
    const [note,setnote]= useState('')
    const {currentUser} = useContext(Authcontext)
    const dbRef = collection(db,"Notes")
    const saving = async (e) =>{
        e.preventDefault();
        try{
            // await setDoc(doc(db,"Notes",currentUser.uid),{
            // });
            let noteContent  = {
                uid:currentUser.uid,
                from:from,
                to:to,
                note:note,
            }
            await addDoc(dbRef,noteContent);

        } catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        const gettingNotes = async()=>{
            const q=query(dbRef,where("uid","==",currentUser.uid))
            const querySnapShot = await getDocs(q)
    
            try{    
                querySnapShot.forEach((doc)=>{
                    setUsernotes((state)=>[...state,doc.data()])
                })
            }catch(err){
                console.log(err)
            }
        }
        gettingNotes()
    },[])
    useEffect(()=>{
        console.log("yessss")
    },[usernotes])

        return(
            <div>
                <div className="nvbarnotes">
                    <img src={currentUser.photoURL} style={{height:'50px',width:'50px',borderRadius:'10px'}}></img>
                    <p className="navbar-brand" style={{position:'absolute',left:'5%'}}><b>{currentUser.displayName}</b></p>
                    <Link to='/home' className="link2" style={{height:"6%"}}>Home</Link>
                    <Link to='/Notes' className="link3" style={{height:"6%"}}>Notes</Link>
                    {/* <input  type="button" value="Logout"></input> */}
                </div>
                <form className="notepad" onSubmit={(e)=>saving(e)}>
                    {/* <textarea type="text" placeholder="Type your new note here" maxLength={100} onChange={(e)=>this.setState({note:e.target.value})}></textarea> */}
                    <div className="inpform">
                        <input className="n" placeholder="Remainder" type="text" onChange={(e)=>setnote(e.target.value)} required></input>
                        <label >From</label>
                        <input type="date" placeholder="Add remainder From?" onChange={(e)=>setFrom(e.target.value)} required></input>
                        <label  style={{left:"20%"}}>To</label>
                        <input type="date" placeholder="Add remainder To?" onChange={(e)=>setto(e.target.value)} required></input>
                        <button type="submit" value="Add Remainder" className="addbtn" > Add Note</button>
                    </div>
                </form>
                <div className="savednotes" >
                    {usernotes?.map((note)=>(
                            <div className="svnt1">
                                <p>On - {note.from}</p>
                                <p>To - {note.to}</p>
                                <p style={{color:"black"}}>Remainder: {note.note}.</p>
                                {/* <p style={{fontsize:"10px"}}>Remainder posted on - {note.time}</p> */}
                            </div>
                    ))}
                </div>
            </div>
        )
    }

export default Notes 