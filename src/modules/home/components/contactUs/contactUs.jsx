import React,{useRef,useState,useEffect} from 'react';
import './contactUs.css';
import HeroImage from '../../../../assests/images/contactus.png';
import SemiCircle from '../../../../assests/images/semiCircle.svg';
import Vector from '../../../../assests/images/vector1.svg';
import Logo from '../../../../assests/images/logo2.png';
import Arrow from '../../../../assests/images/arrow_vector.svg';
import CustomInput from '../../../../shared/customInput/customInput';
import CustomDropdown from '../../../../shared/customDropdown/customDropdown';
import CustomTextArea from '../../../../shared/customTextArea/customTextArea';
import CustomPhoneInput from '../../../../shared/customPhoneInput/customPhoneInput';
import { checkValidPhoneNumber, isValidWebsiteURL, validateEmail } from '../../../../utilities/utilities';
import Modal from 'react-modal';
import ThanksImage from '../../../../assests/images/thanks.png';
import Donut from '../../../../assests/images/bg8.svg';
import Vector2 from '../../../../assests/images/vector4.svg';
import { AiOutlineClose } from "react-icons/ai";

const sizeOptions =['1-50','50-200','200-500','500+'];
const budgetOptions =['$1000-$2000','$2000-$5000','$5000-$10000','$10000+'];
const whereOptions =['Social Media','Banner','Newspaper','Online Article'];

