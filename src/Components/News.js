import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import InfiniteScroll from 'react-infinite-scroll-component'

export default class News extends Component {
  // static PropTypes = {
  //   prop: PropTypes
  // }

  constructor () {
    super()
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      articlesCount: 0,
      apiKey1: 'e6b34158852a4cb0abbf98178dc927ca',
      apiKey2: '77e91ffeaa7c498595d513736ed0498a'
    }
  }

  static defaultProps = {
    country: 'in',
    pageSize: 10,
    category: 'general'
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  makeRequest = async (url) => {
    this.props.setProgress(0);
    this.setState({ loading: true })
    let data = await fetch(url);
    this.props.setProgress(50);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      loading: false,
      articlesCount: parsedData.totalResults
    })
    this.props.setProgress(100);
  }

  async componentDidMount () {
    this.props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&pageSize=${this.props.pageSize}&page=${this.state.page}&apiKey=${this.state.apiKey2}`
    this.setState({ loading: true })
    let data = await fetch(url);
    this.props.setProgress(50);
    let parsedData = await data.json()
    this.setState({
      articles: parsedData.articles,
      loading: false,
      articlesCount: parsedData.totalResults
    })
    // this.forceUpdate();
    this.props.setProgress(100);
  }

  /* handlePrevious = () => {
    this.setState({
      page: this.state.page - 1
    })
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&pageSize=${this.props.pageSize}&page=${this.state.page}&apiKey=${this.state.apiKey2}`
    this.makeRequest(url)
  }

  handleNext = () => {
    this.setState({
      page: this.state.page + 1
    })
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&pageSize=${this.props.pageSize}&page=${this.state.page}&apiKey=${this.state.apiKey2}`
    this.makeRequest(url)
  }*/

  fetchMoreData = async () => {
    // this.setState({
    //   page: this.state.page + 1
    // })
    this.state.page++;
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&pageSize=${this.props.pageSize}&page=${this.state.page}&apiKey=${this.state.apiKey2}`
    let data = await fetch(url)
    let parsedData = await data.json()
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      articlesCount: parsedData.totalResults
    })
  }

  render () {
    // console.log("Rending......", this.props.category, this.state.articles);
    return (
      <>
        {/* <div className='container my-3'> */}
        <h2 className='text-center'>NewsMonkey - Top Headlines</h2>
         {this.state.loading && <Spinner/>}

        {/* for fixed size pages  */}
        {/* <div className="row">
        {!this.state.loading &&
          this.state.articles.map((element) => {
            // console.log(element.author,element.publishedAt)
            return <div key={element.url}> 
              <NewsItem title={element.title} desc={element.description} image= {element.urlToImage} newsUrl={element.url} author={element.author} source={element.source.name} publishedTime={element.publishedAt}/>
            </div>
          })
        }
        </div> */}
        {/* <div className="container my-15 d-flex justify-content-between">
          <button className="btn btn-primary" disabled={this.state.page==1} onClick={this.handlePrevious}> &larr; Previous</button>
          <button className="btn btn-primary" disabled={Math.ceil(this.state.articlesCount/this.props.pageSize)=== this.state.page} onClick={this.handleNext}>Next &rarr;</button>
        </div>  */}
         {/*Put the scroll bar always on the bottom*/}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articlesCount !== this.state.articles.length}
          loader={<Spinner/>}
        >
          <div className='container my-3'>
            <div className='row'>
              {this.state.articles.map(element => {
                // console.log(element)
                // console.log(element.author,element.publishedAt)
                return (
                  <div key={element.url}>
                    <NewsItem
                      title={element.title}
                      desc={element.description}
                      image={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      source={element.source.name}
                      publishedTime={element.publishedAt}
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    )
  }
}
