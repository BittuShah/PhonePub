import React from 'react';
import {View, Text} from 'react-native';
import {Icon} from '../../components';
import navigation from '../../lib/navigationService';
import {CustomText} from '../../components';
import theme from '../../theme';

const OrderNowScreen = () => {
  return (
    <View>
      {/* <CustomText bold>Order Now Screen</CustomText>
      <Icon onPress={() => navigation.goBack()} name="arrow-left" /> */}
    </View>
  );
};

export default OrderNowScreen;
