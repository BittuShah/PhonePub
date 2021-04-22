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
      <Drawer.Navigator
        drawerStyle={{
          backgroundColor: '#fff',
        }}
        drawerContent={props => <CustomDrawer {...props} />}>
        <Drawer.Screen
          name="Home"
          children={AppNavigator}
          options={{
            drawerIcon: ({color, size}) => <Icon name="user" />,
            header: props => (
              <Header leftIcon="left-arrow" navigation={navigation} />
            ),
          }}
        />
        <Drawer.Screen
          name="My Order"
          component={MyOrderScreen}
          options={{
            drawerIcon: ({color, size}) => <Icon name="user" />,
            header: props => (
              <Header leftIcon="left-arrow" navigation={navigation} />
            ),
          }}
        />
        <Drawer.Screen
          name="Edit Profile"
          component={EditProfileScreen}
          options={{drawerIcon: ({color, size}) => <Icon name="user" />}}
        />
        <Drawer.Screen
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
        />
        <Drawer.Screen
          name="Rate"
          component={RateScreen}
          options={{
            drawerIcon: ({color, size}) => <Icon name="user" />,
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
