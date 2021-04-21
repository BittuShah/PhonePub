import React from 'react';
import {View} from 'react-native';
import {Button} from '../../components';
import navigation from '../../lib/navigationService';
import {AppRoute} from '../../navigation/appRoute';

const HomeScreen = () => {
  return (
    <View>
      {/* <Text>HomeScreen</Text> */}
      <Button
        title="Order Now"
        onPress={() => navigation.navigate(AppRoute.ORDER_NOW_SCREEN)}
      />
    </View>
  );
};

export default HomeScreen;
