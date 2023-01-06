import React from "react"
// import nr from 'hr.jpeg';
class Resp extends React.Component{
    constructor () {
        super()
        this.state = {
            desc:null,
            bgimg:null
        };
    }
    componentDidMount() {
        if(this.props.desc == 'rainy'){
            this.setState({
                desc:"Make sure to take your umbrella!! as it is rainy outside",
                bgimg:"hr.jpeg"
            })
        }
        else if(this.props.desc == 'light rain'){
            this.setState({
                desc:"A bit of light rain outside but do take your umbrella just to be safe!!",
                bgimg:"lr.jpg"
            })
        }
        else{
            this.setState({
                desc:"Enjoy today's weather with beautiful clear skies !!!",
                bgimg:"sd.jpg"
            })
        }
    }
    render(){
        return (
            <div className="resp1" onMouseEnter = {() => this.decider()} style={{background:this.state.bgimg}}>
                <p>{this.state.desc} </p>
            </div>

        )
    }
}
export default Resp