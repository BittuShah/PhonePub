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
} from '../../components';
import theme from '../../theme';
const {height} = Dimensions.get('window');

const TestingParshvComponents = ({route, navigation}) => {
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
        headerBackground="transparent"
        onLeftPress={() => navigation.openDrawer()}
      />
      <View style={styles.main}>
        <View style={styles.cartTitleView}>
          <CustomText
            text="Cart"
            fontFamily={theme.fontFamily.bold}
            fontSize="25"
            color={theme.colors.TITLE}
          />
        </View>

        <ScrollView style={styles.itemsView}>
          <CartItem
            imageSrc={require('../../assets/mobile_covers.png')}
            title="HeadPhones"
            price="100"
            quantity="2"
          />
        </ScrollView>
      </View>
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
        <Button title="Checkout" fontFamily={theme.fontFamily.bold} />
      </View>
      {/* <Text
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 18,
          fontFamily: theme.fontFamily.regular,
        }}>
        Hello world
      </Text> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f8f8',
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
    // borderWidth: 1,
    height: 50,
    // marginBottom: 5,
    alignItems: 'center',
    // backgroundColor: 'blue',s
  },
  inputView: {
    height: 50,
    width: '100%',
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
  itemsView: {
    height: height - 310,

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
    marginTop: 10,
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
});

export default TestingParshvComponents;
