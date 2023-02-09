// import './App.css';
// https://openweathermap.org/appid
import React from "react";
import Navbar from './navbar';
import News from './news';
import hr from './hr.jpeg'
import lr from './lr.jpg'
import sd from './sd.jpg'
// import './App.css';

class Info extends React.Component{
    constructor(){
        super()
        this.state = {
            
        }
    }
    componentDidMount(){
        if(this.props.desc=='light rain'){
            this.setState({
                background:`${lr}`
            })
        }
        else if(this.props.desc=='rainy'){
            this.setState({
                background:`${hr}`
            })
        }
        else{
            this.setState({
                background:`${sd}`
            })
        }
    }
    
    render(){
        return(
            <div className="fullinfo">
                <div className="info" style={{backgroundImage:`url(${this.state.background})`,backgroundSize:'cover'}}>
                    <div className="WeatherContent" style={{backgroundColor:'rgba(0, 0, 0, 0.464)',paddingLeft:'12%',borderRadius:'25px'}}>
                        <div className="temp" style={{fontSize:'100px'}}>
                            <p><b>{this.props.tempe1}</b>℉</p>
                        </div>
                        <div className='country' style={{fontSize:'20px'}}>
                            <p><b>{this.props.city1} , {this.props.country1} </b></p>
                        </div>
                        <div className="feelslike" style={{fontSize:'25px'}}>
                            <p><b>Feels Like : </b>{this.props.feels1} ℉</p>
                        </div>
                        <div className="feelslike" style={{fontSize:'25px'}}>
                            <p><b>Humidity : </b>{this.props.humi} ℉</p>
                        </div>
                        <div className="gust" style={{fontSize:'25px'}}>
                            <p><b>Max Temperature:   </b>{this.props.tempmax}℉</p>
                        </div>
                        <div className="gust" style={{fontSize:'25px'}}>
                            <p><b>Min Temperature:   </b>{this.props.tempmin}℉</p>
                        </div>
                        <div className="speed" style={{fontSize:'25px'}}>
                            <p><b>Wind Speed:  </b>{this.props.winds1} Mph</p>
                        </div>
                        <div className="gust" style={{fontSize:'25px'}}>
                            <p><b>Wind Gust:   </b>{this.props.gus1} Mph</p>
                        </div>
                    </div>
                </div>
                <News />
            </div>
            
        )
    }
}

export default Info