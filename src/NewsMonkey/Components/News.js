import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export default class News extends Component {

   constructor() {
    super();
    console.log("This Is Costructor Of News Component");
    this.state = {
      articles: [],
      page:1,
      loading: false,

    };
  }
  async componentDidMount(){

    let url=`https://newsapi.org/v2/top-headlines?country=In&apiKey=07907bdffef441af921b13f9033dfd0e&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data= await fetch(url);
    let parsedData=await data.json();
    this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults,loading:false});
}

  previousHandler= async()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=In&apiKey=07907bdffef441af921b13f9033dfd0e&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data= await fetch(url);
    let parsedData=await data.json();
    this.setState({
      page:this.state.page -1,
      articles:parsedData.articles,
      loading:false
      
     })

}
  NextHandler=async()=>{
    if (this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)){
      console.log("you can not move to next")

    }
    else{
      let url=`https://newsapi.org/v2/top-headlines?country=In&apiKey=07907bdffef441af921b13f9033dfd0e&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data= await fetch(url);
      let parsedData=await data.json();
     this.setState({
      page:this.state.page +1,
      articles:parsedData.articles,
      loading:false
      
     })
    }



}




  render() {


    console.log("render method is runs")
    return (
      <div className="container my-3">
        <h3 className="text-center">Top News HeadLines</h3>
        {this.state.loading&&<Spinner/>}

        <div className="row ">
          {this.state.articles.map((elements) => {

            return <div className="col md-3" key={elements.url}>
            <NewsItem
                
              title={elements.title}
              description={elements.description}
              imageUrl={elements.urlToImage}
              url={elements.url}
            />
          </div>
            
          })};

          <div class="d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.previousHandler}>&laquo; Previous</button>
          <button  disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" class="btn btn-dark" onClick={this.NextHandler}>Next &raquo;</button>
          </div>
        </div>
      </div>
    );
  }
}
