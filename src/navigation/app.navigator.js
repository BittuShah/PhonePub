import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AppRoute} from './appRoute';

import {PhonePubStackScreen} from './stack.navigator';

const Stack = createStackNavigator();

export const AppNavigator = () => {
  return (
    <Stack.Navigator>
      {/* NEW */}
      <Stack.Screen
        name={AppRoute.PHONE_PUB}
        component={PhonePubStackScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
