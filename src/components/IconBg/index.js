import React from 'react';
import {StyleIconContainer} from './style';
import {Icon} from '../';

const IconBg = ({
  name,
  color,
  backgroundColor,
  onPress,
  containerStyle,
  height,
  width,
}) => {
  return (
    <StyleIconContainer
      backgroundColor={backgroundColor}
      onPress={onPress}
      style={containerStyle}>
      <Icon
        name={name}
        color={color}
        height={height ? height : '16'}
        width={width ? width : '16'}
      />
    </StyleIconContainer>
  );
};

export default IconBg;
