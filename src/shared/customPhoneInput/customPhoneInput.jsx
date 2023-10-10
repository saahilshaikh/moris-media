import React,{useRef, useState} from 'react';
import './customPhoneInput.css';
import CustomDropdown from '../customDropdown/customDropdown';
import { phoneCodes } from './phoneCodes';
import CustomInput from '../customInput/customInput';
import { numberEntryOnly } from '../../utilities/utilities';

const CustomPhoneInput=({value='',handleChange,defaultCountry='+91',errorMessage=''})=> {
	const p=value.split('-');
	const [country,setCountry] = useState(p[0]?p[0]:defaultCountry);
	const [phone,setPhone] = useState(p[1]?p[1]:'');
	const phoneRef= useRef(null);

	const onChange=(e)=>{
		console.log(e);
		if(numberEntryOnly(e) && e.length<11){
			setPhone(e);
			handleChange(country+'-'+e);
		}
	}

	const handleChangeDropdown=(e)=>{
		setCountry(e);
		if(phone.length){
			handleChange(e+'-'+phone);
		}
	}
	
  return (
    <div className='custom__phone__input__container'>
			<div className='custom__phone__input__dropdown'>
				<CustomDropdown value={country} handleChange={handleChangeDropdown} options={phoneCodes.map((item)=>item.dial_code)} />
			</div>
			<div className='custom__phone__input'>
				<CustomInput value={phone} handleChange={onChange} ref={phoneRef} errorMessage={errorMessage} />
			</div>
    </div>
  )
}

export default CustomPhoneInput