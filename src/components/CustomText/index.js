import React from 'react';
import {StyleCustomText} from './style';

const CustomText = ({text, ...props}) => {
  return <StyleCustomText {...props}>{text}</StyleCustomText>;
};

export default CustomText;
