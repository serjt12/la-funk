import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import '../style/App.css'
import Home from './Home'
import TourPage from './TourPage'

import Hamburger from './Hamburger'
import Redes from './Redes'
class App extends Component {
  render () {
    return (
      <div className='main-container'>
        <Hamburger />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/tour-dates' component={TourPage} />
        </Switch>
        <Redes />
      </div>
    )
  }
}

export default App
