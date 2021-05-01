import React from 'react';
import theme from '../../theme';
import {CustomText} from '../';
import {StyleButton} from './style';

export const Button = ({
  title,
  onPress,
  fontFamily,
  containerStyle,
  backgroundColor,
  color,
}) => {
  return (
    <StyleButton
      onPress={onPress}
      style={containerStyle}
      backgroundColor={backgroundColor}>
      <CustomText color={color} fontFamily={fontFamily} text={title} />
    </StyleButton>
  );
};
