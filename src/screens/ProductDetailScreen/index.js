import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Dimensions,
} from 'react-native';
import theme from '../../theme';
import {Button, IconInput, Link, Header} from '../../components';
const {height} = Dimensions.get('window');

const ProductDetailScreen = () => {
  return (
    <View
      style={{
        // backgroundColor: theme.colors.PRIMARY_BLUE,
        flex: 1,
      }}>
      <ImageBackground
        source={require('../../assets/headphones.jpg')}
        style={styles.productImage}
      />
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}>
        <Header
          leftIcon="left-arrow-thick"
          rightIcon="mobile-fill"
          rightIconBg="transparent"
          rightIconColor={theme.colors.WHITE}
          headerBackground="transparent"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productImage: {
    width: '100%',
    height: '70%',
  },
});

export default ProductDetailScreen;
