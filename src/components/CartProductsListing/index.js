import React from 'react';
import {StyleSheet, View, FlatList, Image} from 'react-native';
import {CustomText, CartItem} from '../';
import {products} from '../../lib/dummyData';

const CartProductsListing = () => {
  return (
    <FlatList
      data={products}
      showsVerticalScrollIndicator={false}
      scrollEnabled={true}
      keyExtractor={item => item.id}
      renderItem={({item, index}) => (
        <CartItem key={index} product={item} index={index} />
      )}
      ListEmptyComponent={
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <CustomText text="No Records Found." />
        </View>
      }
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
