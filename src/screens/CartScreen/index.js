import React, {useState} from 'react';

import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import {
  Header,
  IconBg,
  Icon,
  CustomText,
  Quantity,
  Button,
  CartItem,
  CartProductsListing,
  AddNewItem,
  BodyTitle,
} from '../../components';
import theme from '../../theme';
import {products} from '../../lib/dummyData';
const {height} = Dimensions.get('window');

const CartScreen = ({route, navigation}) => {
  let [searchInputOpen, setSearchInputOpen] = useState(false);

  const handleSearchOpen = () => {
    setSearchInputOpen(!searchInputOpen);
    // setHeaderTextOpen(!headerTextOpen);
  };

  const handleSearchClose = () => {
    setSearchInputOpen(!searchInputOpen);
    // setHeaderTextOpen(!headerTextOpen);
  };

  return (
    <View style={styles.container}>
      <Header
        leftIcon="left-arrow"
        rightIcon="trash-can"
        rightIconBg={theme.colors.PRIMARY_BLUE}
        searchEnabled
        // primaryTextColor={theme.colors.TITLE}
        // primaryText="Phone Pub"
        headerBackground="transparent"
        onLeftPress={() => navigation.openDrawer()}
      />
      <View style={styles.main}>
        <View style={styles.cartTitleView}>
          <BodyTitle title="My Cart" />
        </View>

        {/* cart items */}
        {products.length > 0 && (
          <View style={styles.itemsView}>
            <CartProductsListing products={products} />
          </View>
        )}

        {/* empty cart image */}
        {products.length < 1 && (
          <View style={styles.emptyCartView}>
            <Image
              source={require('../../assets/empty_cart.png')}
              style={styles.emptyCart}
            />
            <CustomText
              text="Your cart is empty"
              style={{marginTop: 10}}
              fontSize={18}
              fontFamily={theme.fontFamily.bold}
            />
          </View>
        )}
        {/* add more items */}
        <View style={{marginVertical: 8}}>
          <AddNewItem title="Add more items" />
        </View>
      </View>

      {/* checkout container  */}
      {products.length > 0 && (
        <View style={styles.checkoutCountainer}>
          <CustomText
            text="May, 2021"
            color={theme.colors.GOLDEN}
            fontSize="13"
          />
          <View style={styles.totalPrice}>
            <CustomText
              text="Total :"
              fontFamily={theme.fontFamily.medium}
              color={theme.colors.SUB_TITLE}
              fontSize="18"
            />
            <View style={styles.priceView}>
              {/* <Text> */}
              <Icon
                name="rupees"
                height="15"
                width="15"
                color={theme.colors.SUB_TITLE}
              />
              {/* </Text> */}
              <CustomText
                text="170"
                fontFamily={theme.fontFamily.bold}
                fontSize="28"
                color={theme.colors.TITLE}
              />
            </View>
          </View>
          <Button
            title="Checkout"
            fontFamily={theme.fontFamily.bold}
            color="#fff"
          />
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.SCREEN_WHITE,
  },
  main: {
    paddingHorizontal: 15,
  },
  whiteView: {
    flex: 1,
    // backgroundColor: 'red',
    // paddingVertical: 50,
    // paddingHorizontal: 50,
  },
  cartTitleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    alignItems: 'center',
  },
  itemsView: {
    height: height - 365,

    // backgroundColor: 'red',
  },
  checkoutCountainer: {
    height: 160,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    backgroundColor: theme.colors.WHITE,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  totalPrice: {
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  priceView: {
    flexDirection: 'row',
    marginBottom: 5,
    // borderWidth: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  addMoreView: {
    marginTop: 25,
    // marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'red',
  },
  addMore: {
    flexDirection: 'row',
    fontFamily: theme.fontFamily.bold,
  },
  emptyCart: {
    height: 250,
    width: 250,
  },
  emptyCartView: {
    // justifyContent: 'center',
    paddingTop: 50,
    alignItems: 'center',
    height: height - 365 + 150,
  },
});

export default CartScreen;
