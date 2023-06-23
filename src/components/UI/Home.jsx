import React from 'react'

import '../../styles/UI/Layout.css'
import HomeBanner from '../../assets/images/home-image.jpg'


function Home() {
  return (
    <div className='home-container'>
      <img src={HomeBanner} alt='Background' />
    </div>
    )
  }
  
  export default Home
  
  {/* <div className="layout-container">
      <div className="bg-image"></div>
      <div className="content">
      </div>
  </div> */}