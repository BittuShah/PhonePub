import React from 'react';
import theme from '../../theme';
import {CustomText} from '../commonComponents';
import {StyleButton} from './style';

export const Button = ({title, onPress}) => {
  return (
    <StyleButton onPress={onPress}>
      <CustomText color={theme.colors.WHITE}>{title}</CustomText>
    </StyleButton>
  );
};
