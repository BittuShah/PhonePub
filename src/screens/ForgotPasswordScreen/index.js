import React from 'react';
import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';
import theme from '../../theme';
import {Button, IconInput, Header} from '../../components';
const {height} = Dimensions.get('window');

const ForgotPasswordScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.PRIMARY_BLUE,
        paddingVertical: 10,
        height: 100,
      }}>
      <Header
        // primaryText="Sign Up"
        leftIcon="close"
        headerBackground={theme.colors.PRIMARY_BLUE}
      />
      <View style={styles.whiteView}>
        <ScrollView style={{paddingHorizontal: 20}}>
          <Text style={styles.title}>Forgot Password?</Text>
          <Text style={styles.subTitle}>
            Enter your phone number and get the OTP to reset your password
          </Text>

          <View style={styles.inputContainer}>
            <IconInput
              iconName="call"
              placeHolder="Phone"
              keyboardType="numeric"></IconInput>
          </View>
          <Button title="Send OTP" isBold={true} />
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
    paddingBottom: 40,
    height: height - 100,

    // paddingHorizontal: 20,
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

export default ForgotPasswordScreen;
