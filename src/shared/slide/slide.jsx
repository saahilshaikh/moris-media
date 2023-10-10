import React from 'react';
import './slide.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { trimStringForView } from '../../utilities/utilities';

const Slide =({slides=[]})=>{
    return <Swiper
							spaceBetween={40}
							loop={true}
							slidesPerView={'auto'}
							className="swiper_container"
						>
							{slides.map((slide,index)=>{
								return 	<SwiperSlide key={'slide__'+index}>
											<div className='slider__card'>
												<img src={slide.image} alt="user"/>
												<h1>{slide?.name || ''}</h1>
												<p>{slide?.designation || ''}</p>
												<p>{trimStringForView(slide?.description || '',250)}</p>
											</div>
										</SwiperSlide>
							})}
						</Swiper>
}

export default Slide;