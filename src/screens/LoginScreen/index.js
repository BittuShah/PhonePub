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

const LoginScreen = () => {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: 'red',
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
          <Text style={styles.title}>Log In</Text>
          <View style={styles.inputContainer}>
            <IconInput iconName="user-fill" placeHolder="User Name"></IconInput>
            <IconInput iconName="padlock" placeHolder="Password"></IconInput>
          </View>
          <Button title="Log In" isBold={true} />
          <Text style={styles.bottomText}>Or</Text>
          <Text style={styles.bottomText}>
            <Link text="Create New Account" />
          </Text>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    // height: '100%',
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
    width: '95%',
    borderRadius: 20,
    backgroundColor: theme.colors.WHITE,
    paddingVertical: 5,
    paddingBottom: 30,
    paddingHorizontal: 15,
    marginHorizontal: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
  },
  inputContainer: {
    marginVertical: 10,
  },
  bottomText: {
    flex: 1,
    fontSize: 15,
    marginTop: 10,
    alignSelf: 'center',
  },
});

export default LoginScreen;
