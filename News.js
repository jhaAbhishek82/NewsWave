import React, { useEffect , useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
const News = (props)=> {
   
  const [articles , setArticles] = useState([])
  const [loading , setLoading] = useState(true)
  const [page , setPage] = useState(1)
  const [totalResults , setTotalResults] = useState(0)
  
 

  // static defaultProps = {
  //   country : 'in',
  //   pageSize:6,
  //   category:'general',
  // }

  // static defaultProps = {
  //   country: PropTypes.string,
  //   pageSize: PropTypes.number,
  //   category: PropTypes.string,
  // };
  
 const capitalizeFirstLetter = (string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
  }


  // constructor(props) {
  //   super(props);
  //   console.log("Hello");
  //   this.state = {
  //     articles: [],
  //     loading: true,
  //     page: 1,
  //     totalResults:0
  //   };
  //   document.title=`${this.capitalizeFirstLetter(props.category)} - NewsWave`
    
  // }

  const  updateNews =  async () => {
    // props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    // this.setState({ loading: true });
    setLoading(true)
    let data = await fetch(url);
   // props.setProgress(30);
    let parsedData = await data.json();
    //props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    // this.setState({
    //   articles: parsedData.articles,

    //   totalResults: parsedData.totalResults,
    //   loading: false,
    // });
    // props.setProgress(100);
  }
  
  useEffect(() =>{
      // document.title=`${this.capitalizeFirstLetter(props.category)} - NewsWave`;
    updateNews();
    // eslint-disable-next-line
  } , [])

  // async componentDidMount() {
    // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3b45e3d88e944206a0f6879a9176bc74&page=1&pageSize=${props.pageSize}`;
    // this.setState({loading: true});
    //  let data = await fetch(url);
    //  let  parsedData = await data.json()
    //  this.setState({articles: parsedData.articles ,

    //    totalResults:parsedData.totalResults,
    //    loading:false
    //   })
    // this.updateNews();
  // }

 const handleNextClick = async () => {
    // if(!(this.state.page+1 > Math.ceil(this.state.totalResults/props.pageSize))){

    // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&&apiKey=3b45e3d88e944206a0f6879a9176bc74&page=${this.state.page + 1}&pageSize=${props.pageSize}`
    // this.setState({loading: true});
    //  let data = await fetch(url);
    //  let  parsedData = await data.json()
    //  this.setState({loading: false});
    //  this.setState({
    //     page:this.state.page + 1,
    //     articles: parsedData.articles,
    //     loading : false
    //  })
    // }
    // this.setState({ page: this.state.page + 1 });
    setPage(page+1)
    updateNews();
  };

  const handleprevClick = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&&apiKey=3b45e3d88e944206a0f6879a9176bc74&page=${this.state.page - 1}&pageSize=${props.pageSize}`
    // this.setState({loading: true});
    // let data = await fetch(url);
    // let  parsedData = await data.json()

    // this.setState({
    //    page:this.state.page - 1,
    //    articles: parsedData.articles,
    //    loading:false
    // })
    // this.setState({ page: this.state.page - 1 });
    setPage(page-1)
    updateNews();
  };

   const fetchMoreData = async () => {
    // this.setState({page:this.state.page + 1})
   
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1)
    // this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.setTotalResults)
    // this.setState({
    //   articles: articles.concat(parsedData.articles),

    //   totalResults: parsedData.totalResults
    //    loading: false,
    // });
   
  };


   
    return (
      <>
        <h1 className="text-center" style={{ margin: "35px ops", marginTop:'90px' }}>
          News Wave - Top   {capitalizeFirstLetter(props.category)} Headlines
        </h1>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
          <div className="container">

          
        <div className="row">
          {
            articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : " "}
                    description={
                      element.description ? element.description : " "
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                  />
                </div>
              );
            })}
        </div>
        </div>
        </InfiniteScroll>

        {/* <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handleprevClick}
          >
            {" "}
            &larr; Prev
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div> */}
      </>
    );
  
}

News.defaultProps = {
  country : 'in',
  pageSize:6,
  category:'general',
}

News .defaultProps = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;

//  business
// entertainment
// general
// health
// science
// sports
// technology.
// 3b45e3d88e944206a0f6879a9176bc74