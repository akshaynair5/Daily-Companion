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
        console.log(lr)
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

                <div className="info">
                    <div className="aa">
                        <div className="temp">
                            <p><b>{this.props.tempe1}</b>℉</p>
                        </div>
                        <div className='country'>
                            <p><b>{this.props.city1} , {this.props.country1} </b></p>
                        </div>
                    </div>
                    <div className="feelslike">
                        <p><b>Feels Like : </b>{this.props.feels1} ℉</p>
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