import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {CustomText, Divider, Icon} from '../../components/';
import {StyleDrawerHeaderView, StyleLeftView, StyleRightView} from './style';

const CustomDrawer = props => {
  return (
    <DrawerContentScrollView {...props}>
      {/* DRAWER HEADER */}
      <StyleDrawerHeaderView>
        <StyleLeftView>
          <Icon name="dropdown" />
        </StyleLeftView>
        <StyleRightView>
          <CustomText bold>Good Morning</CustomText>
          <CustomText>John Doe</CustomText>
        </StyleRightView>
      </StyleDrawerHeaderView>
      <Divider />
      {/* DRAWER ITEMS */}
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
