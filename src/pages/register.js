import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable } from "firebase/storage";
import { useState } from "react";
import { auth } from '../firebase_config';
import { storage } from "../firebase_config";
import { getDownloadURL } from "firebase/storage";
import {Link, useNavigate } from "react-router-dom";
import ProfilePicIcon from "../images/user.png"
import { db } from "../firebase_config";
import { doc, setDoc } from "firebase/firestore"; 

function Register (){
    const navigate = useNavigate()
    const [err,setErr] = useState(false)
    const HandleSubmit= async (e)=>{
        e.preventDefault();
        const displayName = e.target[0].value
        const email = e.target[1].value
        const state = e.target[2].value
        const password = e.target[3].value
        const DP = e.target[4].files[0]
        const storageid = new Date().getTime()
        const User = await createUserWithEmailAndPassword(auth,email,password)
        const storageRef = ref(storage,`${storageid}`)
        await uploadBytesResumable(storageRef,DP)
            .then(()=>{
                getDownloadURL(storageRef).then(async (downloadURL) => {
                    try{
                        await updateProfile(User.user,{
                            displayName,
                            photoURL:downloadURL,
                        })
                        await setDoc(doc(db, "users", User.user.uid), {
                            uid: User.user.uid,
                            displayName,
                            email,
                            photoURL: downloadURL,
                            state:state,
                        });
                    }
                    catch(err){
                        setErr(true)
                    }
                navigate("/home")
            })
        })
        

    }
    return(
        <div className="FormBox">
            <form onSubmit={(e)=>HandleSubmit(e)}>
                <input type="text" placeholder="Name" required></input>
                <input type="email" placeholder="Email-ID" required></input>
                <input type="text" placeholder="state of Residence" required></input>
                <input type="password" placeholder="Password" required></input>
                <label htmlFor="Fl"><img src={ProfilePicIcon} style={{height:'50px',alignSelf:'center'}}></img><p style={{marginLeft:'5%'}}>Add Profile Photo</p></label>
                <input id="Fl" type="file" placeholder="file" style={{display:'none'}} required></input>
                <input type="submit" id="S" value="Register"></input>
                {err && <span style={{alignSelf:'center'}}>Something went wrong, Try Again</span>}
                <p style={{width:'26%',color:'black'}}>Have an Account? <b><Link style={{marginLeft:'2%',textDecoration:'none'}} to="/Daily-Companion">Login Now</Link></b></p>
            </form>
        </div>
    )
}

export default Register