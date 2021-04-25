import React from 'react';
import {ScrollView, View, StyleSheet, TouchableOpacity} from 'react-native';
import {CustomText} from '..';
import theme from '../../theme';

const CategoriesListing = ({
  options,
  setSelectedCategory,
  selectedCategory,
}) => {
  return (
    <ScrollView
      style={{
        width: '100%',
      }}
      horizontal>
      <View
        style={{
          justifyContent: 'center',
          flexDirection: 'row',
          paddingVertical: 10,
        }}>
        {options.length > 0 &&
          options.map((chip, index) => {
            return (
              <TouchableOpacity
                style={[
                  styles.chipView,
                  {
                    backgroundColor:
                      selectedCategory === index
                        ? theme.colors.GOLDEN
                        : '#ebebeb',
                  },
                ]}
                key={index}
                onPress={() => setSelectedCategory(index)}>
                <CustomText
                  color={
                    selectedCategory === index ? theme.colors.WHITE : '#a0a1a3'
                  }
                  fontFamily={theme.fontFamily.bold}
                  text={chip}
                />
              </TouchableOpacity>
            );
          })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  chipView: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    backgroundColor: '#F6F6F7',
    // backgroundColor:"#fafbfb"
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
});

export default CategoriesListing;
