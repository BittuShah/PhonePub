import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {AppRoute} from './appRoute';

import navigation from '../lib/navigationService';

// import {Header} from '../components';

import {
  LogoScreen,
  HomeScreen,
  MyOrderScreen,
  EditProfileScreen,
  AboutScreen,
  ContactScreen,
  RateScreen,
} from '../screens';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName={AppRoute.HOME_SCREEN}>
      <Drawer.Screen name="Drawer" component={PhonePubDrawerScreen} />
    </Drawer.Navigator>
  );
};

export const PhonePubDrawerScreen = () => {
  return (
    <>
      <Drawer.Screen
        name={AppRoute.MY_ORDER_SCREEN}
        component={MyOrderScreen}
        options={{header: (props) => <Header />}}
      />
      <Drawer.Screen
        name={AppRoute.EDIT_PROFILE_SCREEN}
        component={EditProfileScreen}
        options={{header: (props) => <Header />}}
      />
      <Drawer.Screen
        name={AppRoute.ABOUT_SCREEN}
        component={AboutScreen}
        options={{header: (props) => <Header />}}
      />
      <Drawer.Screen
        name={AppRoute.CONTACT_SCREEN}
        component={ContactScreen}
        options={{header: (props) => <Header />}}
      />
      <Drawer.Screen
        name={AppRoute.RATE_SCREEN}
        component={RateScreen}
        options={{header: (props) => <Header />}}
      />
    </>
  );
};
