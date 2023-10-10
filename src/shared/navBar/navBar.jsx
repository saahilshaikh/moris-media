import React, { useState } from 'react';
import './navBar.css';
import Logo from '../../assests/images/logo-white.svg';
import SearchIcon from '../../assests/images/search.png';
import GPLogo from '../../assests/images/gp.png';
import ArrowDown from '../../assests/images/arrow-down.svg';
import LoginLogo from '../../assests/images/login.svg';
import Banner1 from '../../assests/images/banner1.png';
import Banner2 from '../../assests/images/banner2.png';
import SpeakerIcon from '../../assests/images/megaphone.png';
import DigitalIcon from '../../assests/images/digital.svg';
import SocialIcon from '../../assests/images/social-media.png';
import PerformanceIcon from '../../assests/images/performance.png';
import SEOIcon from '../../assests/images/seo.png';
import HelpIcon from '../../assests/images/help.png';
import morisIcon from '../../assests/images/moris-icon.png';
import DAIcon from '../../assests/images/data-analysis.png';
import BookIcon from '../../assests/images/magic-book.png';
import TravelIcon from '../../assests/images/travel.png';
import StockIcon from '../../assests/images/stock-market.png';
import EntertainIcon from '../../assests/images/projector.png';
import AccountIcon from '../../assests/images/account.png';
import TopBar from '../topBar/topBar';
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineSearch } from "react-icons/hi";

const menus= [
	{
		title:'Solution',
		type:'dropdown',
		optionList:[
			{
				title:'PR Solutions',
				icon: SpeakerIcon
			},
			{
				title:'Digital Solutions',
				icon: DigitalIcon
			},
			{
				title:'Social Media Solutions',
				icon: SocialIcon
			},
			{
				title:'Performance Marketing Solutions',
				icon: PerformanceIcon
			},
			{
				title:'Search Engine Optimization (SEO) Solutions',
				icon: SEOIcon
			},
			{
				title:'Help',
				icon: HelpIcon
			}
		],
		banner: Banner1,
		bigIcons:false
	},
	{
		title:'Who We Serve',
		type:'dropdown',
		optionList:[
			{
				title:'Businesses & Brands',
				subTitle:'Revitalize & Revive Digital Identity',
				icon: DAIcon
			},
			{
				title:'Agencies & Partners',
				subTitle:'Gain Allies For Richer Impact',
				icon: AccountIcon
			},
			{
				title:'Social Interactive',
				subTitle:'Entertainment',
				icon: EntertainIcon
			},
			{
				title:'Individuals & Agencies',
				subTitle:'Collaboration For Greater Presence',
				icon: BookIcon
			},
			{
				title:'Organizations & Executives',
				subTitle:'Target The Profound Growth',
				icon: TravelIcon
			},
			{
				title:'Investment & Mentors',
				subTitle:'Right Investment & Mentorship Alliance',
				icon: StockIcon
			}
		],
		banner: Banner2,
		bigIcons:true
	},
	{
		title:'Who We Are',
		type:'text'
	},
	{
		title:'Self Help',
		type:'text'
	},
	{
		title:'Partner Program',
		type:'text'
	},
	{
		title:'Login',
		image:LoginLogo,
		type:'image-text'
	},
	{
		image: GPLogo,
		type: 'image'
	},
];

const hamMenus= [
	{
		title: 'COMPANY',
		icon: DigitalIcon,
		menus:['company1','company2','company3','company4','company5','company6']
	},
	{
		title: 'COMPANY',
		icon: DigitalIcon,
		menus:['company1','company2','company3','company4','company5','company6']
	},
	{
		title: 'COMPANY',
		icon: DigitalIcon,
		menus:['company1','company2','company3','company4','company5','company6']
	},
	{
		title: 'COMPANY',
		icon: DigitalIcon,
		menus:['company1','company2','company3','company4','company5','company6']
	},
	{
		title: 'COMPANY',
		icon: DigitalIcon,
		menus:['company1','company2','company3','company4','company5','company6']
	},
	{
		title: 'COMPANY',
		icon: DigitalIcon,
		menus:['company1','company2','company3','company4','company5','company6']
	},
	{
		title: 'COMPANY',
		icon: DigitalIcon,
		menus:['company1','company2','company3','company4','company5','company6']
	},
	{
		title: 'COMPANY',
		icon: DigitalIcon,
		menus:['company1','company2','company3','company4','company5','company6']
	}
];

const popWords=['PR Campaign','Press Release','PR Campaign','Press Release','PR Campaign','Press Release'];

