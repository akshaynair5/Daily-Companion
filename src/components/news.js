import React from "react";

class News extends React.Component{
    constructor (){
        super()
        this.state =  {
            headlines:null,
            news:null,
            url:null,
            imgurl:null,
            i:1,
            ignore:false
        }
    }
    componentDidMount(){

        if(!(this.state.ignore)){
            fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4b411d14e13a431bb655435986a32cc5')
            .then(response => response.json())
            .then(data =>{
                this.setState({
                    headlines:data.articles[0].title,
                    news:data.articles[0].description,
                    url:data.articles[0].url,
                    imgurl:data.articles[0].urlToImage
                })
            })
            this.setState({
                ignore:true
            })
        }
    }
    getmore(){
        fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4b411d14e13a431bb655435986a32cc5')
            .then(response => response.json())
            .then(data =>{
                const temp = this.state.i;
                this.setState({
                    i:temp+1
                })
                this.setState({
                    headlines:data.articles[this.state.i].title,
                    news:data.articles[this.state.i].description,
                    url:data.articles[this.state.i].url,
                    imgurl:data.articles[this.state.i].urlToImage
                })
            })
    }
    render(){
        return(
            <div className="newsmain" style={{backgroundImage:`url(${this.state.imgurl})`}} >
                {/* <button onClick={() => this.getnews()} >Get Latest News</button> */}
                <div className="newsdiv" style={{backgroundColor:'rgba(0, 0, 0, 0.564)',padding:'8%',backgroundSize:'contain',borderRadius:'25px'}}>
                    <p className="headline" style={{fontSize:'38px',fontWeight:'700'}}><b>{this.state.headlines}</b></p>
                    <p className="newss" style={{fontSize:'20px',fontWeight:'700'}}>{this.state.news}</p>
                    <a href = {this.state.url} style={{color:'white'}}>Read More</a>
                </div>
                <button onClick = {() => this.getmore()} className="more">More News - </button>
            </div>
        )
    }
}

export default News