const ContactUs = () => {
	const [values,setValues]=useState({});
	const [errors,setErrors]=useState([]);
	const [modalIsOpen, setIsOpen] = useState(false);
  const nameRef = useRef();
  const degRef = useRef();
  const webRef = useRef();
  const enqRef = useRef();
  const emailRef = useRef();

	useEffect(() => {
     if(modalIsOpen){
			document.body.style.overflow = 'hidden'
		 }else{
			document.body.style.overflow = 'unset'
		 }
  }, [modalIsOpen]);

	const openModal=()=> {
    setIsOpen(true);
  }

  const closeModal=()=> {
    setIsOpen(false);
  }

	const handleChange =(value,name)=>{
		setValues(prev=>{
			return {...prev,[name]:value}
		});
	}

	const handleValidation=()=>{
		let err=[...errors];
		if(!values?.name){
			if(!err.includes('name')){
				err.push('name')
			}
		}else{
			err = err.filter(item=>item!=='name');
		}
		if(!values?.designation){
			if(!err.includes('designation')){
				err.push('designation')
			}
		}else{
			err = err.filter(item=>item!=='designation');
		}
		if(!values?.company){
			if(!err.includes('company')){
				err.push('company')
			}
		}else{
			err = err.filter(item=>item!=='company');
		}
		if(!isValidWebsiteURL(values?.website || '')){
			if(!err.includes('website')){
				err.push('website')
			}
		}else{
			err = err.filter(item=>item!=='website');
		}
		if(!values?.size){
			if(!err.includes('size')){
				err.push('size')
			}
		}else{
			err = err.filter(item=>item!=='size');
		}
		if(!values?.about){
			if(!err.includes('about')){
				err.push('about')
			}
		}else{
			err = err.filter(item=>item!=='about');
		}
		if(!validateEmail(values?.email || '')){
			if(!err.includes('email')){
				err.push('email')
			}
		}else{
			err = err.filter(item=>item!=='email');
		}
		if(!checkValidPhoneNumber(values?.phone || '')){
			if(!err.includes('phone')){
				err.push('phone')
			}
		}else{
			err = err.filter(item=>item!=='phone');
		}
		if(!values?.budget){
			if(!err.includes('budget')){
				err.push('budget')
			}
		}else{
			err = err.filter(item=>item!=='budget');
		}
		if(!values?.where){
			if(!err.includes('where')){
				err.push('where')
			}
		}else{
			err = err.filter(item=>item!=='where');
		}
		if(!values?.description || values.description.length<10){
			if(!err.includes('description')){
				err.push('description')
			}
		}else{
			err = err.filter(item=>item!=='description');
		}
		setErrors(err);
		return err.length? false : true;
	}

	const handleSubmit =(e)=>{
		e.preventDefault();
		const check = handleValidation();
		if(check){
			openModal();
			setValues({});
		}
	}

  return (
    <div className='contact__us__container'>
        <div className='contact__us__left__content'>
            <img src={HeroImage} alt='hero-banner'/>
        </div>
        <div className='contact__us__right__content'>
            <form onSubmit={handleSubmit}>
                <div className='design'>
                    <img src={SemiCircle} alt='semi-circle' className='semi__circle'/>
                    <img src={Vector} alt='semi-circle' className='vector__icon'/>
                    <img src={Vector} alt='semi-circle' className='vector__icon'/>
                </div>
								<div className='contact__us__form__content__header'>
										<p>Tell Us About Your Requirements</p>
										<p>We’ve Got Everything You Need!</p>
										<p>POWERED BY</p>
										<img src={Logo} alt='logo' />
								</div>
								<div className='contact__us__form__content__body'>
										<div className='contact__us__form__content__input'>
											<CustomInput
												label='Your Full Name'
												ref={nameRef}
												value={values.name}
												handleChange={(e)=>handleChange(e,'name')}
												errorMessage={errors.includes('name')?'Enter a valid name!':''}
											/>
										</div>
										<div className='contact__us__form__content__input'>
											<CustomInput
												label='Designation'
												ref={degRef}
												value={values.designation}
												handleChange={(e)=>handleChange(e,'designation')}
												errorMessage={errors.includes('designation')?'Enter a valid designation!':''}
											/>
										</div>
										<div className='contact__us__form__content__input'>
											<CustomInput
												label='Brand / Company Name'
												value={values.company}
												handleChange={(e)=>handleChange(e,'company')}
												errorMessage={errors.includes('company')?'Enter a valid details!':''}
											/>
										</div>
										<div className='contact__us__form__content__input'>
											<CustomInput
												label='Website URL'
												ref={webRef}
												value={values.website}
												handleChange={(e)=>handleChange(e,'website')}
												errorMessage={errors.includes('website')?'Enter a valid website url!':''}
											/>
										</div>
										<div className='contact__us__form__content__input'>
											<CustomDropdown
												label='Company Size'
												options={sizeOptions}
												value={values.size}
												handleChange={(e)=>handleChange(e,'size')}
												errorMessage={errors.includes('size')?'Please choose a company size!':''}
											/>
										</div>
										<div className='contact__us__form__content__input'>
											<CustomInput
												label='Enquiry for?'
												ref={enqRef}
												value={values.about}
												handleChange={(e)=>handleChange(e,'about')}
												errorMessage={errors.includes('about')?'Enter a valid detail!':''}
											/>
										</div>
										<div className='contact__us__form__content__input'>
											<CustomInput
												label='Email Address'
												ref={emailRef}
												value={values.email}
												handleChange={(e)=>handleChange(e,'email')}
												errorMessage={errors.includes('email')?'Enter a valid email address!':''}
											/>
										</div>
										<div className='contact__us__form__content__input'>
											<CustomPhoneInput
												value={values?.phone || ''}
												handleChange={(e)=>handleChange(e,'phone')}
												errorMessage={errors.includes('phone')?'Enter a valid phone number!':''}
											/>
										</div>
										<div className='contact__us__form__content__input'>
											<CustomDropdown
												label='Select Budget'
												options={budgetOptions}
												value={values.budget}
												handleChange={(e)=>handleChange(e,'budget')}
												errorMessage={errors.includes('budget')?'Please choose a budget!':''}
											/>
										</div>
										<div className='contact__us__form__content__input'>
											<CustomDropdown
												label='Where did you hear about us?'
												options={whereOptions}
												value={values.where}
												handleChange={(e)=>handleChange(e,'where')}
												errorMessage={errors.includes('where')?'Please choose a option!':''}
											/>
										</div>
										<div className='contact__us__form__content__text__area'>
											<CustomTextArea
												value={values?.description || ''}
												handleChange={(e)=>handleChange(e,'description')}
												errorMessage={errors.includes('description')?'Please enter atleast 10 characters!':''}
												placeholder='Please specify your requirements so that we will be able to understand what you require and what is the short-term and long-term goal you are hoping to achieve with this service.'
											/>
										</div>
								</div>
								<div className='contact__us__form__content__footer'>
									<p>By clicking the button below, you consent for Moris Digital and its partners to use automated technology, including pre-recorded messages, cell phones, texts, and emails to contact you at the number and email address provided. This includes if the number is currently on any Do Not Call Lists. This consent is not required to make a purchase <span>Privacy Policy</span>.</p>
									<button type='submit'>
										<p>SUBMIT</p>
										<img src={Arrow} alt='arrow-icon' />
									</button>
								</div>
            </form>
        </div>
				<Modal
					isOpen={modalIsOpen}
					onRequestClose={closeModal}
					contentLabel="Form Success Modal"
					className="contact__us__modal"
					overlayClassName="contact__us__modal__overlay"
				>
					<div className='contact__us__modal__body'>
						<img src={Donut} className='contact__us__modal__donut' alt='vector'/>
						<img src={Vector2} className='contact__us__modal__vector__1' alt='vector'/>
						<img src={Vector2} className='contact__us__modal__vector__2' alt='vector'/>
						<div className='contact__us__modal__body__container'><AiOutlineClose onClick={closeModal} size={24} color='#fff'/></div>
						<img src={ThanksImage} className='contact__us__modal__thanks' alt='thanks'/>
						<h1><span className='dem'>THANK YOU</span></h1>
						<p>Thank you for submitting your enquiry. We have received it successfully. Your <span>Enquiry ID : #12345.</span> A Digital doctor will connect with you within 24 hours. We appreciate your enquiry.</p>
					</div>
				</Modal>
    </div>
  )
}

export default ContactUs