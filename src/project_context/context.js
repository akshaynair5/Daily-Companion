import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase_config";
import { onAuthStateChanged } from "firebase/auth";

export const Authcontext = createContext()
export const AuthcontextProvider =({children})=>{
    const [currentUser,setCurrentUser] = useState({})

    useEffect(()=>{
        const unsub = onAuthStateChanged(auth,(user)=>{
            setCurrentUser(user)
            console.log(user);
        })
        return ()=>{
            unsub();
        }
    },[]);
    // <AuthContext.Provider value={{currentUser}}>
    //     {children}
    // </AuthContext.Provider>
    return(
        <Authcontext.Provider value={{currentUser}}>
            {children}
        </Authcontext.Provider>
    )
    
}