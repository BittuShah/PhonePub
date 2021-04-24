import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  TextInput,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
} from 'react-native';

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

const {width} = Dimensions.get('window');

const Header = ({
  leftIcon,
  leftText,
  leftIconBg,
  leftTextColor,
  rightIcon,
  rightIconBg,
  rightTextColor,
  rightText,
  primaryText,
  primaryTextColor,
  secondaryText,
  secondaryTextColor,
  onLeftPress,
  onRightPress,
  searchEnabled,
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
        <View style={styles.leftView}>
          {leftIcon && (
            <IconBg
              name={leftIcon}
              color={theme.colors.WHITE}
              onPress={onLeftPress}
              backgroundColor={leftIconBg}
            />
          )}
          {leftText && (
            <StyleLeftTextButton onPress={onLeftPress}>
              <CustomText text={leftText} color={leftTextColor} />
            </StyleLeftTextButton>
          )}
        </View>
        <View style={styles.centerView}>
          {/* <View style={styles.inputView}>
            <View style={styles.searchIcon}>
              <Icon name="search" color="#393939" height="15" width="15" />
            </View>
            <TextInput
              style={styles.searchInput}
              placeholder="Search here..."
              placeholderTextColor="#abaeb0"
            />
            <View style={styles.closeIconView}>
              <TouchableOpacity style={styles.closeIcon}>
                <Icon name="close" color="#fff" height="10" width="10" />
              </TouchableOpacity>
            </View>
          </View> */}
          <View style={{flexDirection: 'row'}}>
            <StyleTextView>
              {primaryText && (
                <CustomText
                  text={primaryText}
                  fontSize={theme.fontSize.MEDIUM_LARGE}
                  // fontFamily={theme.fontFamily.black}
                  color="#eff0f8"
                  style={{letterSpacing: 0.5}}
                />
              )}
              {secondaryText && (
                <CustomText
                  text={secondaryText}
                  fontSize={theme.fontSize.NORMAL}
                  color="#eff0f8"
                />
              )}
            </StyleTextView>
            {searchEnabled && (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: 15,
                }}>
                <IconBg
                  name="search"
                  color={theme.colors.WHITE}
                  onPress={onLeftPress}
                  backgroundColor={leftIconBg}
                />
              </View>
            )}
          </View>
        </View>
        <View style={styles.rightView}>
          {rightIcon && (
            <IconBg
              name={rightIcon}
              color={theme.colors.WHITE}
              onPress={onRightPress}
              backgroundColor={rightIconBg}
            />
          )}

          {rightText && (
            <StyleRightTextButton onPress={onRightPress}>
              <CustomText text={rightText} color={rightTextColor} />
            </StyleRightTextButton>
          )}
        </View>
      </StyleHeader>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  leftView: {
    height: 60,
    // width: 40,
    flex: 1,
    // backgroundColor: 'white',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  centerView: {
    height: 60,
    // backgroundColor: 'black',
    flex: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightView: {
    height: 60,
    // backgroundColor: 'green',
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },

  inputView: {
    height: 50,
    width: width - 115,
    backgroundColor: '#f1f2f2',
    borderRadius: 20,
    flexDirection: 'row',
    paddingHorizontal: 8,
  },
  searchInput: {
    color: theme.colors.black,
    flex: 6,
    fontFamily: theme.fontFamily.regular,
  },
  searchIcon: {
    flex: 0.8,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  closeIconView: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    flex: 1,
  },
  closeIcon: {
    height: 20,
    width: 20,
    borderRadius: 50,
    backgroundColor: '#393f45',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Header;
