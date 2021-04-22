import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import {CustomText, Icon, IconBg} from '../index';
import {
  StyleHeader,
  StyleTextView,
  StyleLeftTextButton,
  StyleRightTextButton,
} from './style';
import navigation from '../../lib/navigationService';
import {AppRoute} from '../../navigation/appRoute';
import theme from '../../theme';

export const Header = ({
  leftIcon,
  leftText,
  rightIcon,
  rightText,
  primaryText,
  secondaryText,
  onLeftPress,
  onRightPress,
  headerBackground,
  statusBarBackground,
}) => {
  return (
    // <SafeAreaView style={{backgroundColor: theme.colors.skyBlue}}>
    <SafeAreaView>
      <StatusBar
        backgroundColor={
          statusBarBackground ? statusBarBackground : theme.colors.skyBlue
        }
      />

      <StyleHeader headerBackground={headerBackground}>
        {leftText && (
          <StyleLeftTextButton onPress={onLeftPress}>
            <CustomText text={leftText} />
          </StyleLeftTextButton>
        )}

        {leftIcon && (
          <IconBg
            name={leftIcon}
            color={theme.colors.WHITE}
            onPress={onLeftPress}
          />
        )}

        <StyleTextView>
          {primaryText && (
            <CustomText
              text={primaryText}
              fontSize={theme.fontSize.MEDIUM_LARGE}
            />
          )}
          {secondaryText && (
            <CustomText text={secondaryText} fontSize={theme.fontSize.SMALL} />
          )}
        </StyleTextView>

        {rightIcon && (
          <IconBg
            name={rightIcon}
            color={theme.colors.WHITE}
            onPress={onRightPress}
          />
        )}

        {rightText && (
          <StyleRightTextButton onPress={onRightPress}>
            <CustomText text={rightText} />
          </StyleRightTextButton>
        )}
      </StyleHeader>
    </SafeAreaView>
  );
};
