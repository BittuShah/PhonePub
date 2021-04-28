import React from 'react';
import theme from '../../theme';
import {CustomText} from '../';
import {StyleButton} from './style';

export const Button = ({title, onPress, fontFamily, containerStyle}) => {
  return (
    <StyleButton onPress={onPress} style={containerStyle}>
      <CustomText
        color={theme.colors.WHITE}
        fontFamily={fontFamily}
        text={title}
      />
    </StyleButton>
  );
};
