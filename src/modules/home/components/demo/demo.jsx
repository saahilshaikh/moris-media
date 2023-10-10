import React from 'react';
import './demo.css';
import DemoImage from '../../../../assests/images/consult.svg';

const Demo = () => {
  return (
    <div className='demo__container'>
        <div className='demo__left__content'>
            <div>
                <p>FREE CONSULTATION</p>
                <h1>Schedule a <span className='dem'>Demo</span><br/>Understand Your<br/><span className='biz'>Business</span></h1>
            </div>
        </div>
        <div className='demo__right__content'>
            <img src={DemoImage} alt='consult'/>
        </div>
    </div>
  )
}

export default Demo;