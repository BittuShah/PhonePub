import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {
  Header,
  IconBg,
  CategoriesListing,
  ProductsListing,
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
          <ProductsListing products={products} />
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
});

export default HomeScreen;