const NavBar = () => {
	const [activeToggle,toggleActive] = useState(null);
	const [dropdown,setDropdown] = useState(null);

	const handleDropdown = (index)=>{
		if(activeToggle===index){
			setDropdown(null);
		}else{
			setDropdown(menus[index]);
		}
		toggleActive(prev=>prev!==index?index:null)
	}

	const handleHumburgerClick =()=>{
		toggleActive(prev=>prev!=='hamburger'?'hamburger':null);
		setDropdown(null);
	}

	const handleSearchClick =()=>{
		toggleActive(prev=>prev!=='search'?'search':null);
		setDropdown(null);
	}

  return (
    <div className='nav__bar__container'>
			<TopBar />
			<div className='nav__bar__container__bottom'>
				 <div className='nav__bar__left__content'>
					<img src={Logo} alt="brand-logo" className='nav__bar__logo'/>
				</div>
				<div className='nav__bar__right__content'>
					{menus.map((menu,index)=>{
							if(menu?.type==='dropdown'){
								return (
									<div onClick={()=>handleDropdown(index)} className={'nav__bar__menu'+(activeToggle===index?' up':'')} key={`nav__bar__menu__`+index}>
										<p>{menu?.title || ""}</p>
										<img src={ArrowDown} alt='menu-arrow' className={'nav__bar__menu__arrow'}/>
									</div>
								)
							}else if(menu?.type==='text'){
								return (
									<div className='nav__bar__menu' key={`nav__bar__menu__`+index}>
										<a href={menu?.link || '#'}>{menu?.title || ""}</a>
									</div>
								)
							}else if(menu?.type==='image'){
								return (
									<div className='nav__bar__menu' key={`nav__bar__menu__`+index}>
										<a href={menu?.link || '#'}><img src={menu.image} className='nav__bar__menu__image' alt='menu-icon'/></a>
									</div>
								)
							}else if(menu?.type==='image-text'){
								return (
									<div className='nav__bar__menu login__btn' key={`nav__bar__menu__`+index}>
										<img src={menu.image} alt='menu-icon' className='nav__bar__menu__icon'/>
										<p>{menu?.title || ""}</p>
									</div>
								)
							}else{
								return null
							}
					})}
					<div className='nav__bar__menu'>
						<img src={SearchIcon} alt="search-icon" className={'nav__bar__menu__search'+(activeToggle==='search'?' is-active':'')} onClick={()=>handleSearchClick()}/>
					</div>
					<div className={"nav__bar__hamburger"+(activeToggle==='hamburger'?' is-active':'')} onClick={()=>handleHumburgerClick()}>
						<span className="line"></span>
						<span className="line"></span>
						<span className="line"></span>
					</div>
				</div>
				<Dropdown list={dropdown?.optionList || []} banner={dropdown?.banner || ''} bigIcons={dropdown?.bigIcons || false} />
				{activeToggle==='hamburger'?<HamburgerMenu list={hamMenus} />:null}
				{activeToggle==='search'?<SearchBar list={popWords} handleSearchClick={handleSearchClick}/>:null}
			</div>
    </div>
  )
}

const Dropdown = ({list=[],banner="",bigIcons=false})=>{
	if(list.length ===0 && banner===''){
		return null
	}
	return (
		<div className={'nav__bar__dropdown__option__container'+(bigIcons? ' big__icons':'')}>
			<div className='nav__bar__dropdown__option__left__content'>
				{list.map((option,index)=>{
					return (
						<div className='nav__bar__dropdown__option' key={`nav__bar__dropdown__option__`+index}>
							<img src={option.icon} alt='menu-icon' className='nav__bar__dropdown__option__icon'/>
							<div>
								<p>{option?.title || ""}</p>
								<p>{option?.subTitle || ""}</p>
							</div>
						</div>
					)
				})}
			</div>
			{banner?<div className='nav__bar__dropdown__option__right__content'>
				<img src={banner} alt='menu-banner' className='nav__bar__dropdown__option__banner'/>
			</div>:null}
		</div>
	)
}

const HamburgerMenu = ({list=[]})=>{
	if(list.length ===0){
		return null
	}
	return (
		<div className={'nav__bar__hamburger__options__container'}>
			{list.map((option,index)=>{
				return (
					<div className='nav__bar__hamburger__option__container' key={`nav__bar__hamburger__option__`+index}>
						<div className='nav__bar__hamburger__option'>
							<img src={option.icon} alt='menu-icon' className='nav__bar__hamburger__option__icon'/>
							<p>{option.title}</p>
						</div>
						<div className='nav__bar__hamburger__sub__options'>
							{option.menus.map((menu,index)=>{
								return (
									<div className='nav__bar__hamburger__sub__option' key={`nav__bar__hamburger__sub__option__`+index}>
										<img src={morisIcon} alt='menu-icon' className='nav__bar__hamburger__option__icon'/>
										<p>{menu}</p>
									</div>
								)
							})}
						</div>
					</div>
				)
			})}
		</div>
	)
}

const SearchBar = ({handleSearchClick,list=[]})=>{
	return (
		<div className='search__bar__option__container'>
			<div className='search__bar__option__container__top'>
				<div className='search__bar__option__close__container'><AiOutlineClose onClick={()=>handleSearchClick()} size={30} color='#E1003E'/></div>
				<div className='search__bar'>
					<HiOutlineSearch color='#ccc' size={24} />
					<input />
				</div>
				<div className='popular__container'>
					<h1>Popular Searches</h1>
					<div className='popular__words__container'>
						{list.map((popWord,index)=>{
							return <a href='/' key={index}>{popWord}</a>
						})}
					</div>
				</div>
			</div>
			<div className='search__bar__option__container__footer'>
				{list.map((popWord,index)=>{
					return <a href='/' key={index}>{popWord}</a>
				})}
			</div>
		</div>
	)
}

export default NavBar;