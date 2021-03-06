import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';

import theme from '../../theme';
import {
  Button,
  IconInput,
  Link,
  Header,
  BodyTitle,
  SearchSelect,
} from '../../components';
import {statesAndCities} from '../../lib/stateAndCities';
import {showToast} from '../../lib/helper';

const {height} = Dimensions.get('window');

const AddressScreen = ({isEdit}) => {
  const [cities, setCities] = useState([]);
  const [stateModalOpen, setStateModalOpen] = useState(false);
  const [selectedState, setSelectedState] = useState({});
  const [cityModalOpen, setCityModalOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState({});

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [pinCode, setPinCode] = useState('');

  const onStateSelect = state => {
    setCities(state.districts);
    setSelectedState(state);
  };

  const onCitySelect = city => {
    setSelectedCity(city);
  };

  const onSelectStatePress = () => {
    setStateModalOpen(true);
  };

  const onSelectCityPress = () => {
    if (selectedState?.name) {
      setCityModalOpen(true);
    } else {
      showToast('Please select state first');
    }
  };

  const onSaveAddress = () => {
    if (!name) {
      showToast('Please enter name');
    } else if (!address) {
      showToast('Please enter address');
    } else if (!selectedState?.name) {
      showToast('Please select state');
    } else if (!selectedCity?.name) {
      showToast('Please select city');
    } else if (!pinCode) {
      showToast('Please enter pincode');
    } else {
      showToast('Address Saved', 'success');
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
        primaryText={isEdit ? 'Edit Address' : 'Add Address'}
        leftIcon="left-arrow"
        headerBackground={theme.colors.PRIMARY_BLUE}
      />

      <View style={styles.whiteView}>
        <BodyTitle title="Delivery Address" />
        <ScrollView>
          <View style={styles.inputContainer}>
            <IconInput
              iconName="user-fill"
              placeHolder="Name"
              onChangeText={text => setName(text)}
            />

            <IconInput
              iconName="home"
              multiline={true}
              numberOfLines={4}
              placeHolder="Address"
              onChangeText={text => setAddress(text)}
            />

            <IconInput
              iconName="state"
              placeHolder="State"
              select
              value={selectedState?.name}
              onPress={() => onSelectStatePress()}
            />
            <IconInput
              iconName="city"
              placeHolder="City"
              select
              value={selectedCity?.name}
              onPress={() => onSelectCityPress()}
            />
            <IconInput
              iconName="pincode"
              placeHolder="Pincode"
              keyboardType="numeric"
              maskValue="[000000]"
              onChangeText={(formated, extracted) => setPinCode(extracted)}
            />
            {/* <IconInput iconName="world" placeHolder="Country"></IconInput> */}
          </View>
          <Button
            title="Save Address"
            fontFamily={theme.fontFamily.bold}
            color="#fff"
            onPress={() => onSaveAddress()}
          />
        </ScrollView>
      </View>
      <SearchSelect
        open={stateModalOpen}
        close={setStateModalOpen}
        data={statesAndCities}
        headerText="Select state"
        onSelect={onStateSelect}
        selectedValue={selectedState}
      />
      <SearchSelect
        open={cityModalOpen}
        close={setCityModalOpen}
        data={cities}
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
    paddingHorizontal: 20,
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
