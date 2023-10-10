import React,{useState} from 'react';
import './topBar.css';
import moment from 'moment';
import LinkedInLogo from '../../assests/images/linkedin_logo.svg';
import FacebookLogo from '../../assests/images/facebook_logo.svg';
import TwitterLogo from '../../assests/images/twitter_logo.svg';
import InstagramLogo from '../../assests/images/instagram_logo.svg';
import PinterestLogo from '../../assests/images/pinterest_logo.svg';
import CWULogo from '../../assests/images/cwu.svg';
import HelpDeskLogo from '../../assests/images/helpdesk.svg';
import CallLogo from '../../assests/images/call.svg';
import GloboLogo from '../../assests/images/globe.svg';
import ArrowDown from '../../assests/images/arrow-down.svg';
import En from '../../assests/images/en.png';
import Fr from '../../assests/images/fr.png';

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

const countries = [
    {
			name:'United Kingdom',
			logo: En,
			comapanyName:'Moris Media Private Limited',
			phone:'+91-8000-334444',
			email:'hello@morismedia.in',
			website:'https://www.morismedia.in'
    },
    {
			name:'France',
			logo: Fr,
			comapanyName:'Moris Media LLc',
			phone:'+33-1-40-00-00',
			email:'hello@morismedia.fr',
			website:'https://www.morismedia.fr'
    },
		{
			name:'United Kingdom',
			logo: En,
			comapanyName:'Moris Media Private Limited',
			phone:'+91-8000-334444',
			email:'hello@morismedia.in',
			website:'https://www.morismedia.in'
    },
    {
			name:'France',
			logo: Fr,
			comapanyName:'Moris Media LLc',
			phone:'+33-1-40-00-00',
			email:'hello@morismedia.fr',
			website:'https://www.morismedia.fr'
    },
		{
			name:'United Kingdom',
			logo: En,
			comapanyName:'Moris Media Private Limited',
			phone:'+91-8000-3344',
			email:'hello@morismedia.in',
			website:'https://www.morismedia.in'
    },
    {
			name:'France',
			logo: Fr,
			comapanyName:'Moris Media LLc',
			phone:'+33-1-40-00-00',
			email:'hello@morismedia.fr',
			website:'https://www.morismedia.fr'
    }
];

const dropdowns = [
    {
        name:'English',
        logo: En,
    },
    {
        name:'Français',
        logo: Fr
    }
];

const TopBar = () => {
  const [currentLanguage,setCurrentLanguage]= useState({name:'English',logo:En});
	const [showLanguageDropdown,setShowLanguageDropdown]= useState(false);
  const [currentCountry,setCurrentCountry]= useState({name:'UK',logo:En});
	const [showCountryDropdown,setShowCountryDropdown]= useState(false);

	const handleCountryDropdown = ()=>{
		setShowLanguageDropdown(false);
		setShowCountryDropdown(prev=>!prev);
	}

	const handleCountryDropdownOption = (country)=>{
		setCurrentCountry(country);
	}

	const handleLanguageDropdown = ()=>{
		setShowCountryDropdown(false);
		setShowLanguageDropdown(prev=>!prev);
	}

	const handleLanguageDropdownOption = (dropdown)=>{
		setCurrentLanguage(dropdown);
	}

  return (
    <div className='top__bar__container'>
        <div className='top__bar__left__content'>
            <SocialLinks links={social_links}/>
            <div className='top__bar__divider'/>
            <div className='top__bar__time_container'>
                <p>{moment().format('ddd, Do MMM YYYY')}</p>
                <p>{moment().format('h:mm:ss a')}</p>
            </div>
        </div>
        <div className='top__bar__right__content'>
            <a href='#career' className='top__bar__action__btn'>
                <img src={CWULogo} alt="career-with-us-button-icon" />
                <span>Career With Us</span>
            </a>
            <a href='/help' className='top__bar__action__btn'>
                <img src={HelpDeskLogo} alt="help-desk-button-icon" />
            </a>
            <a href={`tel:+91-8000-334444`} className='top__bar__action__btn'>
                <img src={CallLogo} alt="call-button-icon" />
                <span>+91-8000-334444</span>
            </a>
            <DropDownBig activeItem={currentCountry} logo={GloboLogo} list={countries} show={showCountryDropdown} handleDropdown={handleCountryDropdown} handleDropdownOption={handleCountryDropdownOption} />
						<div className='top__bar__divider'/>
            <DropDown title={currentLanguage.name} logo={currentLanguage.logo} list={dropdowns} show={showLanguageDropdown} handleDropdown={handleLanguageDropdown} handleDropdownOption={handleLanguageDropdownOption} />
        </div>
    </div>
  )
}

const SocialLinks = ({links=[]})=>{
    return (
        <div className='top__bar__social_links'>
            {
                links.map((link,index)=>{
                    return (
                        <a href={link?.url || '#'} className='top__bar__social_link' key={`top__bar__social_link__`+index}>
                            <img src={link.logo} alt={`top__bar__social_link__`+index} />
                        </a>
                    )
                })
            }
        </div>
    )
}

const DropDown = ({title="",logo="",list=[],show=false,handleDropdown,handleDropdownOption})=>{
    return (
        <div className='top__bar__dropdown_selector' onClick={handleDropdown}>
            <img src={logo} alt="dropdown-selector-icon" />
            {title?<p>{title}</p>:null}
            <img src={ArrowDown} alt="dropdown-selector-arrow-icon" className='top__bar__dropdown_selector__arrow' />
            <div className={'top__bar__dropdown_selector__option-container'+(show?' active':'')}>
                {list.map((item,index)=>{
                    return (
                        <div className='top__bar__dropdown_selector__option' key={`top__bar__dropdown_selector__option__`+index} onClick={()=>handleDropdownOption(item)}>
                            <img src={item.logo} alt="language-icon" />
                            <p>{item.name}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

const DropDownBig = ({title="",logo="",list=[],show=false,handleDropdown,handleDropdownOption})=>{
    return (
        <div className='top__bar__dropdown_selector' onClick={handleDropdown}>
            <img src={logo} alt="dropdown-selector-icon" className={show?'active__selector':''} />
            {title?<p>{title}</p>:null}
            <img src={ArrowDown} alt="dropdown-selector-arrow-icon" className={'top__bar__dropdown_selector__arrow'+(show?' active__selector':'')} />
            <div className={'top__bar__dropdown_selector__option-container__big'+(show?' active':'')}>
                {list.map((item,index)=>{
                    return (
                        <div className='top__bar__dropdown_selector__option' key={`top__bar__dropdown_selector__option__`+index} onClick={()=>handleDropdownOption(item)}>
                            <img src={item.logo} alt="country-icon" />
                            <div className='top__bar__dropdown_selector__option__content'>
                                <p className='top__bar__dropdown_selector__option__content__country__name'>{item.name}</p>
                                <p className='top__bar__dropdown_selector__option__content__company__name'>{item.comapanyName}</p>
                                <p className='top__bar__dropdown_selector__option__content__contact'>{item.phone}<span className='top__bar__dropdown_selector__option__content__divider'/>{item.email}</p>
                                <p className='top__bar__dropdown_selector__option__content__website'>{item.website}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default TopBar;