import React, {useState} from 'react';
import './customDropdown.css';
import ErrorImage from '../../assests/images/error.svg';
import ArrowDown from '../../assests/images/arrow-down.svg';

const CustomDropdown = ({label='',value="",handleChange,errorMessage='',options=[]}) => {
  const [open,toggleOpen] = useState(false);
  const onFocus =()=>{
    toggleOpen(true);
	}

	const onBlur =(e)=>{
    toggleOpen(false);
    handleChange(e);
	}

  return (
    <div className='custom__dropdown__container'>
        <div className={'dropdown__selected__container'+(open? ' up':'')} onClick={()=>toggleOpen(prev=>!prev)}>
            <p>{value}</p>
            <img src={ArrowDown} alt='menu-arrow' className={'dropdown__selected__arrow'}/>
        </div>
        <label className={value? 'active':''} onClick={()=>!value && onFocus()}>{label}</label>
        {errorMessage?
          <div className='custom__input__error__container'>
            <img src={ErrorImage} alt='error' />
            <p>{errorMessage}</p>
          </div>
          :
          null
        }
        <div className={'custom__dropdown__options'+(open? ' active':'')}>
          <div className='custom__dropdown__options__divider'/>
          {
            options.map((option,index)=>{
              return  <div onClick={()=>onBlur(option)} className='custom__dropdown__option' key={'custom__dropdown__option__'+index}>
                        <p>{option}</p>
                      </div>
          })}
        </div>
    </div>
  )
};

export default CustomDropdown;