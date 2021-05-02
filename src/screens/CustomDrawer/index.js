import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {CustomText, Divider, Icon} from '../../components/';
import {StyleDrawerHeaderView, StyleLeftView, StyleRightView} from './style';
import theme from '../../theme';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {generateGreetings} from '../../lib/helper';

const CustomDrawer = props => {
  return (
    <DrawerContentScrollView {...props} style={styles.drawerMain}>
      {/* DRAWER HEADER */}
      <StyleDrawerHeaderView>
        <StyleLeftView>
          <Image
            source={require('../../assets/logocrop.png')}
            style={styles.logo}
          />
        </StyleLeftView>
        <StyleRightView>
          <CustomText text={generateGreetings()} color={theme.colors.WHITE} />
          <CustomText
            text="John Doe"
            color={theme.colors.WHITE}
            fontSize={16}
            style={{marginTop: 2, marginBottom: 10}}
          />
        </StyleRightView>
        <Divider />
      </StyleDrawerHeaderView>
      {/* DRAWER ITEMS */}
      <DrawerItemList
        {...props}
        itemStyle={{padding: 0, margin: 0}}
        labelStyle={{
          color: theme.colors.WHITE,
          fontFamily: theme.fontFamily.regular,
          fontSize: 16,
        }}
        activeBackgroundColor={theme.colors.skyBlue}
      />
      <TouchableOpacity
        style={{flexDirection: 'row', paddingTop: 15, paddingHorizontal: 20}}>
        <Icon name="logout-fill" color="#fff" />
        <CustomText
          text="Logout"
          color={theme.colors.WHITE}
          fontSize={16}
          style={{marginLeft: 30}}
        />
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerMain: {
    backgroundColor: theme.colors.PRIMARY_BLUE,
    paddingHorizontal: 25,
  },
  logo: {
    height: 40,
    width: 40,
  },
});

export default CustomDrawer;
