import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import theme from '../../theme';
import {Button, IconInput, Link, Header} from '../../components';
const {height} = Dimensions.get('window');

const LoginScreen = () => {
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
          <Text style={styles.title}>Welcome back</Text>
          <Text style={styles.subTitle}>Enter your credential login</Text>

          <View style={styles.inputContainer}>
            <IconInput
              iconName="user-fill"
              placeHolder="Phone or Email"></IconInput>

            <IconInput
              iconName="padlock"
              placeHolder="Password"
              secureTextEntry></IconInput>
          </View>
          <Button title="Sign in" fontFamily={theme.fontFamily.bold} />
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
