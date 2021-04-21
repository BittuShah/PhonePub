import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AppRoute} from './appRoute';
import {
  LoginScreen,
  SignupScreen,
  TestingNisargComponents,
  TestingParshvComponents,
  TestingPratikComponents,
} from '../screens';
import {Header} from '../components';
import {StatusBar} from 'react-native';
import theme from '../theme';

const Stack = createStackNavigator();

export const AuthNavigator = () => (
  <Stack.Navigator>
    {/* NEW */}
    <Stack.Screen
      name={AppRoute.LOGIN_SCREEN}
      component={LoginScreen}
      options={{
        header: (props) => <Header />,
      }}
    />
    <Stack.Screen
      name={AppRoute.SIGNUP_SCREEN}
      component={SignupScreen}
      options={{
        header: (props) => <Header />,
      }}
    />
    {/* how to give color to status bar is given below */}

    {/* <Stack.Screen
        name={AppRoute.ACTIVATE_SCREEN}
        component={ActivateScreen}
        options={{
          header: props => <StatusBar backgroundColor={theme.colors.BLUE} />,
        }}
      /> */}
  </Stack.Navigator>
);
