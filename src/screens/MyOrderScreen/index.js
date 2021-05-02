import React from 'react';
import {StyleContentContainer, StyleMainContainer} from './style';
import {BodyTitle, CustomText, Header, Icon} from '../../components';
import {FlatList, Image, StyleSheet, View, Dimensions} from 'react-native';
import theme from '../../theme';
import {products} from '../../lib/dummyData';
import {truncate} from '../../lib/helper';

import moment from 'moment';

const {height} = Dimensions.get('window');
const strLength = 28;

const MyOrderScreen = () => {
  const getBadge = status => {
    switch (status) {
      case 'success':
        return {
          iconName: 'check',
          background: theme.colors.GREEN_LIGHT,
          color: theme.colors.GREEN,
          orderText: 'Delivered',
        };
      case 'pending':
        return {
          iconName: 'clock',
          background: '#F7CB73',
          color: '#c5a25c',
          orderText: 'Placed',
        };
      case 'cancel':
        return {
          iconName: 'close',
          background: theme.colors.RED_LIGHT,
          color: theme.colors.RED,
          orderText: 'Canceled',
        };
      default:
        return {
          iconName: 'clock',
          background: '#F7CB73',
          color: '#c5a25c',
          orderText: 'Placed',
        };
    }
  };

  const RenderDelivery = ({delivery, index}) => {
    let statusObj = getBadge(delivery.status);
    return (
      <View style={styles.deliveryMain}>
        <View style={styles.iconTimeView}>
          <View
            style={[styles.iconView, {backgroundColor: statusObj.background}]}>
            <Icon
              name={statusObj.iconName}
              color={statusObj.color}
              height="20"
              width="20"
            />
          </View>
          <View style={styles.textView}>
            <CustomText
              text={`${statusObj.orderText} on `}
              color={theme.colors.GREY2}
              fontSize={15}
            />
            <CustomText
              text={moment(delivery.data).format('MMM DD, YYYY hh:mm A')}
              fontFamily={theme.fontFamily.bold}
              fontSize={15}
            />
          </View>
        </View>
        <View style={styles.cardView}>
          <View style={styles.productImageView}>
            <Image source={delivery.image} style={styles.productImage} />
          </View>
          <View style={styles.productContentView}>
            <View style={styles.productTitleView}>
              <CustomText
                text={
                  delivery?.name.length > strLength
                    ? truncate(delivery?.name, strLength)
                    : delivery?.name
                }
                color={theme.colors.WHITE}
                fontFamily={theme.fontFamily.bold}
                fontSize={16}
              />
            </View>
            <View style={styles.productBottomView}>
              <CustomText
                text={`Qty: ${delivery.quantity}`}
                color={theme.colors.WHITE}
                style={{marginRight: 10}}
              />
              <CustomText
                text={`Price: ₹${delivery.price.toFixed(2)}`}
                color={theme.colors.WHITE}
              />
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <StyleMainContainer>
      <Header leftIcon="left-arrow" headerBackground="transparent" />
      <StyleContentContainer>
        <BodyTitle title="My Orders" />
        <View style={styles.productsView}>
          <FlatList
            data={products}
            key="_"
            showsVerticalScrollIndicator={false}
            scrollEnabled={true}
            keyExtractor={item => '_' + item.id}
            renderItem={({item, index}) => (
              <RenderDelivery key={index} delivery={item} index={index} />
            )}
            numColumns={1}
            ListEmptyComponent={
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <CustomText text="No Records Found." />
              </View>
            }
          />
        </View>
      </StyleContentContainer>
    </StyleMainContainer>
  );
};

const styles = StyleSheet.create({
  productsView: {
    marginTop: 20,
    height: height - 145,
  },
  deliveryMain: {
    paddingVertical: 15,
  },
  iconTimeView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconView: {
    height: 35,
    width: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  textView: {
    flexDirection: 'row',
    paddingLeft: 20,
  },
  cardView: {
    height: 100,
    width: 250,
    borderRadius: 20,
    backgroundColor: theme.colors.PRIMARY_BLUE,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginTop: 20,
  },
  productImageView: {
    height: 60,
    width: 60,
    borderRadius: 20,
  },
  productImage: {
    height: '100%',
    width: '100%',
  },
  productContentView: {
    paddingLeft: 15,
  },
  productBottomView: {
    flexDirection: 'row',
    paddingTop: 10,
    maxWidth: 155,
  },
  productTitleView: {
    maxWidth: 155,
  },
});

export default MyOrderScreen;
