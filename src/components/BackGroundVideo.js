import React, { Component } from 'react'
import videoURL from '../videos/intro.mp4'

import ON from '../images/icons/speaker-1.png'

class BackgroundVideo extends Component {
  handleOnClick (e) {
    console.log('clicked')
  }
  render () {
    return (
      <div>
        <video id='background-video' loop autoPlay muted>
          <source src={videoURL} type='video/mp4' />
            Your browser does not support the video tag.
        </video>
        <div className='content'>
          <button id='myBtn' onClick={this.handleOnClick}><img src={ON} alt='button on' /></button>
        </div>
      </div>
    )
  }
}

export default BackgroundVideo
