import React from 'react';
import './heroSection.css';
import HeroImage from '../../../../assests/images/hero.png'

const HeroSection = () => {
  return (
    <div className='hero__section__container'>
        <div className='hero__section__content__left'>
            <p>Pay One Person Salary,</p>
            <p>Reap the Results of Five!</p>
            <p>Hire Best-in-Class Digital Doctors as Your Team & Skyrocket Your Leads</p>
        </div>
        <div className='hero__section__content__right'>
            <img src={HeroImage} alt='hero-banner'/>
        </div>
    </div>
  )
}

export default HeroSection;