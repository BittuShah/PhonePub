import React from 'react';
import {View} from 'react-native';
import {CustomText} from '..';
import theme from '../../theme';

const BodyTitle = ({title}) => {
  return (
    <View>
      <CustomText
        text={title}
        color={theme.colors.BODY_TITLE}
        fontSize={25}
        fontFamily={theme.fontFamily.bold}
      />
    </View>
  );
};

export default BodyTitle;
