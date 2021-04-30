import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {
  Header,
  IconBg,
  CategoriesListing,
  ProductsListing,
  CustomText,
  CartProductsListing,
} from '../../components';
import {
  StyleCategoriedContainer,
  StyleContentContainer,
  StyleMainContainer,
  StyleProductsContainer,
} from './style';
import theme from '../../theme';

const CartScreen = () => {
  return (
    <StyleMainContainer>
      <Header
        leftIcon="left-arrow"
        headerBackground={theme.colors.SCREEN_WHITE}
        rightIcon="trash"
        rightIconColor="#fff"
        rightIconBg={theme.colors.PRIMARY_BLUE}
        searchEnabled
        // primaryTextColor={theme.colors.TITLE}
        // primaryText="Phone Pub"
      />
      <StyleContentContainer>
        <View>
          <CustomText
            text="Cart"
            color="#3e454b"
            fontSize={theme.fontSize.MEDIUM_LARGE}
            fontFamily={theme.fontFamily.bold}
          />
        </View>

        <StyleProductsContainer>
          <CartProductsListing />
        </StyleProductsContainer>
      </StyleContentContainer>
    </StyleMainContainer>
  );
};

export default CartScreen;
