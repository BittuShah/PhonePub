import React from 'react';
import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';
import theme from '../../theme';
import {Button, IconInput, Header} from '../../components';
const {height} = Dimensions.get('window');

const RegisterPhoneScreen = () => {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: theme.colors.PRIMARY_BLUE,
      }}>
      <Header
        leftIcon="left-arrow"
        // primaryText="Sign Up"
        headerBackground={theme.colors.PRIMARY_BLUE}
      />
      <View style={styles.whiteView}>
        <Text style={styles.title}>Register phone</Text>
        <Text style={styles.subTitle}>Enter your mobile number</Text>

        <View style={styles.inputContainer}>
          <IconInput iconName="call" placeHolder="Phone" />
        </View>
        <Button title="Continue" fontFamily={theme.fontFamily.bold} />
      </View>
    </ScrollView>
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
    paddingHorizontal: 20,
    height: height - 130,
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

export default RegisterPhoneScreen;
