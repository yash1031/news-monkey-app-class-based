import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
  // static propTypes = {
  //   props: PropTypes
  // }

  render () {
    return (
      <div>
        <nav className='navbar navbar-expand-lg bg-body-tertiary'>
          <div className='container-fluid'>
            <Link className='navbar-brand' to='/Home'>
              NewsMonkey
            </Link>
            <div
              className='collapse navbar-collapse'
              id='navbarSupportedContent'
            >
              <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                <li className='nav-item'><Link className='nav-link active' aria-current='page' to='/Home'> Home</Link></li>
                <li className="nav-item"><Link className="nav-link active" to='/Business'>Business</Link></li>
                <li className="nav-item"><Link className="nav-link active" to='/Entertainment'>Entertainment</Link></li>
                <li className="nav-item"><Link className="nav-link active" to='/Health'>Health</Link></li>
                <li className="nav-item"><Link className="nav-link active" to='/Science'>Science</Link></li>
                <li className="nav-item"><Link className="nav-link active" to='/Sports'>Sports</Link></li>
                <li className="nav-item"><Link className="nav-link active" to='/Technology'>Technology</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
