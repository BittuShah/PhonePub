import React from 'react';
import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';
import theme from '../../theme';
import {
  Button,
  IconInput,
  Link,
  Header,
  BodyTitle,
  CustomText,
} from '../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
const {height} = Dimensions.get('window');

const SignupScreen = () => {
  return (
    <View
      style={{
        backgroundColor: theme.colors.PRIMARY_BLUE,
        flex: 1,
        paddingVertical: 10,
      }}>
      <Header
        primaryText="Sign up"
        headerBackground={theme.colors.PRIMARY_BLUE}
      />

      <View style={styles.whiteView}>
        <KeyboardAwareScrollView>
          <ScrollView style={{paddingHorizontal: 20}}>
            {/* <Text style={styles.title}>Registration</Text> */}
            <BodyTitle title="Registration" />
            <CustomText
              style={styles.subTitle}
              text="Fill your account details"
            />
            {/* <Text style={styles.subTitle}>Fill your account details</Text> */}
            <View style={styles.inputContainer}>
              {/* <IconInput iconName="id-card-fill" placeHolder="Name" /> */}

              <IconInput iconName="user-fill" placeHolder="Name*" />
              <IconInput
                iconName="email-fill"
                placeHolder="Email*"
                keyboardType="email-address"
              />

              <IconInput
                iconName="password-key"
                placeHolder="Password*"
                secureTextEntry
                // keyboardType="visible-password"
              />

              <IconInput
                iconName="call"
                placeHolder="Phone"
                maskValue="+91 [0000000000]"
                keyboardType="number-pad"
              />
            </View>
            <Button
              title="Register"
              fontFamily={theme.fontFamily.bold}
              color="#fff"
            />
            <View style={styles.bottomTextView}>
              <Text style={styles.bottomText}>Already have an account?</Text>
              <Link text="Sign In" />
            </View>
          </ScrollView>
        </KeyboardAwareScrollView>
      </View>
      {/* </View> */}
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
    marginTop: 20,
    marginVertical: 10,
  },
  bottomText: {
    fontSize: 15,
    marginRight: 5,
    fontFamily: theme.fontFamily.medium,
  },
  bottomTextView: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SignupScreen;
