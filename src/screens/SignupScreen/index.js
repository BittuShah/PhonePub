import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';
import theme from '../../theme';
import {Button, IconInput, Link} from '../../components';

const SignupScreen = () => {
  return (
    <ScrollView
      style={{
        // backgroundColor: theme.colors.TRY,
        flex: 1,
        // paddingHorizontal: 20,
        // paddingVertical: 30,
      }}>
      <ImageBackground
        source={require('../../assets/gradient-bg.png')}
        style={styles.backgroundImage}>
        <View
          style={{
            alignItems: 'center',
          }}>
          <Image
            style={styles.logo}
            source={require('./../../assets/logocrop.png')}
          />
        </View>
        <View style={styles.whiteView}>
          <Text style={styles.title}>Registration</Text>
          <Text style={styles.subTitle}>Fill your account details</Text>
          <View style={styles.inputContainer}>
            <IconInput iconName="id-card-fill" placeHolder="Name" />

            <IconInput iconName="user-fill" placeHolder="User Name"></IconInput>
            <IconInput iconName="email-fill" placeHolder="Email"></IconInput>

            <IconInput
              iconName="password-key"
              placeHolder="Password"></IconInput>

            <IconInput iconName="phone" placeHolder="Phone"></IconInput>
          </View>
          <Button title="Sign Up" isBold={true} />
          <View style={styles.bottomTextView}>
            <Text style={styles.bottomText}>Already have an account?</Text>
            <Link text="Sign In" />
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover', // or 'stretch'
  },
  logo: {
    height: 100,
    width: 100,
    marginTop: 30,
    marginBottom: 40,
  },
  whiteView: {
    width: '100%',
    height: '80%',
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    backgroundColor: theme.colors.WHITE,
    paddingTop: 20,
    paddingBottom: 15,
    paddingHorizontal: 20,
    // marginHorizontal: 10,
    // marginBottom: 20,
  },
  title: {
    fontSize: 28,
    color: theme.colors.black,
  },
  subTitle: {
    color: theme.colors.GREY,
    fontWeight: 'bold',
    marginTop: 4,
    marginBottom: 10,
  },
  inputContainer: {
    marginTop: 20,
    marginVertical: 10,
  },
  bottomText: {
    // flex: 1,
    fontSize: 15,
    marginRight: 5,
    // paddingHorizontal: 20,
  },
  link: {
    color: theme.colors.skyBlue,
    fontWeight: 'bold',
    fontSize: 17,
  },
  bottomTextView: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// inputView: {
//   flexDirection: 'row',
//   justifyContent: 'center',
//   alignItems: 'center',
//   borderRadius: 17,
//   paddingHorizontal: 5,
//   backgroundColor: theme.colors.BLACK,
// },
// inputIcon: {
//   height: 100,
//   width: 100,
//   resizeMode: 'stretch',
//   alignItems: 'center',
// },
// textInput: {
//   flex: 1,
//   marginLeft: 2,
//   borderRadius: 17,
//   fontSize: 15,
//   backgroundColor: theme.colors.GREY4,
//   color: theme.colors.black,
// },

export default SignupScreen;
