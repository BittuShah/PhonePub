import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {
  Header,
  BodyTitle,
  AddNewItem,
  Button,
  CustomText,
  Icon,
} from '../../components';
import {
  StyleContentContainer,
  StyleMainContainer,
  StyleAddressCardsContainer,
  StyleBottomView,
  StyleAddressCard,
  StyleAddressHeader,
  StyleAddressBody,
} from './style';
import theme from '../../theme';
import {deliveryAddress} from '../../lib/dummyData';

const DeliveryAddressScreen = () => {
  const [activeAddressIndex, setActiveAddressIndex] = useState(0);

  const RenderAddressCard = ({address, index}) => {
    return (
      <StyleAddressCard
        style={{
          backgroundColor:
            activeAddressIndex === index
              ? theme.colors.GOLDEN
              : theme.colors.PRIMARY_BLUE,
        }}
        onPress={() => setActiveAddressIndex(index)}>
        <StyleAddressHeader>
          <CustomText
            text={address?.name}
            color={theme.colors.WHITE}
            fontSize={theme.fontSize.HEADING}
            fontFamily={theme.fontFamily.bold}
          />
          <TouchableOpacity>
            <CustomText
              text="Change"
              color="#205081"
              fontFamily={theme.fontFamily.bold}
              fontSize={theme.fontSize.MEDIUM}
            />
          </TouchableOpacity>
        </StyleAddressHeader>
        <StyleAddressBody>
          <CustomText
            fontSize={theme.fontSize.MEDIUM}
            color="#f8f8f8"
            style={{letterSpacing: 0.2}}
            text={address?.address}
          />
        </StyleAddressBody>
        {activeAddressIndex === index && (
          <View style={{alignItems: 'flex-end'}}>
            <Icon name="right-mark" color="#fff" />
          </View>
        )}
      </StyleAddressCard>
    );
  };

  return (
    <StyleMainContainer>
      <Header
        leftIcon="left-arrow"
        headerBackground={theme.colors.SCREEN_WHITE}
      />
      <StyleContentContainer>
        <BodyTitle title="Delivery addresses" />

        <StyleAddressCardsContainer>
          <FlatList
            data={deliveryAddress}
            key="_"
            showsVerticalScrollIndicator={false}
            scrollEnabled={true}
            keyExtractor={item => '_' + item.id}
            renderItem={({item, index}) => (
              <RenderAddressCard key={index} address={item} index={index} />
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
        </StyleAddressCardsContainer>
        <StyleBottomView>
          <AddNewItem title="Add another location" />

          <Button
            title="Continue"
            fontFamily={theme.fontFamily.bold}
            containerStyle={styles.button}
          />
        </StyleBottomView>
      </StyleContentContainer>
    </StyleMainContainer>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 30,
  },
});

export default DeliveryAddressScreen;
