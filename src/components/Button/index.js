import React from 'react';
import theme from '../../theme';
import {CustomText} from '../';
import {StyleButton} from './style';

export const Button = ({title, onPress, fontFamily}) => {
  return (
    <StyleButton onPress={onPress}>
      <CustomText
        color={theme.colors.WHITE}
        fontFamily={fontFamily}
        text={title}
      />
    </StyleButton>
  );
};
