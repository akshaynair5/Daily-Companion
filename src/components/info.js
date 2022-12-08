// import './App.css';
// https://openweathermap.org/appid
import React from "react";
import Navbar from './navbar';
import News from './news';
// import './App.css';

class Info extends React.Component{

    render(){
        return(
            <div>
                <div className="info">
                    <div className="aa">
                        <div className="temp">
                            <p><b>{this.props.tempe1}</b>F</p>
                        </div>
                        <div className='country'>
                            <p><b>{this.props.city1} , {this.props.country1}</b></p>
                        </div>
                    </div>
                    <div className="feelslike">
                        <p><b>Feels Like : </b>{this.props.feels1} F</p>
                    </div>
                    <div className="nwea">
                        <p> </p>
                    </div>
                    <div className="wind">
                        <div className="speed">
                            <p><b>Wind Speed:  </b>{this.props.winds1}</p>
                        </div>
                        <div className="gust">
                            <p><b>Wind Gust:   </b>{this.props.gus1}</p>
                        </div>
                    </div>
                </div>
                <News />
            </div>
            
        )
    }
}

export default Info