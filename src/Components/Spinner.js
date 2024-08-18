import React, { Component } from 'react'
import Loader2 from './Loader2.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={Loader2} alt="" />
      </div>
    )
  }
}
