import React from 'react';
import {ActivityIndicator} from 'react-native';
import {LoadingView} from './style';
import theme from '../../theme';

export const Loader = (props) => {
  return (
    <LoadingView>
      <ActivityIndicator size="large" color={theme.colors.PRIMARY_COLOR} />
    </LoadingView>
  );
};
