import React, { useContext } from "react";
import { useState,useEffect } from "react";
import {Username} from '../project_context/context';

function Loadname(){
    const [username,setUsername] = useContext(Username)
    return(
        <h1>{username}</h1>
        )
}

export default Loadname