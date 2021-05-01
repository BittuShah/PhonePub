import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import Modal from 'react-native-modal';
import {CustomText, IconInput} from '..';

import theme from '../../theme';

const SearchSelect = props => {
  const [data, setData] = useState(props.data);

  const renderHeader = () => {
    return (
      <View style={styles.header}>
        <CustomText
          text={props.headerText}
          fontFamily={theme.fontFamily.bold}
        />
      </View>
    );
  };

  const renderSearch = () => {
    return (
      <View style={styles.headerSearchContainer}>
        <IconInput
          placeHolder="Search here..."
          iconName="search"
          onChangeText={handleSearch}
          marginBottom="5"
        />
      </View>
    );
  };

  const handleSearch = text => {
    let tempData = props.data.filter(
      item => item.name.toLowerCase().indexOf(text.toLowerCase()) !== -1,
    );
    setData(tempData);
  };

  const onSelect = data => {
    props.onSelect(data);
    setData(props.data);
    props.close(false);
  };

  return (
    <Modal
      isVisible={props.open}
      style={styles.modal}
      onBackdropPress={() => {
        props.close(false);
      }}>
      <View style={styles.modalBody}>{renderHeader()}</View>
      <View style={styles.mainBody}>
        {renderSearch()}
        <ScrollView keyboardShouldPersistTaps="always">
          {data.map(_ => {
            let isSelected = props?.selectedValue?.id === _.id;
            return (
              <TouchableOpacity
                key={_.id}
                activeOpacity={1}
                onPress={() => onSelect(_)}
                style={styles.dataRow}>
                <CustomText
                  text={_.name}
                  style={styles.dataText}
                  color={
                    isSelected ? theme.colors.PRIMARY_BLUE : theme.colors.black
                  }
                />
                {isSelected && (
                  <Image
                    source={require('../../assets/select.png')}
                    style={styles.selectImageIcon}
                  />
                )}
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  modalBody: {
    backgroundColor: theme.colors.WHITE,
    overflow: 'hidden',
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  header: {
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(0,0,0,0.2)',
  },

  mainBody: {
    justifyContent: 'center',
    height: 270,
    backgroundColor: theme.colors.WHITE,
  },
  dataRow: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.GREY5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  dataText: {flex: 1},
  selectImageIcon: {
    height: 10,
    width: 10,
    tintColor: theme.colors.PRIMARY_BLUE,
  },
});

export default SearchSelect;
