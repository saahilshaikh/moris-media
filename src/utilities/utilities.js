import { isValidPhoneNumber } from 'react-phone-number-input';

export const trimStringForView = (string='',length)=>{
    return string.substring(0, length) + '...';
}

const acceptOnlyNumbers = new RegExp(`^[0-9]*$`);

export const numberEntryOnly = (string='')=>{
    if(acceptOnlyNumbers.test(string)){
        return true;
    }
    return false
}

export const isValidWebsiteURL = (url='') => {
  if (!url) {
    return false;
  }
  if (
    new RegExp(
      '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$',
      'i',
    ).test(url)
  ) {
    return true;
  }
  return false;
};

export const validateEmail = (email='') => {
  var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email));
};

export const checkValidPhoneNumber = (string='')=>{
    const newString = string.replace('-','');
    return isValidPhoneNumber(newString);
}

