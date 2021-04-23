import React from 'react';
import {View, Text} from 'react-native';

const MyOrderScreen = ({route, navigation}) => {
  console.log(route, navigation);
  return (
    <View>
      <Text>MyOrderScreen</Text>
    </View>
  );
};

export default MyOrderScreen;
