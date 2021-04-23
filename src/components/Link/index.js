import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import theme from '../../theme';

const Link = ({text}) => {
  return (
    <TouchableOpacity style={styles.viewStyle}>
      <Text style={styles.link}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  viewStyle: {},
  link: {
    color: theme.colors.skyBlue,
    fontWeight: 'bold',
    fontSize: 17,
  },
});

export {Link};
