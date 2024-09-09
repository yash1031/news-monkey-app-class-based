import React, { Component } from 'react'
import NavBar from './Components/NavBar'
import News from './Components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import LoadingBar from 'react-top-loading-bar'

const categories= [
  'general',
  'business ',
  'entertainment ',
  'health ',
  'science ',
  'sports ',
  'technology'
]

export default class App extends Component {
  constructor(){
    super();
    this.state= {
      progress: 0
    }
  }

  setProgress = (x) =>{
    this.setState({progress: x})
  }

  render () {
    return (
      <Router>
        <NavBar/>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        onLoaderFinished={() => {this.setState({progres:0})}}
      />
      <Routes>
            <Route element={<News setProgress= {this.setProgress }  pageSize={5} category='general' country='us'/>}/>
            <Route key= 'general' path='/Home' element={<News setProgress= {this.setProgress }           key='general' pageSize={10} category='general' country='us'/>}/>
            <Route key= 'business ' path='/Business' element={<News setProgress= {this.setProgress }       key='business ' pageSize={10} category='business' country='us'/>}/>
            <Route key= 'entertainment ' path='/Entertainment' element={<News setProgress= {this.setProgress }  key='entertainment ' pageSize={10} category='entertainment' country='us'/>}/>
            <Route key= 'health ' path='/Health' element={<News setProgress= {this.setProgress }         key='health ' pageSize={10} category='health' country='us'/>}/>
            <Route key= 'science ' path='/Science' element={<News setProgress= {this.setProgress }        key='science ' pageSize={10} category='science' country='us'/>}/>
            <Route key= 'sports ' path='/Sports' element={<News setProgress= {this.setProgress }      key='sports ' pageSize={10} category='sports' country='us'/>}/>
            <Route key= 'technology' path='/Technology' element={<News setProgress= {this.setProgress }     key='technology' pageSize={10} category='technology' country='us'/>}/>
          </Routes>
      </Router>
    )
  }
}
