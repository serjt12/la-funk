import React, { Component } from 'react'
import '../style/App.css'
import BackGroundVideo from './BackGroundVideo'
import TourDates from './TourDates'
import Side from './Side'
class App extends Component {
  render () {
    return (
      <div className='main-container'>
        <BackGroundVideo />
        <Side />
        <TourDates />
      </div>
    )
  }
}

export default App
