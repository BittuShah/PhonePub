import React from 'react';
import {StyleSheet} from 'react-native';
// import theme from '../../theme';
import {StyleContainer, StyleInput} from './style';
import Icon from './../Icon/index';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export const IconInput = ({
  placeHolder,
  keyboardType,
  secureTextEntry = false,
  onPress,
  backgroundColor,
  iconName,
  multiline = false,
  numberOfLines,
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
      <KeyboardAwareScrollView>
        <StyleInput
          placeholder={placeHolder}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          multiline={multiline}
          numberOfLines={numberOfLines}
          placeholderTextColor="#abaeb0"></StyleInput>
      </KeyboardAwareScrollView>
    </StyleContainer>
  );
};

const styles = StyleSheet.create({
  inputIcon: {
    height: 100,
    width: 100,
    resizeMode: 'stretch',
    alignItems: 'center',
    // textAlignVertical
  },
});
