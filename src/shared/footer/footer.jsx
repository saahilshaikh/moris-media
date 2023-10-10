import React from 'react';
import './footer.css';
import Logo from '../../assests/images/logo.png';
import Logo2 from '../../assests/images/logo3.png';
import Flag from '../../assests/images/flag.png';
import LinkedInLogo from '../../assests/images/linkedin_red.svg';
import FacebookLogo from '../../assests/images/facebook_red.svg';
import TwitterLogo from '../../assests/images/twitter_red.svg';
import InstagramLogo from '../../assests/images/instagram_red.svg';
import PinterestLogo from '../../assests/images/pinterest_red.svg';

const social_links=[
    {
        name:'linkedIn',
        logo: LinkedInLogo,
        url:'https://www.linkedin.com'
    },
    {
        name:'facebook',
        logo: FacebookLogo,
        url: 'https://www.facebook.com'
    },
    {
        name:'twitter',
        logo: TwitterLogo,
        url:'https://www.twitter.com'
    },
    {
        name:'instagram',
        logo: InstagramLogo,
        url: 'https://www.instagram.com'
    },
    {
        name:'pinterest',
        logo: PinterestLogo,
        url: 'https://www.pinterest.com'
    }
];

const menus =[
    {
        title:'About',
        url:'',
    },
    {
        title:'User Agreement',
        url:'',
    },
    {
        title:'Privacy Policy',
        url:'',
    },
    {
        title:'Cookie Policy',
        url:'',
    },
    {
        title:'Copyright Policy',
        url:'',
    },
    {
        title:'Brand Policy',
        url:'',
    },
    {
        title:'Community Guidelines',
        url:'',
    },
    {
        title:'Help',
        url:'',
    },
]

const Footer = () => {
  return (
    <div className='footer__container'>
        <div className='footer__top__content'>
             <div className='footer__top__left__content'>
                <img src={Flag} alt='country-flag'/>
                <img src={Logo} className='brand__logo' alt='brand-logo'/>
                <p>© 2022, Moris Media & Its Affiliates.</p>
             </div>
            <div className='footer__top__right__content'>
                {menus.map((menu,index)=>{
                    return (
                        <a href={menu?.link || '#'} className='footer__menu' key={'footer__menu__'+index}>{menu?.title || ''}</a>
                    )
                })}
            </div>
        </div>
        <div className='footer__bottom__content'>
            <div className='footer__bottom__left__content'></div>
            <div className='footer__bottom__middle__content'>
                <p>Powered by</p>
                <img src={Logo2} className='brand__logo' alt='brand-logo'/>
            </div>
            <div className='footer__bottom__right__content'>
                <SocialLinks links={social_links} />
            </div>
        </div>
    </div>
  )
}

const SocialLinks = ({links=[]})=>{
    return (
        <div className='footer__social_links'>
            {
                links.map((link,index)=>{
                    return (
                        <a href={link?.url || '#'} className='footer__social_link' key={`footer__social_link__`+index}>
                            <img src={link.logo} alt={`footer__social_link__`+index} />
                        </a>
                    )
                })
            }
        </div>
    )
}

export default Footer;