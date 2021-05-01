import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
// import theme from '../../theme';
import {StyleContainer, StyleInput, StyleSelectContainer} from './style';
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
  select,
  onChangeText,
  value,
  marginBottom,
}) => {
  return (
    <>
      {!select ? (
        <StyleContainer marginBottom={marginBottom}>
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
              placeholderTextColor="#abaeb0"
              onChangeText={onChangeText}
              value={value}
            />
          </KeyboardAwareScrollView>
        </StyleContainer>
      ) : (
        <StyleSelectContainer onPress={onPress} marginBottom={marginBottom}>
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
              placeholderTextColor="#abaeb0"
              editable={false}
              value={value}
            />
          </KeyboardAwareScrollView>
        </StyleSelectContainer>
      )}
    </>
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
