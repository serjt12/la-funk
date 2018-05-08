import React, { Component } from 'react'
import videoURL from '../videos/intro.mp4'

class BackgroundVideo extends Component {
  render () {
    return (
      <video id='background-video' loop autoPlay muted>
        <source src={videoURL} type='video/mp4' />
        <source src={videoURL} type='video/ogg' />
        Your browser does not support the video tag.
      </video>
    )
  }
}

export default BackgroundVideo
