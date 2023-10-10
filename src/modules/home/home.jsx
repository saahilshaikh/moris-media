import React from 'react';
import './home.css';
import HeroSection from './components/heroSection/heroSection';
import ContactUs from './components/contactUs/contactUs';
import Banner1 from './components/banner1/banner1';
import Digital from './components/digital/digital';
import Company from './components/company/company';
import Demo from './components/demo/demo';
import Banner2 from './components/banner2/banner2';
import Testimonial from './components/testimonial/testimonial';

const Home = () => {
  return (
    <div className='home__page__container'>
			<HeroSection/>
      <ContactUs/>
      <Banner1/>
      <Digital/>
      <Company/>
      <Testimonial/>
      <Demo/>
      <Banner2/>
		</div>
  )
}

export default Home;