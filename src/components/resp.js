import React from "react"

class Resp extends React.Component{
    constructor () {
        super()
        this.state = {
            desc:null,
        };
    }
    decider() {
        if(this.props.desc == 'rainy'){
            this.setState({
                desc:"Make sure to take your umbrella!! as it is rainy outside"
            })
        }
        else if(this.props.desc == 'light rain'){
            this.setState({
                desc:"A bit of light rain outside but do take your umbrella just to be safe!!"
            })
        }
        else{
            this.setState({
                desc:"Enjoy today's weather with beautiful clear skies !!!"
            })
        }
    }
    render(){
        return (
            <div className="resp1" onMouseEnter = {() => this.decider()}>
                <p>{this.state.desc} </p>
            </div>

        )
    }
}
export default Resp