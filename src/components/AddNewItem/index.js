import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {CustomText, Icon} from '..';
import theme from '../../theme';

const AddNewItem = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.mainView} onPress={onPress}>
      <Icon name="add" color={theme.colors.GOLDEN} height="15" width="15" />
      <CustomText
        text={title}
        style={styles.text}
        fontSize={theme.fontSize.MEDIUM}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: theme.colors.WHITE,
    borderRadius: 15,
    elevation: 2,
    flexDirection: 'row',
    paddingHorizontal: 25,
    height: 50,
    alignItems: 'center',
  },
  text: {
    marginLeft: 25,
  },
});

export default AddNewItem;
