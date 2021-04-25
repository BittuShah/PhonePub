import React from 'react';
import {StyleIconContainer} from './style';
import {Icon} from '../';

const IconBg = ({name, color, backgroundColor, onPress, containerStyle}) => {
  return (
    <StyleIconContainer
      backgroundColor={backgroundColor}
      onPress={onPress}
      style={containerStyle}>
      <Icon name={name} color={color} height="14" width="14" />
    </StyleIconContainer>
  );
};

export default IconBg;
