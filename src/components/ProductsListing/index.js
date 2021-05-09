import React from 'react';
import {
  ScrollView,
  //   SafeAreaView,
  View,
  StyleSheet,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {CustomText, Icon} from '..';
import theme from '../../theme';

const {width} = Dimensions.get('window');

const ProductsListing = ({products}) => {
  const RenderProduct = ({product, index}) => {
    return (
      <View
        style={[
          styles.productView,
          {
            marginRight: index % 2 === 0 ? 20 : 0,
            paddingTop: index % 2 === 0 ? 0 : 30,
          },
        ]}
        key={index}>
        <View style={styles.imageAndLikeView}>
          <TouchableOpacity style={styles.likeView}>
            {/* <Icon
                  name="like-fill"
                  height="15"
                  width="15"
                  color="#f82f37"
                /> */}
            <Icon name="like" height="15" width="15" color="#f82f37" />
          </TouchableOpacity>
          <View style={styles.imageView}>
            <Image source={product.image} style={styles.productImage} />
          </View>
        </View>
        <View style={styles.textView}>
          <CustomText
            text={product.name}
            color={theme.colors.PRIMARY_BLUE}
            fontSize={theme.fontSize.MEDIUM}
          />
          <CustomText
            text={`₹${product.price.toFixed(2)}`}
            color={theme.colors.GOLDEN}
            style={{marginTop: 2}}
            fontSize={theme.fontSize.SMALL}
          />
        </View>
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
    />
  );
};

const styles = StyleSheet.create({
  productView: {
    width: width / 2 - 30,
    marginVertical: 10,
  },
  imageAndLikeView: {
    height: 193,
    width: '100%',
    borderRadius: 12,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 10,
  },
  imageView: {
    height: 145,
  },
  productImage: {
    height: '100%',
    width: '100%',
  },
  textView: {
    paddingTop: 10,
  },
  likeView: {
    height: 25,
    width: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: theme.colors.WHITE,
    alignSelf: 'flex-end',
    marginTop: 10,
  },
});

export default ProductsListing;
