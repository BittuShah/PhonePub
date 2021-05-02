import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';
import theme from '../../theme';
import {
  Button,
  IconInput,
  Link,
  Header,
  Icon,
  Quantity,
  IconBg,
  CustomText,
} from '../../components';
const {height} = Dimensions.get('window');
const {width} = Dimensions.get('window');

const ProductDetailScreen = () => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <View
      style={{
        backgroundColor: '#8fcbf0',
        flex: 1,
      }}>
      <ImageBackground
        source={require('../../assets/air_buds.png')}
        style={styles.productImage}
      />
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          height: 300,
        }}>
        <Header
          leftIcon="left-arrow-thick"
          rightIcon="cart"
          rightIconBg={theme.colors.PRIMARY_BLUE}
          rightIconColor={theme.colors.WHITE}
          headerBackground="transparent"
        />
        <View style={styles.whiteView}>
          <ScrollView style={{paddingHorizontal: 20}}>
            <View style={styles.titleView}>
              <Text style={styles.title}>BOAT Head Phones</Text>
              <Text onPress={() => setIsLiked(!isLiked)}>
                <Icon
                  name={isLiked ? 'heart-fill' : 'heart'}
                  color={isLiked && theme.colors.RED}
                  style={{fontFamily: theme.fontFamily.bold}}
                  height="22"
                  width="22"
                />
              </Text>
            </View>
            <View style={styles.descriptionView}>
              <Text style={styles.description}>
                Veg Cheese grilled sandwich / vegetable cheese Sandwich
                Vegetarian
              </Text>
            </View>
            <View style={styles.priceQuantity}>
              <View style={styles.quantity}>
                {/* <Text>1</Text> */}
                <Quantity quantity="1" />
              </View>
              <View style={styles.priceView}>
                <Text style={styles.priceIcon}>
                  <Icon
                    name="rupees"
                    height="15"
                    width="15"
                    color={theme.colors.SUB_TITLE}
                  />
                </Text>
                <Text style={styles.price}>14.99</Text>
              </View>
            </View>
            <ScrollView style={styles.imageSlider} horizontal>
              <View
                style={{
                  // borderWidth: 1,
                  // borderColor: theme.colors.GOLDEN,
                  backgroundColor: '#dddddd',
                  padding: 5,
                  borderRadius: 15,
                  marginRight: 10,
                }}>
                <Image
                  source={require('../../assets/otg.png')}
                  style={styles.image}
                />
              </View>
              <View
                style={{
                  borderWidth: 1,
                  backgroundColor: '#dddddd',

                  borderColor: theme.colors.GOLDEN,
                  padding: 5,
                  borderRadius: 15,
                  marginRight: 10,
                }}>
                <Image
                  source={require('../../assets/mobile_covers.png')}
                  style={styles.image}
                />
              </View>
              <View
                style={{
                  // borderWidth: 1,
                  // borderColor: theme.colors.GOLDEN,
                  backgroundColor: '#dddddd',
                  padding: 5,
                  borderRadius: 15,
                  marginRight: 10,
                }}>
                <Image
                  source={require('../../assets/otg.png')}
                  style={styles.image}
                />
              </View>
              <View
                style={{
                  borderWidth: 1,
                  backgroundColor: '#dddddd',

                  borderColor: theme.colors.GOLDEN,
                  padding: 5,
                  borderRadius: 15,
                  marginRight: 10,
                }}>
                <Image
                  source={require('../../assets/mobile_covers.png')}
                  style={styles.image}
                />
              </View>
              <View
                style={{
                  // borderWidth: 1,
                  // borderColor: theme.colors.GOLDEN,
                  backgroundColor: '#dddddd',
                  padding: 5,
                  borderRadius: 15,
                  marginRight: 10,
                }}>
                <Image
                  source={require('../../assets/otg.png')}
                  style={styles.image}
                />
              </View>
              <View
                style={{
                  borderWidth: 1,
                  backgroundColor: '#dddddd',

                  borderColor: theme.colors.GOLDEN,
                  padding: 5,
                  borderRadius: 15,
                  marginRight: 10,
                }}>
                <Image
                  source={require('../../assets/mobile_covers.png')}
                  style={styles.image}
                />
              </View>
            </ScrollView>
            <View style={styles.cartBtnView}>
              <View style={styles.cartBtnContainer}>
                <Button
                  title="Add to cart"
                  fontFamily={theme.fontFamily.bold}
                  color="#fff"
                />
              </View>
              <View style={styles.wishlistCountContainer}>
                <IconBg
                  name="heart-fill"
                  color={theme.colors.WHITE}
                  backgroundColor={theme.colors.GOLDEN}
                  height="20"
                  width="20"
                />
                <View style={{marginLeft: 5}}>
                  <CustomText
                    text="15"
                    color={theme.colors.SUB_TITLE}
                    fontSize="14"
                  />
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productImage: {
    width: '100%',
    height: 300,
  },
  whiteView: {
    width: '100%',
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    backgroundColor: theme.colors.WHITE,
    paddingTop: 20,
    paddingBottom: 40,
    height: height - 200,
    top: 120,
    marginTop: 40,
  },
  titleView: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginTop: 10,
    // alignContent: 'space-between',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 25,
    fontFamily: theme.fontFamily.medium,
    color: theme.colors.TITLE,
    width: width - 150,
    // flex:
    // al
  },
  descriptionView: {
    marginTop: 5,
    // marginBottom: 10,
  },
  description: {
    fontSize: 15,
    color: theme.colors.SUB_TITLE,
    fontFamily: theme.fontFamily.bold,
  },
  priceQuantity: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  quantity: {},
  // priceView: {

  // },
  priceView: {
    flexDirection: 'row',
    // borderWidth: 1,
    // justifyContent: '',
  },
  priceIcon: {
    // flexDirection: 'row',
    // alignItems: 'flex-start',
    // textAlignVertical: 'top',
    // borderWidth: 1,
    // marginLeft: 2,
  },
  price: {
    fontSize: 28,
    fontFamily: theme.fontFamily.medium,
    color: theme.colors.TITLE,
    // borderWidth: 1,
    paddingLeft: 0,
    marginLeft: 0,

    // flexDirection: 'column',
    // alignItems: 'center',
  },
  imageSlider: {
    flexDirection: 'row',
    // overflow: 'scroll',
    marginTop: 15,
  },
  image: {
    // borderWidth: 1,
    height: 70,
    width: 65,
  },
  cartBtnView: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cartBtnContainer: {
    width: width - 110,
  },
  wishlistCountContainer: {
    flexDirection: 'row',
    // justifyContent: ""
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default ProductDetailScreen;
