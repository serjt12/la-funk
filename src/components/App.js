import React, { Component } from 'react'
import './App.css'
import BackGroundVideo from './BackGroundVideo'
import TourDates from './TourDates'
class App extends Component {
  render () {
    return (
      <div className='main-container'>
        <BackGroundVideo />
        <TourDates />
      </div>
    )
  }
}

export default App
