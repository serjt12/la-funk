import React, { Component } from 'react'
import Logo from '../images/logo.png'
import '../style/Home.css'

/**
 * Home
 */
export class Home extends Component { // eslint-disable-line react/prefer-stateless-function
  render () {
    return (
      <div className='home-container'>
        <div>
          <h1><img className='home-logo' src={Logo} alt='La Funk Organisation Logo'/></h1>
        </div>
      </div>
    )
  }
}

export default Home
