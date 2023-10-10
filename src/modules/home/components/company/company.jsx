import React from 'react';
import './company.css';
import Company1 from '../../../../assests/images/company1.png';
import Company2 from '../../../../assests/images/company2.png';
import Company3 from '../../../../assests/images/company3.png';
import Company4 from '../../../../assests/images/company4.png';
import Company5 from '../../../../assests/images/company5.png';
import Vector from '../../../../assests/images/vector1.svg';

const companies = [Company1,Company2,Company3,Company4,Company5];

const Company = () => {
  return (
    <div className='company__container'>
			<div className='donut' />
			<img src={Vector} className='vector__icon' alt='vector' />
			<h1>Our Customised Strategies<br/><span>are Trusted and admired world-wide.</span></h1>
      <div className='companies'>
        {companies.map((company,index) =>{
          return <img src={company} className='company__logo' alt='company-logo' key={'company__logo__'+index} />
        })}
      </div>
    </div>
  )
}

export default Company;