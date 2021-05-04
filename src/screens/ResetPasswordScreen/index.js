import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';
import theme from '../../theme';
import {
  Button,
  IconInput,
  Header,
  BodyTitle,
  CustomText,
} from '../../components';
import {showToast, validatePassword} from '../../lib/helper';
const {height} = Dimensions.get('window');

const ResetPasswordScreen = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onSavePasswordHandler = () => {
    if (!newPassword) {
      showToast('Please enter new password');
    } else if (!validatePassword(newPassword)) {
      showToast('Password must be greater than 6 characters');
    } else if (!confirmPassword) {
      showToast('Please enter confirm password');
    } else if (!validatePassword(confirmPassword)) {
      showToast('Password must be greater than 6 characters');
    } else {
      showToast('Password changed', 'success');
    }
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.PRIMARY_BLUE,
        paddingVertical: 10,
        height: 100,
      }}>
      <Header
        leftIcon="close"
        // primaryText="Sign Up"
        headerBackground={theme.colors.PRIMARY_BLUE}
      />
      <View style={styles.whiteView}>
        <ScrollView style={{paddingHorizontal: 20}}>
          {/* <Text style={styles.title}>Reset Password</Text> */}
          <BodyTitle title="Reset password" />
          {/* <Text style={styles.subTitle}>Enter new password</Text> */}
          <CustomText style={styles.subTitle} text="Enter new password" />

          <View style={styles.inputContainer}>
            <IconInput
              iconName="padlock"
              placeHolder="New Password*"
              secureTextEntry
              onChangeText={text => setNewPassword(text)}
            />
            <IconInput
              iconName="padlock"
              placeHolder="Confirm Password*"
              secureTextEntry
              onChangeText={text => setConfirmPassword(text)}
            />
          </View>
          <Button
            title="Save Password"
            fontFamily={theme.fontFamily.bold}
            color="#fff"
            onPress={() => onSavePasswordHandler()}
          />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  whiteView: {
    width: '100%',
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    backgroundColor: theme.colors.WHITE,
    paddingTop: 20,
    paddingBottom: 30,
    // paddingHorizontal: 20,
    height: height - 100,

    marginTop: 40,
  },
  title: {
    fontSize: 28,
    fontFamily: theme.fontFamily.bold,
    color: theme.colors.TITLE,
  },
  subTitle: {
    color: theme.colors.SUB_TITLE,
    fontFamily: theme.fontFamily.bold,
    marginTop: 4,
    marginBottom: 10,
  },
  inputContainer: {
    marginTop: 10,
    marginBottom: 15,
  },
  bottomText: {
    fontSize: 15,
    fontFamily: theme.fontFamily.bold,
    marginTop: 10,
    alignSelf: 'center',
  },
  link: {
    marginTop: 10,
    alignSelf: 'center',
  },
  borderButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 17,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#c5c5c5',
    marginTop: 20,
    marginBottom: 25,
    height: 55,
  },
});

export default ResetPasswordScreen;
