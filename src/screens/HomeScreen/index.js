import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Header, IconBg} from '../../components';
import theme from '../../theme';

const HomeScreen = ({route, navigation}) => {
  return (
    <View style={styles.whiteView}>
      <Header
        // statusBarBackground="#39abee"
        leftIcon="menu"
        // leftText="Hello"
        // leftIconColor="#000"
        onLeftPress={() => navigation.openDrawer()}
        headerBackground="#39abee"
        rightIcon="call"
        rightIconColor="#5e5ce6"
        // rightText="skip"
        rightIconBg="#fff"
        // leftTextColor="red"
        searchEnabled
        primaryText="The Header Screen"
        secondaryText="Hello world"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  whiteView: {
    flex: 1,
    backgroundColor: '#39abee',
    // paddingVertical: 50,
    // paddingHorizontal: 50,
  },
});

export default HomeScreen;
