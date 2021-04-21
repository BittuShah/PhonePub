import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useRef} from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import NavigationService from './lib/navigationService';
import MainContainer from './navigation';

import store from './store';

const App = () => {
  const navigationRef = useRef(null);

  useEffect(() => {
    NavigationService.setTopLevelNavigator(navigationRef.current);
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <MainContainer />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
