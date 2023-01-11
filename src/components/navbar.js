import React, { useContext } from "react";
import { useState,useEffect } from "react";
import {Username} from '../project_context/context';
import App from "../App";
import Loadname from "./input";
// import './App.css';
import Info from "./info";
import Resp from "./resp"
import { Link, Navigate } from 'react-router-dom';
class Navbar extends React.Component{
    constructor() {
        super()
        this.state = {
            state:null,
            tempe:null,
            feels:null,
            humi:null,
            tmax:null,
            temp_min:null,
            deg:null,
            gus:null,
            inputText:null,
            report:null,
        };

    }
    componentDidMount(){
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${this.state.inputText},&limit=5&appid=9413103f25a00a0e82d52d9040e82435`)
            .then(response => response.json())
            .then(data => {
                const lati = data[0].lat;
                const long = data[0].lon;
                console.log(lati);
                console.log(long);
                fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lati}&lon=${long}&appid=9413103f25a00a0e82d52d9040e82435&units=imperial`)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data);
                        this.setState ({
                                tempe : data.list[0].main.temp,
                                feels : data.list[0].main.feels_like,
                                humi : data.list[0].main.humidity,
                                tmax : data.list[0].main.temp_max,
                                temp_min : data.list[0].main.temp_min,
                                winds : data.list[0].wind.speed,
                                deg : data.list[0].wind.deg,
                                gus : data.list[0].wind.gust,
                                coun : data.city.country,
                                city : data.city.name,
                                report : data.list[0].weather[0].description,
                                main1 :data.list[0].weather[0].main
                            })

                })
            })
        }
    Loadcon() {
        // http://api.openweathermap.org/geo/1.0/direct?q=dubai,&limit=5&appid=9413103f25a00a0e82d52d9040e82435
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${this.state.inputText},&limit=5&appid=9413103f25a00a0e82d52d9040e82435`)
            .then(response => response.json())
            .then(data => {
                const lati = data[0].lat;
                const long = data[0].lon;
                console.log(lati);
                console.log(long);
                fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lati}&lon=${long}&appid=9413103f25a00a0e82d52d9040e82435&units=imperial`)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data);
                        this.setState ({
                                tempe : data.list[0].main.temp,
                                feels : data.list[0].main.feels_like,
                                humi : data.list[0].main.humidity,
                                tmax : data.list[0].main.temp_max,
                                temp_min : data.list[0].main.temp_min,
                                winds : data.list[0].wind.speed,
                                deg : data.list[0].wind.deg,
                                gus : data.list[0].wind.gust,
                                coun : data.city.country,
                                city : data.city.name,
                                report : data.list[0].weather[0].description,
                                main1 :data.list[0].weather[0].main
                            })

                })
            })
        }
    render(){
        return( 
            <nav className="navbar">
                <div className="container-fluid">
                    {/* <Loadname/> */}
                    <p className="navbar-brand" ><b>Daily Companion</b></p>
                    <Link to='/home' className="link2">Home</Link>
                    <Link to='/Notes' className="link3">Notes</Link>
                    <input className="ipbx" placeholder="Search City" aria-label="Search" id="sbar" onChange={(e) => this.setState({ inputText: e.target.value })} ></input>
                    <button  onClick = { () => this.Loadcon()} className="ipbt">Search</button>
                    <Resp desc = {this.state.report}/>
                    <Info tempe1={this.state.tempe} feels1 ={this.state.feels} winds1 = {this.state.winds}
                        gus1 = {this.state.gus} country1 = {this.state.coun}  city1 = {this.state.city}/>
                </div>
            </nav>
        )
    }
}
export {Loadname}
export default Navbar 