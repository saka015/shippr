import React from 'react'
import './Banner.scss'

import bannerImg from '../../../assets/banner--img.jpg'

const Banner = () => {
  return (
    
    <div className='hero-banner'>
    <div className="content">
        <div className="text-content">
        <h1>SALES</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque earum facilis ratione, recusandae voluptas officia vitae. Dolor, beatae provident! Veritatis?</p>

        <div className="ctas">
            <button className='banner-cta'>Read More</button>
            <button className='banner-cta v2'>Shop Now</button>
        </div>
        
        </div>
        <img src={bannerImg} className='bannerImg' alt="" />
    </div>
    </div>
  )
}


export default Banner