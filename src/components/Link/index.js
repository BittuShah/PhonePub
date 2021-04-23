import React from 'react';
import {StyleSheet, Text} from 'react-native';
import theme from '../../theme';

const Link = ({text}) => {
  return <Text style={styles.link}>{text}</Text>;
};

const styles = StyleSheet.create({
  link: {
    color: theme.colors.skyBlue,
    fontWeight: 'bold',
    fontSize: 17,
  },
});

export {Link};
