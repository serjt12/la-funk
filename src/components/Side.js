import React, { Component } from 'react'
import { bubble as Menu } from 'react-burger-menu'
import '../style/Side.css'

import Face from '../images/face.png'
import Insta from '../images/insta.png'
import Spoty from '../images/spoty.png'
import Twitter from '../images/twi.png'
class Side extends Component {
  render () {
    return (
      <section className='social'>
        <div>
          <Menu right width={'150px'}>
            <a id='home' className='menu-item' href='/'>Home</a>
            <a id='about' className='menu-item' href='/about'>About</a>
            <a id='contact' className='menu-item' href='/contact'>Contact</a>
          </Menu>
        </div>
        <div className='redes'>
          <a href='https://www.facebook.com/lafunkorg/' target='_blank' rel='noopener noreferrer'><img src={Face} alt='Facebook logo' /></a>
          <a href='https://www.instagram.com/lafunkorg/' target='_blank' rel='noopener noreferrer'><img src={Insta} alt='Instagram logo' /></a>
          <a href='https://open.spotify.com/artist/246lMqFAlDyrdqpBodwHSp' target='_blank' rel='noopener noreferrer'><img src={Spoty} alt='Spotify logo' /></a>
          <a href='https://twitter.com/lafunkorg?lang=es' target='_blank' rel='noopener noreferrer'><img src={Twitter} alt='Facebook logo' /> </a>
        </div>
      </section>
    )
  }
}

export default Side
