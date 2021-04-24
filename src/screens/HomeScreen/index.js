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
        leftIcon="menu"
        // leftText="Hello"
        // onLeftPress={() => navigation.openDrawer()}
        headerBackground="#39abee"
        // statusBarBackground="#39abee"
        rightIcon="close"
        // rightIconBg="#3f51b5"
        // rightText="skip"
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
