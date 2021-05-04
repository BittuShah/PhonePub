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
import {showToast, validateEmail, validatePhone} from '../../lib/helper';
const {height} = Dimensions.get('window');

const ForgotPasswordScreen = () => {
  const [phoneOrEmail, setPhoneOrEmail] = useState('');

  const onSendOtp = () => {
    if (!phoneOrEmail) {
      showToast('Please enter email address or phone number');
    } else if (!validateEmail(phoneOrEmail) && !validatePhone(phoneOrEmail)) {
      showToast('Please enter valid phone or email');
    } else {
      showToast('Otp sent', 'success');
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
        // primaryText="Sign Up"
        leftIcon="close"
        headerBackground={theme.colors.PRIMARY_BLUE}
      />
      <View style={styles.whiteView}>
        <ScrollView style={{paddingHorizontal: 20}}>
          {/* <Text style={styles.title}>Forgot Password?</Text> */}
          <BodyTitle title="Forgot Password?" />
          {/* <Text style={styles.subTitle}>
            Enter your phone number and get the OTP to reset your password
          </Text> */}
          <CustomText
            text="Enter your registered email address or phone number to get the OTP"
            style={styles.subTitle}
          />

          <View style={styles.inputContainer}>
            <IconInput
              iconName="email-phone"
              placeHolder="Email or phone*"
              onChangeText={text => setPhoneOrEmail(text)}
              // maskValue="+91 [0000000000]"
            />
          </View>
          <Button
            title="Send OTP"
            fontFamily={theme.fontFamily.bold}
            color="#fff"
            onPress={() => onSendOtp()}
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
