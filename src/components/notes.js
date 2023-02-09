import { setDoc,doc, query, where ,getDocs, addDoc,deleteDoc} from "firebase/firestore";
import React, { useContext, useEffect } from "react";
import { Link, Navigate } from 'react-router-dom';
import { db } from "../firebase_config";
import { useState } from "react";
import { Authcontext } from "../project_context/context";
import { collection} from "firebase/firestore";
import { signOut } from "firebase/auth";
import { auth } from "../firebase_config";

function Notes(){
    const [Heading,setHeading]= useState('')
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
                Heading:Heading,
                note:note,
            }
            await setDoc(doc(db,"Notes",`${currentUser.uid}${note}`),noteContent);

        } catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        const gettingNotes = async()=>{
            const q=query(dbRef,where("uid","==",currentUser.uid))
            const querySnapShot = await getDocs(q)
            const temp=[]
            try{    
                querySnapShot.forEach((doc)=>{
                    temp.push(doc.data())
                    setUsernotes(temp)
                })
            }catch(err){
                console.log(err)
            }
        }
        gettingNotes()
    },[])
    useEffect(()=>{
        console.log(usernotes)
    },[usernotes])
    const handleDelete = async(uid,note)=>{
        await deleteDoc(doc(db, "Notes", `${uid}${note}`))
        console.log("Hi")
    }
        return(
            <div className="Notes">
                <div className="navbar" style={{marginLeft:'0.6%'}}>
                    <img src={currentUser.photoURL} style={{height:'50px',width:'50px',borderRadius:'10px'}}></img>
                    <p className="navbar-brand" style={{position:'absolute',left:'5%'}}><b>{currentUser.displayName}</b></p>
                    <Link to='/home' className="link2" >Home</Link>
                    <Link to='/Notes' className="link3" >Notes</Link>
                    {/* <input  type="button" value="Logout"></input> */}
                    <button onClick={()=>signOut(auth)} className="ipbt" style={{left:"86%"}}>Logout</button>
                </div>
                <form className="notepad" onSubmit={(e)=>saving(e)}>
                    {/* <textarea type="text" placeholder="Type your new note here" maxLength={100} onChange={(e)=>this.setState({note:e.target.value})}></textarea> */}
                    <div className="inpform">
                        <label style={{alignSelf:'center',fontSize:'25px'}}>Note Heading</label>
                        <input type="text" placeholder="Heading?" onChange={(e)=>setHeading(e.target.value)} required></input>
                        <input className="n" placeholder="Remainder" type="text" onChange={(e)=>setnote(e.target.value)} required></input>

                        <button type="submit" value="Add Remainder" className="addbtn" > Add Note</button>
                    </div>
                </form>
                <div className="savednotes" >
                    {usernotes?.map((note)=>(
                            <div className="svnt1">
                                <button className="delete" onClick={()=>handleDelete(note.uid,note.note)}>Delete</button>
                                <p style={{fontWeight:'750',size:'30px'}}>{note.Heading}</p>
                                <p style={{color:"black"}}>Remainder: {note.note}.</p>
                                {/* <p style={{fontsize:"10px"}}>Remainder posted on - {note.time}</p> */}
                            </div>
                    ))}
                </div>
            </div>
        )
    }

export default Notes 