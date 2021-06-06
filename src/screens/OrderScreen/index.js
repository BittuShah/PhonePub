import React, {useState} from 'react';
import * as Animatable from 'react-native-animatable';

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
import {truncate} from '../../lib/helper';
const strLength = 22;

const {height} = Dimensions.get('window');

const OrderScreen = ({route, navigation}) => {
  return (
    <View style={styles.container}>
      <Header
        leftIcon="left-arrow"
        headerBackground={theme.colors.PRIMARY_BLUE}
        // onLeftPress={() => navigation.openDrawer()}
      />
      <View style={styles.main}>
        <View style={styles.bodyView}>
          <View style={styles.orderTitleView}>
            <BodyTitle title="Order" />
          </View>

          <View style={styles.addressCard}>
            <View style={styles.addressIconView}>
              <Icon name="truck" color="#ff9500" height="25" width="25" />
            </View>
            <View style={styles.addressView}>
              <CustomText
                text="Delivery to"
                fontFamily={theme.fontFamily.bold}
                fontSize={theme.fontSize.MEDIUM}
              />
              <CustomText
                text={
                  'Yash vihar, ambaji neliyu'.length > strLength
                    ? truncate('Yash vihar, ambaji neliyu', strLength)
                    : 'Yash vihar, ambaji neliyu'
                }
                fontSize={theme.fontSize.NORMAL}
              />
            </View>
            <View style={styles.changeAddressView}>
              <TouchableOpacity>
                <CustomText
                  text="Change"
                  fontFamily={theme.fontFamily.bold}
                  fontSize={theme.fontSize.MEDIUM}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.itemsView}>
            <CartProductsListing />
          </View>

          <View style={{marginVertical: 8}}>
            <AddNewItem title="Add more items" />
          </View>
        </View>
      </View>
      <View style={styles.checkoutCountainer}>
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
              text="9050.00"
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
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.SCREEN_WHITE,
  },
  main: {
    backgroundColor: theme.colors.PRIMARY_BLUE,
  },
  bodyView: {
    backgroundColor: theme.colors.SCREEN_WHITE,
    paddingHorizontal: 15,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
  },
  whiteView: {
    flex: 1,
  },
  orderTitleView: {
    paddingTop: 10,
  },
  addressCard: {
    height: 100,
    marginVertical: 10,
    borderRadius: 15,
    backgroundColor: theme.colors.WHITE,
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  addressIconView: {
    flex: 1,
    backgroundColor: '#fce6c1',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addressView: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  changeAddressView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemsView: {
    height: height - 450,
    paddingVertical: 10,
    // backgroundColor: 'red',
  },
  checkoutCountainer: {
    height: 130,
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
});

export default OrderScreen;
