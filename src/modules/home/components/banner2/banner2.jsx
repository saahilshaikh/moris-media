import React from 'react';
import './banner2.css';
import SearchIcon from '../../../../assests/images/search.svg';
import AccountIcon from '../../../../assests/images/account.svg';
import Vector from '../../../../assests/images/vector1.svg';
import Rocket from '../../../../assests/images/rocket.svg';
import Bg from '../../../../assests/images/bg5.svg';
import Bg2 from '../../../../assests/images/bg6.png';

const Banner2 = () => {
  return (
    <div className='banner__section__2__container'>
        <img src={Bg} className='banner__section__2__bg' alt='background' />
        <img src={Bg2} className='banner__section__2__bg2' alt='background' />
        <img src={Vector} className='banner__section__2__vector1' alt='vector' />
        <img src={Vector} className='banner__section__2__vector2' alt='vector' />
        <h1><span className='dem'>Insight Driven PR</span><br/> with creativity that<br/><span className='biz'>Secures Real Business Results.</span></h1>
        <div className='banner__section__2__btn__grp'>
            <button>
                <p>FIND OUT MORE</p>
                <img src={SearchIcon} alt='icon' />
            </button>
            <button>
                <p>CONTACT SALES</p>
                <img src={AccountIcon} alt='icon' />
            </button>
        </div>
        <img src={Rocket} className='banner__section__2__rocket' alt='rocket' />
    </div>
  )
}

export default Banner2