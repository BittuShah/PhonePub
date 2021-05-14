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
import {truncate} from '../../lib/helper';
import theme from '../../theme';
const {height, width} = Dimensions.get('window');
const strLength = 16;

const WishlistItem = ({product, index}) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.imageView}>
        <Image
          // source={require('../../assets/mobile_covers.png')}
          source={product?.image}
          style={styles.image}
        />
      </View>
      <View style={styles.itemDetails}>
        <View style={styles.itemTitleContainer}>
          <View
            style={{
              //   flexDirection: 'row',
              //   borderWidth: 1,
              height: 70,
              marginBottom: 10,
            }}>
            <View
              style={
                {
                  // flex: 3,
                  // borderColor: 'black',
                  // borderWidth: 1
                }
              }>
              <CustomText
                text={
                  product?.name.length > strLength
                    ? truncate(product?.name, strLength)
                    : product?.name
                }
                fontFamily={theme.fontFamily.bold}
                fontSize="16"
                color={theme.colors.TITLE}
              />
            </View>
            <View
              style={
                {
                  // marginLeft: 10,
                  // alignItems: 'center',
                  // justifyContent: 'center',
                  // flex: 1,
                  // borderWidth: 1,
                  // borderColor: 'blue',
                  // borderWidth: 1,
                }
              }>
              <CustomText
                text={'₹' + product?.price}
                fontFamily={theme.fontFamily.bold}
                fontSize="15"
                color={theme.colors.SUB_TITLE}
              />
            </View>
          </View>
          {/* <Quantity quantity={product?.quantity} /> */}
        </View>
      </View>
      <View style={styles.itemCloseIconView}>
        <TouchableOpacity
          style={[styles.itemCloseIcon, {backgroundColor: theme.colors.GOLDEN}]}
          // onPress={() => handleSearchClose()}
        >
          <Icon name="cart" color="#fff" height="10" width="10" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.itemCloseIcon}
          // onPress={() => handleSearchClose()}
        >
          <Icon name="close" color="#fff" height="10" width="10" />
        </TouchableOpacity>
      </View>

      {/* <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 30}}>
            <View
              style={{flex: 1, height: 1, backgroundColor: theme.colors.GOLDEN}}
            />
            <View>
              <Text
                style={{
                  width: 40,
                  textAlign: 'center',
                  color: theme.colors.GOLDEN,
                  fontFamily: theme.fontFamily.bold,
                }}>
                or
              </Text>
            </View>
            <View
              style={{flex: 1, height: 1, backgroundColor: theme.colors.GOLDEN}}
            />
          </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    height: 70,
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  imageView: {
    backgroundColor: theme.colors.GREY4,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    width: 70,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 50,
  },
  itemDetails: {
    // borderWidth: 1,
    // borderColor: 'red',
    // marginHorizontal: 10,
    marginLeft: 10,
    marginRight: 5,
    width: width - 200,
  },
  itemTitle: {
    // flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  itemCloseIconView: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    // borderColor: 'red',
    // borderWidth: 1,
    width: 70,
  },
  itemCloseIcon: {
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: theme.colors.PRIMARY_BLUE,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WishlistItem;
