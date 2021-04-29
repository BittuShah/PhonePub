import React from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import {CustomText, Icon} from '..';
import theme from '../../theme';

const Quantity = ({quantity}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Icon
          name={quantity > 1 ? 'remove' : 'trash-can'}
          height="15"
          width="15"
          color={quantity > 1 && theme.colors.GOLDEN}
        />
      </TouchableOpacity>
      {/* <Icon name="remove" height="18" width="18" color={theme.colors.GOLDEN} /> */}
      <CustomText
        text={quantity}
        fontFamily={theme.fontFamily.medium}
        // color={theme.colors.BLUE}
        // fontSize="28"
        style={{height: 20}}
      />
      {/* <Text style={{borderWidth: 1}}>H</Text> */}
      <TouchableOpacity>
        <Icon name="add" height="15" width="15" color={theme.colors.GOLDEN} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 35,
    width: 110,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderWidth: 1,
    // borderColor: '#f5f5f5',
    // ALIContent: 'center',
    borderColor: '#dbdcdd',
    paddingHorizontal: 5,
    paddingVertical: 15,
    borderRadius: 50,
  },
});

export default Quantity;
