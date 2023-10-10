import React from 'react';
import './customTextArea.css';
import ErrorImage from '../../assests/images/error.svg';

const CustomTextArea = ({value='',placeholder='',errorMessage='',handleChange}) => {
  return (
    <div className='custom__text__area'>
        <textarea
            className={errorMessage?'error__input':''}
            value={value}
            onChange={(e)=>handleChange(e.target.value)}
            placeholder={placeholder}
        />
        {errorMessage?
          <div className='custom__text__area__error__container'>
            <img src={ErrorImage} alt='error' />
            <p>{errorMessage}</p>
          </div>
          :
          null
        }
    </div>
  )
}

export default CustomTextArea;