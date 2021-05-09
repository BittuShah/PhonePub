import React, {useState} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {
  Header,
  CategoriesListing,
  ProductsListing,
  CustomText,
} from '../../components';
import {
  StyleCategoriedContainer,
  StyleContentContainer,
  StyleMainContainer,
  StyleProductsContainer,
} from './style';
import theme from '../../theme';
import {categories, products} from '../../lib/dummyData';

const HomeScreen = ({route, navigation}) => {
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <StyleMainContainer>
      <Header
        leftIcon="menu"
        onLeftPress={() => navigation.openDrawer()}
        headerBackground="#fff"
        rightIcon="cart"
        rightIconColor="#fff"
        rightIconBg={theme.colors.PRIMARY_BLUE}
        searchEnabled
        primaryTextColor={theme.colors.TITLE}
        primaryText="Phone Pub"
      />
      <StyleContentContainer style={styles.contentContainer}>
        <StyleCategoriedContainer>
          <CategoriesListing
            options={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </StyleCategoriedContainer>
        <StyleProductsContainer>
          {products.length > 0 ? (
            <ProductsListing products={products} />
          ) : (
            <View style={styles.emptyListView}>
              <Image
                source={require('../../assets/empty_cart.png')}
                style={styles.emptyListImage}
              />
              <CustomText
                text="No products found."
                style={{marginTop: 10}}
                fontSize={18}
                fontFamily={theme.fontFamily.bold}
              />
            </View>
          )}
        </StyleProductsContainer>
      </StyleContentContainer>
    </StyleMainContainer>
  );
};
const styles = StyleSheet.create({
  contentContainer: {
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    backgroundColor: theme.colors.WHITE,
  },
  emptyListView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyListImage: {
    height: 250,
    width: 250,
  },
});

export default HomeScreen;
