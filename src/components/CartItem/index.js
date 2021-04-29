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
} from '../../components';
import theme from '../../theme';
const {height} = Dimensions.get('window');

const CartItem = ({imageSrc, title, price, quantity}) => {
  return (
    <View>
      <View style={styles.itemContainer}>
        <View
          style={{
            backgroundColor: theme.colors.GREY4,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 50,
          }}>
          <Image
            // source={require('../../assets/mobile_covers.png')}
            source={imageSrc}
            style={styles.image}
          />
        </View>
        <View style={styles.itemDetails}>
          <View style={styles.itemTitleContainer}>
            <View
              style={{
                flexDirection: 'row',
                marginBottom: 10,
              }}>
              <CustomText
                text={title}
                fontFamily={theme.fontFamily.bold}
                fontSize="18"
                color={theme.colors.TITLE}
              />
              <View
                style={{
                  marginLeft: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                  // justifyContent: 'space-between',
                }}>
                <CustomText
                  text={'₹' + price}
                  fontFamily={theme.fontFamily.bold}
                  fontSize="15"
                  color={theme.colors.SUB_TITLE}
                />
                {/* <Icon
                  name="rupees"
                  color={theme.colors.SUB_TITLE}
                  height="12"
                  width="12"
                /> */}
              </View>
            </View>
            <Quantity quantity={quantity} />
          </View>
        </View>
        <View style={styles.itemCloseIconView}>
          <TouchableOpacity
            style={styles.itemCloseIcon}
            // onPress={() => handleSearchClose()}
          >
            <Icon name="close" color="#fff" height="10" width="10" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.addMoreView}>
        <TouchableOpacity style={styles.addMore}>
          <Icon
            name="download"
            color={theme.colors.GOLDEN}
            height="17"
            width="17"
          />
          <CustomText
            text="Add more item"
            style={{marginLeft: 15}}
            color={theme.colors.GOLDEN}
            fontFamily={theme.fontFamily.bold}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  //   itemsView: {
  //     height: height - 310,

  //     // backgroundColor: 'red',
  //   },
  itemContainer: {
    flexDirection: 'row',
    height: 70,
    justifyContent: 'space-between',
    marginTop: 5,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 50,
  },
  itemDetails: {
    // borderWidth: 1,
  },
  itemTitle: {
    // flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  itemCloseIconView: {
    justifyContent: 'center',
  },
  itemCloseIcon: {
    height: 30,
    width: 30,
    borderRadius: 50,
    backgroundColor: theme.colors.PRIMARY_BLUE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addMoreView: {
    marginTop: 25,
    // marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addMore: {
    flexDirection: 'row',
    fontFamily: theme.fontFamily.bold,
  },
});

export default CartItem;
