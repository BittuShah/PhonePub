import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import theme from '../../theme';
import {
  Button,
  IconInput,
  Link,
  Header,
  BodyTitle,
  CustomText,
} from '../../components';
import {
  showToast,
  validateEmail,
  validatePassword,
  validatePhone,
} from '../../lib/helper';
const {height} = Dimensions.get('window');

const LoginScreen = () => {
  const [phoneOrEmail, setPhoneOrEmail] = useState('');
  const [password, setPassword] = useState('');

  const signInHandler = () => {
    if (!phoneOrEmail) {
      showToast('Please enter phone or email');
    } else if (!validateEmail(phoneOrEmail) && !validatePhone(phoneOrEmail)) {
      showToast('Please enter valid phone or email');
    } else if (!password) {
      showToast('Please enter password');
    } else if (!validatePassword(password)) {
      showToast('Password must be greater than 6 characters');
    } else {
      showToast('Logged in successfully', 'success');
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
        primaryText="Sign in"
        headerBackground={theme.colors.PRIMARY_BLUE}
      />
      <View style={styles.whiteView}>
        <ScrollView
          style={{
            paddingHorizontal: 20,
          }}>
          {/* <Text style={styles.title}>Welcome back</Text> */}
          <BodyTitle title="Welcome back" />
          <CustomText
            text="Enter your login credentials"
            style={styles.subTitle}
          />
          {/* <Text style={styles.subTitle}>Enter your login credentials</Text> */}

          <View style={styles.inputContainer}>
            <IconInput
              iconName="user-fill"
              placeHolder="Phone or Email*"
              onChangeText={text => setPhoneOrEmail(text)}
            />

            <IconInput
              iconName="padlock"
              placeHolder="Password*"
              secureTextEntry
              onChangeText={text => setPassword(text)}
            />
          </View>
          <Button
            title="Sign in"
            fontFamily={theme.fontFamily.bold}
            color="#fff"
            onPress={() => signInHandler()}
          />
          <View style={styles.link}>
            <Link text="Forgot your password?" />
          </View>

          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 30}}>
            <View
              style={{flex: 1, height: 1, backgroundColor: theme.colors.GOLDEN}}
            />
            <View>
              <Text
                style={{
                  width: 40,
                  textAlign: 'center',
                  color: theme.colors.GOLDEN,
                  fontFamily: theme.fontFamily.bold,
                }}>
                or
              </Text>
            </View>
            <View
              style={{flex: 1, height: 1, backgroundColor: theme.colors.GOLDEN}}
            />
          </View>
          <TouchableOpacity style={styles.borderButton}>
            <Text style={{color: '#7d7e80', fontFamily: theme.fontFamily.bold}}>
              Create an account
            </Text>
          </TouchableOpacity>
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

export default LoginScreen;
