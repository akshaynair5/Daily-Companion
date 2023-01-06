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
                console.log(data);

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
            <div className="newsmain"  onMouseEnter = { () => this.getnews()}>
                {/* <button onClick={() => this.getnews()} >Get Latest News</button> */}
                <div className="news1">
                    <img src={this.state.imgurl} className="img"></img>
                    <p className="headline"><b>{this.state.headlines}</b></p>
                    <p className="newss">{this.state.news}</p>
                    <a href = {this.state.url}>Read More</a>
                    <button onClick = {() => this.getmore()} className="more">More News</button>
                </div>
            </div>
        )
    }
}

export default News