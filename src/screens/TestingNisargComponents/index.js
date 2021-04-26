import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Header, IconBg, CustomText} from '../../components';
import theme from '../../theme';

const TestingNisargComponents = ({route, navigation}) => {
  return (
    <View style={styles.whiteView}>
      <Header leftIcon="menu" onLeftPress={() => navigation.openDrawer()} />

      <View style={styles.productView}>
        <View style={styles.imageView}>
          <Image
            style={styles.image}
            source={require('../../assets/mobile_covers.png')}
          />
        </View>
        <View style={styles.detailsView}></View>
        <View style={styles.deleteView}></View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  whiteView: {
    flex: 1,
    // paddingVertical: 50,
    // paddingHorizontal: 50,
    paddingHorizontal: 20,
  },
  productView: {
    flexDirection: 'row',
    height: 100,
    width: '100%',
    borderColor: 'red',
    borderWidth: 1,
    alignItems: 'center',
  },
  imageView: {
    height: 80,
    flex: 1.5,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 50,
    overflow: 'hidden',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  detailsView: {
    height: '100%',
    backgroundColor: 'black',
    flex: 3,
  },
  deleteView: {
    height: '100%',
    backgroundColor: 'green',
    flex: 1,
  },
});

export default TestingNisargComponents;
