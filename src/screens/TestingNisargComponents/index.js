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

const TestingNisargComponents = ({route, navigation}) => {
  return (
    <View style={styles.whiteView}>
      <Header leftIcon="menu" onLeftPress={() => navigation.openDrawer()} />
      <Text
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 18,
          fontFamily: theme.fontFamily.regular,
        }}>
        Hello world
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  whiteView: {
    flex: 1,
    // backgroundColor: 'red',
    // paddingVertical: 50,
    // paddingHorizontal: 50,
  },
});

export default TestingNisargComponents;
