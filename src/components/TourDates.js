import React, { Component } from 'react'
import Title from '../images/tour-title.png'
import Afro from '../images/afro.png'

import frontDate1 from '../images/02.png'
import frontDate2 from '../images/08.png'
import frontDate3 from '../images/09.png'
import frontDate1m from '../images/02-2.png'
import frontDate2m from '../images/08-2.png'
import frontDate3m from '../images/09-2.png'

/**
 * TourDates
 */
class TourDates extends Component { // eslint-disable-line react/prefer-stateless-function
  render () {
    return (
      <div className='dates-desk' id='dates-desk'>

        <div className='container-tourDates'>
          <div className='left-side'>
            <img className='tour-title-desk' src={Title} alt='Tour Dates' />
            <img className='afro' src={Afro} alt='Tour Afro' />
          </div>
          <div className='right-side-desk'>
            <div>
              <img className='date' alt='date 1' src={frontDate1} />
            </div>
            <div>
              <img className='date' alt='date 3' src={frontDate3} />
            </div>
            <div>
              <img className='date' alt='date 2'src={frontDate2} />
            </div>
          </div>
          <div className='right-side-mob'>
            <div>
              <img className='date' alt='date 1' src={frontDate1m} />
            </div>
            <div>
              <img className='date' alt='date 3' src={frontDate3m} />
            </div>
            <div>
              <img className='date' alt='date 2'src={frontDate2m} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TourDates
