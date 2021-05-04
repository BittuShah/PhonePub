import React, {useState} from 'react';
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
import {showToast, validateEmail, validatePassword} from '../../lib/helper';
const {height} = Dimensions.get('window');

const SignupScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const onRegister = () => {
    if (!name) {
      showToast('Please enter name');
    } else if (!email) {
      showToast('Please enter email');
    } else if (!validateEmail(email)) {
      showToast('Please enter valid email');
    } else if (!password) {
      showToast('Please enter password');
    } else if (!validatePassword(password)) {
      showToast('Password must be greater than 6 characters');
    } else {
      showToast('You are registered successfully', 'success');
    }
  };

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

              <IconInput
                iconName="user-fill"
                placeHolder="Name*"
                onChangeText={text => setName(text)}
              />
              <IconInput
                iconName="email-fill"
                placeHolder="Email*"
                keyboardType="email-address"
                onChangeText={text => setEmail(text)}
              />

              <IconInput
                iconName="password-key"
                placeHolder="Password*"
                secureTextEntry
                onChangeText={text => setPassword(text)}
                // keyboardType="visible-password"
              />

              <IconInput
                iconName="call"
                placeHolder="Phone"
                maskValue="+91 [0000000000]"
                keyboardType="number-pad"
                onChangeText={(formated, extracted) => setPhone(extracted)}
              />
            </View>
            <Button
              title="Register"
              fontFamily={theme.fontFamily.bold}
              onPress={() => onRegister()}
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
