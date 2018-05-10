import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import '../style/App.css'
import Home from './Home'
import TourDates from './TourDates'
import Hamburger from './Hamburger'
import Redes from './Redes'
class App extends Component {
  render () {
    return (
      <div className='main-container'>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </div>
    )
  }
}

export default App
