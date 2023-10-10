import React from 'react';
import './digital.css';
import DD from '../../../../assests/images/dd.svg';
import Vector from '../../../../assests/images/vector1.svg';

const steps=[
    'Share your digital challenges; let’s decode them for you.',
    'Our experts will conduct an in-depth analysis ensuring a precise diagnosis.',
    'Our experts will conduct an in-depth analysis ensuring a precise diagnosis.'
]

const Digital = () => {
  return (
    <div className='digital__container'>
        <div className='donut' />
        <img src={Vector} className='vector__icon' alt='vector-icon' />
        <h1>3 Simple <span>Steps</span></h1>
        <div className='header'>
            <h1>FREE</h1>
            <div className='header__image__container'>
                <img src={DD} alt='digtial-doctors-icon' />
                <p>CONSULTATION</p>
            </div>
        </div>
        <div className='digital__steps__container'>
            {steps.map((step, i) =>{
                return (
                    <div className='digital__step' key={'digital__step__'+i}>
                        <h1>{i+1}</h1>
                        <p>{step}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Digital;