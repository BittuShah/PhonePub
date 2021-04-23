import React from 'react';
import {StyleSheet} from 'react-native';
// import theme from '../../theme';
import {StyleContainer, StyleInput} from './style';
import Icon from './../Icon/index';

export const IconInput = ({
  placeHolder,
  onPress,
  backgroundColor,
  iconName,
}) => {
  return (
    <StyleContainer>
      <Icon
        name={iconName}
        style={styles.inputIcon}
        height="17"
        width="17"
        color="#393939"
      />
      <StyleInput
        placeholder={placeHolder}
        placeholderTextColor="#abaeb0"></StyleInput>
    </StyleContainer>
  );
};

const styles = StyleSheet.create({
  inputIcon: {
    height: 100,
    width: 100,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
});
