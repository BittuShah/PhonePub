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
        headerBackground="#39abee"
        rightIcon="cart"
        rightIconColor="#39abee"
        rightIconBg="#fff"
        searchEnabled
        primaryText="Phone Pub"
      />
      <StyleContentContainer>
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
const styles = StyleSheet.create({});

export default HomeScreen;
