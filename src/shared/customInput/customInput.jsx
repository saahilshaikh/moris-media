import React, {useState,forwardRef} from 'react';
import './customInput.css';
import ErrorImage from '../../assests/images/error.svg';

const CustomInput = forwardRef(({label='',value="",type='text',errorMessage='',handleChange},ref) => {
	const [focused, setFocused] = useState(false);
  const onFocus =()=>{
		setFocused(true);
    if(ref?.current){
      ref.current.focus();
    }
	}

	const onBlur =()=>{
    if(ref?.current?.value.length && focused){
      setFocused(true);
    }else{
      setFocused(false);
    }
	}

  return (
    <div className='custom__input__container'>
        <input
          className={errorMessage?'error__input':''}
          type={type}
          value={value}
          onChange={(e)=>handleChange(e.target.value)}
          ref={ref}
          onFocus={onFocus}
          onBlur={onBlur}
        /> 
        <label onClick={()=>onFocus()} className={focused? 'active':''}>{label}</label>
        {errorMessage?
          <div className='custom__input__error__container'>
            <img src={ErrorImage} alt='error' />
            <p>{errorMessage}</p>
          </div>
          :
          null
        }
    </div>
  )
})

export default CustomInput;