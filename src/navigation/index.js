import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {AuthNavigator} from './auth.navigator';
import {AppNavigator} from './app.navigator';
import {PhonePubDrawerScreen} from './drawer.navigator';
import {AppRoute} from './appRoute';
import {Loader} from '../components';
import AsyncStorage from '@react-native-community/async-storage';
import {Icon} from '../components';

import {
  MyOrderScreen,
  EditProfileScreen,
  AboutScreen,
  ContactScreen,
  RateScreen,
  CustomDrawer,
} from '../screens';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default MainContainer = () => {
  const [token, setToken] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getToken() {
      let asyncToken = await AsyncStorage.getItem('token');
      if (asyncToken !== null) {
        setToken(asyncToken);
      } else {
        setToken('');
      }
      setLoading(false);
    }
    getToken();
  }, []);

  if (loading) {
    return <Loader />;
  } else {
    return (
      <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
        <Drawer.Screen
          name="Home"
          children={AppNavigator}
          options={{
            drawerIcon: ({color, size}) => <Icon name="house" color="#fff" />,
            header: props => (
              <Header leftIcon="left-arrow" navigation={navigation} />
            ),
          }}
        />
        <Drawer.Screen
          name="My Profile"
          component={EditProfileScreen}
          options={{
            drawerIcon: ({color, size}) => (
              <Icon name="user-fill" color="#fff" />
            ),
          }}
        />
        <Drawer.Screen
          name="My Orders"
          component={MyOrderScreen}
          options={{
            drawerIcon: ({color, size}) => (
              <Icon name="list-fill" color="#fff" />
            ),
            header: props => (
              <Header leftIcon="left-arrow" navigation={navigation} />
            ),
          }}
        />
        <Drawer.Screen
          name="My Wish List"
          component={MyOrderScreen}
          options={{
            drawerIcon: ({color, size}) => (
              <Icon name="wish-list-fill" color="#fff" />
            ),
            header: props => (
              <Header leftIcon="left-arrow" navigation={navigation} />
            ),
          }}
        />
        {/* <Drawer.Screen
          name="About"
          component={AboutScreen}
          options={{drawerIcon: ({color, size}) => <Icon name="user" />}}
        />
        <Drawer.Screen
          name="Contact"
          component={ContactScreen}
          options={{
            drawerIcon: ({color, size}) => <Icon name="user" />,
          }}
        /> */}
        <Drawer.Screen
          name="Rate Us"
          component={RateScreen}
          options={{
            drawerIcon: ({color, size}) => (
              <Icon name="rate-fill" color="#fff" />
            ),
          }}
        />
        <Drawer.Screen
          name="Feedback"
          component={RateScreen}
          options={{
            drawerIcon: ({color, size}) => (
              <Icon name="comment-fill" color="#fff" />
            ),
          }}
        />
      </Drawer.Navigator>
    );
  }
};

{
  /* <Stack.Navigator
headerMode="none"
initialRouteName={token !== '' ? AppRoute.AUTH : AppRoute.APP}>
<Stack.Screen name={AppRoute.AUTH} component={AuthNavigator} />
<Stack.Screen name={AppRoute.APP} component={AppNavigator} />
</Stack.Navigator> */
}

{
  /* initialRouteName={token !== '' ? AppRoute.APP : AppRoute.AUTH}> */
}
