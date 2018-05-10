import React, { Component } from 'react'
import BackGroundVideo from './BackGroundVideo'
import TourDates from './TourDates'

/**
 * TourPage
 */
export class TourPage extends Component { // eslint-disable-line react/prefer-stateless-function
  render () {
    return (
      <div>
        <BackGroundVideo />
        <TourDates />
      </div>
    )
  }
}

export default TourPage
