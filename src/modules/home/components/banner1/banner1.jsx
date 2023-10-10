import React from 'react';
import './banner1.css';
import DD from '../../../../assests/images/dd.svg';
import Doctor from '../../../../assests/images/docter.png';
import RightImage from '../../../../assests/images/hero2.png';

const Banner1 = () => {
  return (
    <div className='banner__section__1__container'>
        <div className='banner__section__1__left__content'>
            <img src={Doctor} alt='left-banner' className='banner__section__1__left__content__image' />
             <div className='header'>
                <h1>ELEVATE YOUR BRAND WITH OUR</h1>
                <div className='header__image__container'>
                    <img src={DD} alt='digtial-doctors-icon' />
                    <a href="/">BOOK YOUR CALL TO WELLNESS</a>
                </div>
            </div>
        </div>
        <div className='banner__section__1__right__content'>
            <img src={RightImage} alt='right-banner'/>
        </div>
    </div>
  )
}

export default Banner1;