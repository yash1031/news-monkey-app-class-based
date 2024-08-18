import React, { Component } from 'react'

export default class NewsItem extends Component {
  render () {
    return (
      <>
         <div className='card mb-3' style={{ maxwidth: '540px' }}>
          <div className='row g-0'>
            <div className='col-md-4'>
              <img
                src={this.props.image}
                className='img-fluid rounded-start'
                alt='...'
              />              
            </div>
            <div className='col-md-8'>
              <div className='card-body'>
                <h5 className='card-title'>{this.props.title}</h5>
                <p className='card-text'>{this.props.desc}</p>
                <p className='card-text'>
                  <small className='text-body-secondary'>
                    By{' '} 
                    {this.props.author == null ? 'Unknown' : this.props.author}{' '}
                    on {this.props.publishedTime}
                  </small>
                </p>
              {console.log("Second",this.props.title)}
                <a
                  href={this.props.newsUrl}
                  className='card-text btn btn-primary'
                  target='_blank'
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>  
      </>
    )
  }
}
