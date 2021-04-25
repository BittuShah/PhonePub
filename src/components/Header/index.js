import React, {useState} from 'react';
import * as Animatable from 'react-native-animatable';
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
  leftIconColor,
  leftTextColor,
  rightIcon,
  rightIconBg,
  rightIconColor,
  rightTextColor,
  rightText,
  primaryText,
  searchIconColor,
  searchIconBg,
  primaryTextColor,
  secondaryText,
  secondaryTextColor,
  onLeftPress,
  onRightPress,
  searchEnabled,
  headerBackground,
  statusBarBackground,
}) => {
  let [searchInputOpen, setSearchInputOpen] = useState(false);
  let [headerTextOpen, setHeaderTextOpen] = useState(true);

  const handleSearchOpen = () => {
    setSearchInputOpen(!searchInputOpen);
    setHeaderTextOpen(!headerTextOpen);
  };

  const handleSearchClose = () => {
    setSearchInputOpen(!searchInputOpen);
    setHeaderTextOpen(!headerTextOpen);
  };

  return (
    // <SafeAreaView style={{backgroundColor: theme.colors.skyBlue}}>
    <SafeAreaView>
      {/* status bar */}
      <StatusBar
        backgroundColor={
          statusBarBackground ? statusBarBackground : theme.colors.skyBlue
        }
      />

      <StyleHeader headerBackground={headerBackground}>
        {/* left icon and left text */}
        <View style={styles.leftView}>
          {leftIcon && (
            <IconBg
              name={leftIcon}
              color={leftIconColor ? leftIconColor : theme.colors.WHITE}
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

        <View
          style={[
            styles.centerView,
            {flex: !searchEnabled || searchInputOpen ? 8 : 6},
          ]}>
          {/* search input  */}
          {searchInputOpen ? (
            <Animatable.View
              style={[styles.inputView]}
              animation="fadeInRight"
              duration={500}>
              <View style={styles.searchIcon}>
                <Icon name="search" color="#393939" height="15" width="15" />
              </View>
              <TextInput
                style={styles.searchInput}
                placeholder="Search here..."
                placeholderTextColor="#abaeb0"
              />
              <View style={styles.closeIconView}>
                <TouchableOpacity
                  style={styles.closeIcon}
                  onPress={() => handleSearchClose()}>
                  <Icon name="close" color="#fff" height="10" width="10" />
                </TouchableOpacity>
              </View>
            </Animatable.View>
          ) : (
            // header text
            <View style={{flexDirection: 'row'}}>
              <StyleTextView>
                {primaryText && (
                  <CustomText
                    text={primaryText}
                    fontSize={theme.fontSize.HEADING}
                    fontFamily={theme.fontFamily.medium}
                    color={primaryTextColor ? primaryTextColor : '#eff0f8'}
                  />
                )}
                {secondaryText && (
                  <CustomText
                    text={secondaryText}
                    fontSize={theme.fontSize.NORMAL}
                    color={secondaryColor ? secondaryColor : '#eff0f8'}
                  />
                )}
              </StyleTextView>
            </View>
          )}
        </View>

        {/* right icon */}
        <View
          style={[
            styles.rightView,
            {
              flex: !searchEnabled ? 1 : searchInputOpen ? 1 : 2,
              alignItems:
                searchEnabled && searchInputOpen ? 'center' : 'center',
              flexDirection:
                searchEnabled && searchInputOpen ? 'column' : 'row',
              justifyContent:
                searchEnabled && searchInputOpen ? 'center' : 'flex-end',
            },
          ]}>
          {/* search icon */}
          {searchEnabled && !searchInputOpen && (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 10,
              }}>
              <IconBg
                name="search"
                color={searchIconColor ? searchIconColor : theme.colors.WHITE}
                onPress={() => handleSearchOpen()}
                backgroundColor={searchIconBg}
              />
            </View>
          )}

          {rightIcon && (
            <IconBg
              name={rightIcon}
              color={rightIconColor ? rightIconColor : theme.colors.WHITE}
              onPress={onRightPress}
              backgroundColor={rightIconBg}
              containerStyle={[
                styles.rightIconStyle,
                {
                  marginRight: searchEnabled && searchInputOpen ? -4 : 0,
                },
              ]}
            />
          )}

          {rightText && (
            <StyleRightTextButton onPress={onRightPress}>
              <CustomText
                text={rightText}
                isBold={true}
                color={rightTextColor}
              />
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightView: {
    height: 60,
    // backgroundColor: 'green',
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
  rightIconStyle: {},
});

export default Header;
