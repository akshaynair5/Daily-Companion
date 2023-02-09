import React, { useContext } from "react";
import { useState,useEffect } from "react";
import App from "../App";
import Info from "./info";
import Resp from "./resp"
import { Authcontext } from "../project_context/context";
import { Link, Navigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from "../firebase_config";
import { collection, query, where } from "firebase/firestore";
import { db } from "../firebase_config";
import { getDocs } from "firebase/firestore";

function Navbar(){
    const [temp,settemp] = useState('') 
    const [feels,setfeels] = useState('')
    const [humi,sethumi] = useState('')
    const [tmax ,settmax ] = useState('')
    const [temp_min,settemp_min] = useState('')
    const [winds,setwinds] = useState('')
    const [deg,setdeg] = useState('')
    const [gus,setgus] = useState('')
    const [report,setreport] = useState('')
    const [main1,setmain1] = useState('')
    const [coun,setcoun] = useState('')
    const [city,setcity] = useState('')
    const [input,setinput] = useState('')
    const[userInfo,setUserInfo]=useState('')
    const usersRef = collection(db, "users");
    const {currentUser} = useContext(Authcontext)
    useEffect(()=>{
        async function Fetchdata() {
            const q = query(usersRef, where("uid", "==", currentUser.uid))
            const querySnapShot = await getDocs(q)
            try{
                querySnapShot.forEach((doc)=>{
                    setUserInfo(doc.data())
                })
            }catch(err){
                console.log(err)
            }
        }
        Fetchdata()
        console.log("podi")
    },[])
    useEffect(()=>{
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${userInfo.state},&limit=5&appid=9413103f25a00a0e82d52d9040e82435`)
            .then(response => response.json())
                .then(data => {
                    const lati = data[0].lat;
                    const long = data[0].lon;
                    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lati}&lon=${long}&appid=9413103f25a00a0e82d52d9040e82435&units=imperial`)
                        .then(response => response.json())
                        .then(data => {
                                    settemp(data.list[0].main.temp)
                                    setfeels(data.list[0].main.feels_like)
                                    sethumi (data.list[0].main.humidity)
                                    settmax  (data.list[0].main.temp_max)
                                    settemp_min (data.list[0].main.temp_min)
                                    setwinds ( data.list[0].wind.speed)
                                    setdeg (data.list[0].wind.deg)
                                    setgus(data.list[0].wind.gust)
                                    setreport(data.list[0].weather[0].description)
                                    setmain1(data.list[0].weather[0].main)
                                    setcoun (data.city.country)
                                    setcity ( data.city.name)

                    })
                })
    },[userInfo])

    const Loadcon=()=> {
        // http://api.openweathermap.org/geo/1.0/direct?q=dubai,&limit=5&appid=9413103f25a00a0e82d52d9040e82435
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${input},&limit=5&appid=9413103f25a00a0e82d52d9040e82435`)
            .then(response => response.json())
            .then(data => {
                const lati = data[0].lat;
                const long = data[0].lon;
                fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lati}&lon=${long}&appid=9413103f25a00a0e82d52d9040e82435&units=imperial`)
                    .then(response => response.json())
                    .then(data => {
                            settemp(data.list[0].main.temp)
                            setfeels(data.list[0].main.feels_like)
                            sethumi (data.list[0].main.humidity)
                            settmax  (data.list[0].main.temp_max)
                            settemp_min (data.list[0].main.temp_min)
                            setwinds ( data.list[0].wind.speed)
                            setdeg (data.list[0].wind.deg)
                            setgus(data.list[0].wind.gust)
                            setreport(data.list[0].weather[0].description)
                            setmain1(data.list[0].weather[0].main)
                            setcoun (data.city.country)
                            setcity ( data.city.name)
                })
            })
        }

        return( 
            <>
                <nav className="navbar" style={{marginLeft:'0.6%'}}>
                    {/* <Loadname/> */}
                    <img src={currentUser.photoURL} style={{height:'50px',width:'50px',borderRadius:'10px'}}></img>
                    <p className="navbar-brand" style={{position:'absolute',left:'5%'}}><b>{currentUser.displayName}</b></p>
                    <Link to='/home' className="link2">Home</Link>
                    <Link to='/Notes' className="link3">Notes</Link>                
                    <input className="ipbx" placeholder="Search City" aria-label="Search" id="sbar" onChange={(e) =>setinput(e.target.value)} ></input>
                    <button  onClick = { () => Loadcon()} className="ipbt">Search</button>
                    <button onClick={()=>signOut(auth)} className="ipbt" style={{left:"86%"}}>Logout</button>
                </nav>
                <Resp desc = {report}/>
                <Info tempe1={temp} feels1 ={feels} winds1 = {winds}
                    gus1 = {gus} country1 = {coun}  city1 = {city} desc = {report} tempmin={temp_min} tempmax={tmax}/>
            </>

        )
}
export default Navbar 