import moment from 'moment';
import {showMessage} from 'react-native-flash-message';

export const truncate = (str, n) => {
  return str.length > n ? str.substr(0, n - 1) + '...' : str;
};

export const generateGreetings = () => {
  let currentHour = moment().format('HH');
  if (currentHour >= 4 && currentHour < 12) {
    return 'Good Morning';
  } else if (currentHour >= 12 && currentHour < 16) {
    return 'Good Afternoon';
  } else if (currentHour >= 16 || currentHour < 4) {
    return 'Good Evening';
  } else {
    return 'Hello';
  }
};

export const showToast = (message, type = 'danger') => {
  showMessage({
    message: message,
    type: type,
  });
};

export const validateEmail = email => {
  let regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  return regex.test(email);
};

export const validatePhone = phone => {
  let regex = /^[6-9]\d{9}$/;
  return regex.test(phone);
};

export const validatePassword = password => {
  return password.length > 6;
};
