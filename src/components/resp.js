import React, { useContext, useState } from "react"
import {Username} from '../project_context/context';
import { useEffect } from "react";

function Resp(props){
    // const [bgimg,setbgimg] = useState()
    const [desc,setdesc] = useState()
    useEffect(()=> {
        if(props.desc == 'rainy'){
            setdesc(`, Make sure to take your umbrella!! as it is rainy outside`)
        }
        else if(props.desc == 'light rain'){
            setdesc(`, A bit of light rain outside but do take your umbrella just to be safe!!`)
        }
        else if(props.desc == 'overcast clouds'){
            setdesc(`,there's Some overcast clouds but nothing to worry about enjoy your day!!`)
        }
        else{
            setdesc(`, Enjoy today's weather with beautiful clear skies !!!`)
        }
    })
    return(
        <div className="resp1" >
            <p>Hey {desc} </p>
        </div>
    )
}
export default Resp