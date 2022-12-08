import React from "react";

class News extends React.Component{
    constructor (){
        super()
        this.state =  {
            headlines:null,
            news:null,
            url:null,
            i:0
        }
    }
    getnews(){
        fetch('https://newsapi.org/v2/everything?q=tesla&from=2022-11-08&sortBy=publishedAt&apiKey=4b411d14e13a431bb655435986a32cc5')
            .then(response => response.json())
            .then(data =>{
                console.log(data);

                this.setState({
                    headlines:data.articles[0].title,
                    news:data.articles[0].description,
                    url:data.articles[0].url
                })
            })
    }
    getmore(){
        fetch('https://newsapi.org/v2/everything?q=tesla&from=2022-11-08&sortBy=publishedAt&apiKey=4b411d14e13a431bb655435986a32cc5')
            .then(response => response.json())
            .then(data =>{
                const temp = this.state.i;
                this.setState({
                    i:temp+1
                })
                this.setState({
                    headlines:data.articles[this.state.i].title,
                    news:data.articles[this.state.i].description,
                    url:data.articles[this.state.i].url
                })
            })
    }
    render(){
        return(
            <div className="newsmain">
                <button onClick={() => this.getnews()}>Get Latest News</button>
                <div className="news1">
                    <p className="headline"><b>{this.state.headlines}</b></p>
                    <p className="newss">{this.state.news}</p>
                    <a href = {this.state.url}>Read More</a>
                </div>
                <button onClick = {() => this.getmore()} className="more">More News</button>
            </div>
        )
    }
}

export default News