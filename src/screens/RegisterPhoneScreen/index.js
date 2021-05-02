import React from 'react';
import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';
import theme from '../../theme';
import {
  Button,
  IconInput,
  Header,
  BodyTitle,
  CustomText,
} from '../../components';
const {height} = Dimensions.get('window');

const RegisterPhoneScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.PRIMARY_BLUE,
      }}>
      <Header
        leftIcon="left-arrow"
        rightText="Skip"
        rightTextColor={theme.colors.WHITE}
        headerBackground={theme.colors.PRIMARY_BLUE}
      />
      <View style={styles.whiteView}>
        <ScrollView style={{paddingHorizontal: 20}}>
          {/* <Text style={styles.title}>Register phone</Text> */}
          <BodyTitle title="Register phone" />
          {/* <Text style={styles.subTitle}>Enter your mobile number</Text> */}
          <CustomText text="Enter your mobile number" style={styles.subTitle} />

          <View style={styles.inputContainer}>
            <IconInput
              iconName="call"
              placeHolder="Phone*"
              maskValue="+91 [0000000000]"
              keyboardType="number-pad"
            />
          </View>
          <Button
            title="Continue"
            fontFamily={theme.fontFamily.bold}
            color="#fff"
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
