import React from 'react';
import './testimonial.css';
import Slide from '../../../../shared/slide/slide';

const testimonials=[
	{
		image:'https://www.morismedia.in/uploads/clients_data/img_64085c5303f12_1678269523.jpeg',
		name:'Arogundade Samsondeen',
		designation:'Founder & CEO, Royalty Traders',
		description:"Partnering with Moris Media for our marketing campaign has been a game-changing experience for Royalty Traders. Their creativity, dedication, and innovative strategies have catapulted our brand to new heights, driving remarkable results and solidifying our presence in the industry."                     
	},
	{
		image:'https://www.morismedia.in/uploads/clients_data/img_632cb0c6c954c_1663873222.jpeg',
		name:'Asma Aldahalwi',
		designation:'Chief Executive Officer, MATHNASIUM',
		description:"Being a part of the world of education and mathematics, we needed a partner who could not only get the essence of what we do but also understand how we want to promote it. We are thankful to Moris Media for their unparalleled hard work and unmatchable services that helped us meet our goals"                     
	},
	{
		image:'https://www.morismedia.in/uploads/clients_data/img_631f29e91093f_1662986729.jpg',
		name:'Farid Mammadov',
		designation:'Managing Director, CEO',
		description:"We are able to tap untouched potential with Moris Media. We had a lesser idea of what we were missing out on until we collaborated with them. The results exceeded our expectations in every way. Not only did we receive a steady stream of qualified leads, but they matured into loyal customers far sooner than we anticipated."  
	},
	{
		image:'https://www.morismedia.in/uploads/clients_data/img_6308b775dbae2_1661515637.jpg',
		name:'Harshit Aggarwal',
		designation:'Founder, Orama Solutions',
		description:"We have been working with Moris for more than 5 months now and we are glad to have taken their services. The whole team is constantly working to look after our digital presence and give us the best outcomes. It’s their tireless efforts to coordinate with us for our feedback at every step that gives us assurance that we have chosen the right company."                     
	}
]

const Testimonial = () => {
  return (
    <div className='testimonial__container'>
			<div className="testimonial__left__content">
				<div>
					<p>FREE CONSULTATION</p>
					<h1>Read What <span className='dem'>Our&nbsp;Clients</span><br/>Say About <span className='biz'>Us!</span></h1>
				</div>
				<p>The feedback from our clients drives us to do more, be more, and achieve more. Our clients, their positive feedback, and our desire for collaborative success enable us to perform even better.</p>
			</div>
			<div className="testimonial__right__content">
				<Slide slides={testimonials}/>
			</div>
    </div>
  )
}

export default Testimonial;