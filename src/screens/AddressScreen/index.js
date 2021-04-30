import React from 'react';
import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';
import theme from '../../theme';
import {Button, IconInput, Link, Header} from '../../components';
const {height} = Dimensions.get('window');

const AddressScreen = ({isEdit}) => {
  return (
    <View
      style={{
        backgroundColor: theme.colors.PRIMARY_BLUE,
        flex: 1,
        paddingVertical: 10,
      }}>
      <Header
        primaryText={isEdit ? 'Edit Address' : 'Add Address'}
        leftIcon="left-arrow"
        headerBackground={theme.colors.PRIMARY_BLUE}
      />

      <View style={styles.whiteView}>
        <ScrollView style={{paddingHorizontal: 20}}>
          <Text style={styles.title}>Delivery Address</Text>
          {/* <Text style={styles.subTitle}>Fill your account details</Text> */}
          <View style={styles.inputContainer}>
            {/* <IconInput iconName="id-card-fill" placeHolder="Name" /> */}

            <IconInput iconName="user-fill" placeHolder="Name" />

            <IconInput
              iconName="user-fill"
              multiline={true}
              numberOfLines={4}
              placeHolder="Address"
            />
            <IconInput iconName="email-fill" placeHolder="City" />

            <IconInput iconName="password-key" placeHolder="State" />

            <IconInput iconName="password-key" placeHolder="Pincode" />

            {/* <IconInput iconName="call" placeHolder="Phone"></IconInput> */}
          </View>
          <Button title="Save Address" fontFamily={theme.fontFamily.bold} />
          {/* <View style={styles.bottomTextView}>
            <Text style={styles.bottomText}>Already have an account?</Text>
            <Link text="Sign In" />
          </View> */}
        </ScrollView>
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

export default AddressScreen;
