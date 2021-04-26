import React from 'react';
import {StyleSheet, View, FlatList, Image} from 'react-native';
import {CustomText} from '../';
import {products} from '../../lib/dummyData';

const CartProductsListing = () => {
  const RenderProduct = ({product, index}) => {
    return (
      <View style={styles.productView}>
        <View style={styles.imageView}>
          <Image
            style={styles.image}
            source={require('../../assets/headephones.png')}
          />
        </View>
        <View style={styles.detailsView}></View>
        <View style={styles.deleteView}></View>
      </View>
    );
  };
  return (
    <FlatList
      data={products}
      key="_"
      showsVerticalScrollIndicator={false}
      scrollEnabled={true}
      keyExtractor={item => '_' + item.id}
      renderItem={({item, index}) => (
        <RenderProduct key={index} product={item} index={index} />
      )}
      numColumns={2}
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
