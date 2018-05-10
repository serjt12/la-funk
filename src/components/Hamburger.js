import React, { Component } from 'react'
import { bubble as Menu } from 'react-burger-menu'
import '../style/Side.css'

class Hamburger extends Component {
  render () {
    return (
      <div>
        <Menu right width={250}>
          <a id='home' className='menu-item' href='/'>HOME</a>
          <a id='about' className='menu-item' href='/about'>LA BANDA</a>
          <a id='merch' className='menu-item' href='/merch'>MERCH</a>
          <a id='contact' className='menu-item' href='/contact'>CONTACTO</a>
          <a id='tour-dates' className='menu-item' href='/tour-dates'>TOUR DATES</a>
        </Menu>
      </div>
    )
  }
}

export default Hamburger
