import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';
import Modal from 'react-native-modal';
import theme from '../../theme';
import {
  Button,
  IconInput,
  Link,
  Header,
  BodyTitle,
  SearchSelect,
} from '../../components';
import {states} from '../../lib/dummyData';

const {height} = Dimensions.get('window');

const AddressScreen = ({isEdit}) => {
  const [stateModalOpen, setStateModalOpen] = useState(false);
  const [selectedState, setSelectedState] = useState({});
  const [cityModalOpen, setCityModalOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState({});

  const onStateSelect = state => {
    setSelectedState(state);
  };
  const onCitySelect = city => {
    setSelectedCity(city);
  };

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
        <ScrollView
          style={{
            paddingHorizontal: 20,
          }}>
          <BodyTitle title="Delivery Address" />
          <View style={styles.inputContainer}>
            <IconInput iconName="user-fill" placeHolder="Name" />

            <IconInput
              iconName="home"
              multiline={true}
              numberOfLines={4}
              placeHolder="Address"
            />

            <IconInput
              iconName="state"
              placeHolder="State"
              select
              value={selectedState?.name}
              onPress={() => setStateModalOpen(true)}
            />
            <IconInput
              iconName="city"
              placeHolder="City"
              select
              onPress={() => setCityModalOpen(true)}
            />
            <IconInput
              iconName="pincode"
              placeHolder="Pincode"
              keyboardType="numeric"
            />
            {/* <IconInput iconName="world" placeHolder="Country"></IconInput> */}
          </View>
          <Button
            title="Save Address"
            fontFamily={theme.fontFamily.bold}
            color="#fff"
          />
        </ScrollView>
      </View>
      <SearchSelect
        open={stateModalOpen}
        close={setStateModalOpen}
        data={states}
        headerText="Select state"
        onSelect={onStateSelect}
        selectedValue={selectedState}
      />
      <SearchSelect
        open={cityModalOpen}
        close={setCityModalOpen}
        data={states}
        headerText="Select city"
        onSelect={onCitySelect}
        selectedValue={selectedCity}
      />
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
    height: height - 90,
    marginTop: 40,
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
