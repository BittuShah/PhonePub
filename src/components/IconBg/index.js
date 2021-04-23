import React from 'react';
import {StyleIconContainer} from './style';
import {Icon} from '../';

const IconBg = ({name, color, backgroundColor, onPress}) => {
  return (
    <StyleIconContainer backgroundColor={backgroundColor} onPress={onPress}>
      <Icon name={name} color={color} height="12" width="12" />
    </StyleIconContainer>
  );
};

export default IconBg;
