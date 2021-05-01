import React, {useState} from 'react';
import {Image, ScrollView, StyleSheet, View, FlatList} from 'react-native';
import {
  AddNewItem,
  BodyTitle,
  Button,
  CustomText,
  Header,
} from '../../components';
import {savedCards} from '../../lib/dummyData';
import theme from '../../theme';

import {
  StyleMainContainer,
  StyleBodyContainer,
  StyleFooterContainer,
  StyleCard,
  StyleCardBottomContainer,
} from './style';

const PaymentScreen = () => {
  const [selectedCardId, setSelectedCardId] = useState('1');

  const getCardImage = type => {
    switch (type) {
      case 'Visa':
        return require('../../assets/visa.png');
      case 'Maestro':
        return require('../../assets/maestro.png');
      case 'Master':
        return require('../../assets/mastercard.png');
      default:
        return require('../../assets/debit.png');
    }
  };

  const RenderCard = ({card, index}) => {
    return (
      <StyleCard
        key={card.id}
        background={
          selectedCardId === card.id
            ? theme.colors.GOLDEN
            : theme.colors.PRIMARY_BLUE
        }
        onPress={() => setSelectedCardId(card.id)}>
        <CustomText
          text={`**** **** **** ${card.cardNum}`}
          fontFamily={theme.fontFamily.bold}
          fontSize={theme.fontSize.MEDIUM}
          color={theme.colors.WHITE}
        />
        <StyleCardBottomContainer>
          <CustomText
            text={card.cardExpiry}
            fontFamily={theme.fontFamily.bold}
            fontSize={theme.fontSize.MEDIUM}
            color={theme.colors.WHITE}
          />
          <Image
            source={getCardImage(card.cardType)}
            style={styles.cardTypeImage}
          />
        </StyleCardBottomContainer>
      </StyleCard>
    );
  };

  return (
    <StyleMainContainer>
      <Header leftIcon="left-arrow" headerBackground="transparent" />
      <StyleBodyContainer>
        <BodyTitle title="Payment" />
        {/* <ScrollView style={styles.cardsContainer} horizontal>
          {savedCards.map(card => {
            return (
              <StyleCard
                key={card.id}
                background={
                  selectedCardId === card.id
                    ? theme.colors.GOLDEN
                    : theme.colors.PRIMARY_BLUE
                }
                onPress={() => setSelectedCardId(card.id)}>
                <CustomText
                  text={`**** **** **** ${card.cardNum}`}
                  fontFamily={theme.fontFamily.bold}
                  fontSize={theme.fontSize.MEDIUM}
                  color={theme.colors.WHITE}
                />
                <StyleCardBottomContainer>
                  <CustomText
                    text={card.cardExpiry}
                    fontFamily={theme.fontFamily.bold}
                    fontSize={theme.fontSize.MEDIUM}
                    color={theme.colors.WHITE}
                  />
                  <Image
                    source={getCardImage(card.cardType)}
                    style={styles.cardTypeImage}
                  />
                </StyleCardBottomContainer>
              </StyleCard>
            );
          })}
        </ScrollView> */}
        <View style={styles.cardsContainer}>
          <FlatList
            horizontal
            data={savedCards}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => (
              <RenderCard key={index} card={item} index={index} />
            )}
            ListEmptyComponent={
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <CustomText text="No Cards Found." />
              </View>
            }
          />
        </View>

        <AddNewItem title="Add new card" />
      </StyleBodyContainer>
      <StyleFooterContainer style={styles.footerContainer}>
        <View style={styles.subtotalContainer}>
          <CustomText
            text="Subtotal"
            color={theme.colors.WHITE}
            fontSize={theme.fontSize.MEDIUM}
          />
          <CustomText
            text="₹100.00"
            color={theme.colors.WHITE}
            fontSize={theme.fontSize.MEDIUM}
          />
        </View>
        <View style={styles.subtotalContainer}>
          <CustomText
            text="Delivery Fee"
            color={theme.colors.WHITE}
            fontSize={theme.fontSize.MEDIUM}
          />
          <CustomText
            text="₹50.00"
            color={theme.colors.WHITE}
            fontSize={theme.fontSize.MEDIUM}
          />
        </View>
        <View style={styles.totalContainer}>
          <CustomText
            text="Total"
            color={theme.colors.WHITE}
            fontSize={theme.fontSize.HEADING}
            fontFamily={theme.fontFamily.bold}
          />
          <CustomText
            text="₹150.00"
            color={theme.colors.WHITE}
            fontSize={theme.fontSize.HEADING}
            fontFamily={theme.fontFamily.bold}
          />
        </View>
        <Button
          title="Continue"
          backgroundColor={theme.colors.WHITE}
          color={theme.colors.PRIMARY_BLUE}
        />
      </StyleFooterContainer>
    </StyleMainContainer>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
  },
  cardsContainer: {
    paddingVertical: 30,
  },
  cardTypeImage: {
    height: 40,
    width: 40,
    tintColor: 'white',
  },
  subtotalContainer: {
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totalContainer: {
    paddingVertical: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default PaymentScreen;
