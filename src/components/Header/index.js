import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import {Icon} from '../index';
import {StyleHeader} from './style';
import navigation from '../../lib/navigationService';
import {AppRoute} from '../../navigation/appRoute';
import theme from '../../theme';

export const Header = ({leftIcon, drawer}) => {
  return (
    <SafeAreaView style={{backgroundColor: theme.colors.skyBlue}}>
      <StatusBar backgroundColor={theme.colors.skyBlue} />
      <StyleHeader>
        {leftIcon && leftIcon === 'menu' && (
          <Icon
            name="user"
            color={theme.colors.WHITE}
            // onPress={() => drawer.openDrawer()}
          />
        )}

        {leftIcon && leftIcon === 'back' && (
          <Icon
            name="left-arrow"
            color={theme.colors.WHITE}

            // onPress={() => navigation.goBack()}
          />
        )}

        <Icon name="user" color={theme.colors.WHITE} />
      </StyleHeader>
    </SafeAreaView>
  );
};
