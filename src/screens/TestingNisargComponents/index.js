import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import theme from '../../theme';

const TestingNisargComponents = () => {
  return (
    <View
      style={{
        backgroundColor: theme.colors.skyBlue,
        flex: 1,
        paddingHorizontal: 30,
        paddingVertical: 30,
      }}>
      <View style={styles.whiteView}>
        <TextInput style={styles.textInput} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  whiteView: {
    height: 40,
    width: '100%',
    borderRadius: 10,
    backgroundColor: theme.colors.WHITE,
  },
  textInput: {
    paddingHorizontal: 10,
    color: theme.colors.black,
  },
});

export default TestingNisargComponents;
