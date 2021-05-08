import React from 'react';
import {StyleSheet, View, FlatList, Image, Dimensions} from 'react-native';
import {CustomText, CartItem} from '../';
import theme from './../../theme';

const {height} = Dimensions.get('window');

const CartProductsListing = ({products}) => {
  return (
    <FlatList
      data={products}
      showsVerticalScrollIndicator={false}
      scrollEnabled={true}
      keyExtractor={item => item.id}
      renderItem={({item, index}) => (
        <View>
          <CartItem key={index} product={item} index={index} />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              // marginTop: 10,
              marginBottom: 10,
            }}>
            <View
              style={{flex: 1, height: 1, backgroundColor: theme.colors.GREY4}}
            />
            {/* <View>
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
            /> */}
          </View>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  productView: {
    flexDirection: 'row',
    height: 50,
    width: '100%',
  },
  imageView: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  detailsView: {
    height: 50,
    backgroundColor: 'black',
  },
  deleteView: {
    height: 50,
    backgroundColor: 'green',
  },
});

export default CartProductsListing;
