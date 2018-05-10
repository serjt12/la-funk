import React, { Component } from 'react'
import videoURL from '../videos/intro.mp4'

import ON from '../images/icons/speaker1.png'
import OFF from '../images/icons/speaker2.png'
import Flecha from '../images/flecha.png'

class BackgroundVideo extends Component {
  state={ mute: true }
  handleOnClick = (e) => {
    console.log(this.state.mute)
    this.setState({ mute: !this.state.mute })
  }
  render () {
    const { state: { mute } } = this
    const volume = mute ? <img onClick={this.handleOnClick} src={ON} alt='button on' /> : <img onClick={this.handleOnClick} src={OFF} alt='button off' />
    return (
      <div className='bg-container'>
        <video id='background-video' loop autoPlay muted>
          <source src={videoURL} type='video/mp4' />
            Your browser does not support the video tag.
        </video>
        <div className='content'>
          {volume}
        </div>
        <div className='flecha-cont'>
          <a href='#dates-desk'>
            <img src={Flecha} className='flecha' alt='Go Down' />
          </a>
        </div>
      </div>
    )
  }
}

export default BackgroundVideo
