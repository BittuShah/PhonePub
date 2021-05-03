import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useRef} from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import NavigationService from './lib/navigationService';
import MainContainer from './navigation';
import FlashMessage from 'react-native-flash-message';

import store from './store';
import theme from './theme';

const App = () => {
  const navigationRef = useRef(null);

  useEffect(() => {
    NavigationService.setTopLevelNavigator(navigationRef.current);
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <MainContainer />
        <FlashMessage
          position="bottom"
          titleStyle={{
            color: '#fff',
            margin: 0,
            fontFamily: theme.fontFamily.bold,
            fontSize: 15,
          }}
          style={{height: 50}}
        />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
