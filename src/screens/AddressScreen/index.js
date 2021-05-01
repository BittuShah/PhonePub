import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';
import Modal from 'react-native-modal';
import theme from '../../theme';
import {Button, IconInput, Link, Header} from '../../components';
const {height} = Dimensions.get('window');
import {states} from '../../lib/dummyData';

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
          <View style={styles.inputContainer}>
            <IconInput iconName="user-fill" placeHolder="Name" />

            <IconInput
              iconName="home"
              multiline={true}
              numberOfLines={4}
              placeHolder="Address"
            />

            <IconInput iconName="city" placeHolder="City" />

            <IconInput
              iconName="pincode"
              placeHolder="Pincode"
              keyboardType="numeric"
            />

            <IconInput iconName="state" placeHolder="State" />

            <IconInput iconName="world" placeHolder="Country"></IconInput>
          </View>
          <Button title="Save Address" fontFamily={theme.fontFamily.bold} />
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
    // paddingHorizontal: 20,
    height: height - 150,
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
