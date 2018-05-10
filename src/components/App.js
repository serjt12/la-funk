import React, { Component } from 'react'
import '../style/App.css'
import BackGroundVideo from './BackGroundVideo'
import TourDates from './TourDates'
import Hamburger from './Hamburger'
import Redes from './Redes'
class App extends Component {
  render () {
    return (
      <div className='main-container'>
        <BackGroundVideo />
        <Hamburger />
        <TourDates />
        <Redes />
      </div>
    )
  }
}

export default App
