import React from "react";

class News extends React.Component{
    constructor (){
        super()
        this.state =  {
            news:null
        }
    }
    getnews(){
        fetch('https://newsapi.org/v2/everything?q=tesla&from=2022-11-08&sortBy=publishedAt&apiKey=4b411d14e13a431bb655435986a32cc5')
            .then(response => response.json())
            .then(data =>{
                console.log(data);
            })
    }
    render(){
        return(
            <div className="newsmain">
                <button onClick={() => this.getnews()}>Get Latest News</button>
                <p className="news1">
                    
                </p>
            </div>
        )
    }
}

export default News