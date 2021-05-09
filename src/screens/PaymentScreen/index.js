import React, {useState} from 'react';
import {Image, ScrollView, StyleSheet, View, FlatList} from 'react-native';
import stripe from 'tipsi-stripe';
import {
  AddNewItem,
  BodyTitle,
  Button,
  CustomText,
  Header,
} from '../../components';
import {Constants} from '../../lib/constant';
import {savedCards} from '../../lib/dummyData';
import {showToast} from '../../lib/helper';
import theme from '../../theme';

import {
  StyleMainContainer,
  StyleBodyContainer,
  StyleFooterContainer,
  StyleCard,
  StyleCardBottomContainer,
} from './style';

stripe.setOptions({
  publishableKey: Constants.STRIPE.PUBLISHABLE_KEY,
  androidPayMode: 'test', // Android only
});

const PaymentScreen = () => {
  const [selectedCardId, setSelectedCardId] = useState('1');
  const [newCardModal, setNewCardModal] = useState(false);

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

  const addNewCard = async () => {
    const params = {
      // mandatory
      number: '4242424242424242',
      expMonth: 11,
      expYear: 22,
      cvc: '223',
    };

    // try {
    //   const token = await stripe.createTokenWithCard(params);
    //   console.log(token);
    // } catch (err) {
    //   console.log(err);
    //   showToast(err.message);
    // }

    const options = {
      theme: {
        primaryBackgroundColor: theme.colors.SCREEN_WHITE,
        accentColor: theme.colors.PRIMARY_BLUE,
        secondaryBackgroundColor: theme.colors.SCREEN_WHITE,
        primaryForegroundColor: theme.colors.SCREEN_WHITE,
        secondaryForegroundColor: theme.colors.SCREEN_WHITE,
        errorColor: 'blue',
      },
    };

    try {
      const result = await stripe.paymentRequestWithCardForm(options);
      console.log(result);
    } catch (err) {
      showToast(err.message);
    }
  };

  return (
    <StyleMainContainer>
      <Header leftIcon="left-arrow" headerBackground="transparent" />
      <StyleBodyContainer>
        <BodyTitle title="Payment" />
        <View style={styles.cardsContainer}>
          {savedCards.length > 0 ? (
            <FlatList
              horizontal
              data={savedCards}
              keyExtractor={item => item.id}
              renderItem={({item, index}) => (
                <RenderCard key={index} card={item} index={index} />
              )}
            />
          ) : (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../assets/empty_card.png')}
                style={{height: 100, width: 100}}
              />
              <CustomText
                text="You have not added any card yet."
                style={{marginTop: 10}}
                fontSize={18}
                fontFamily={theme.fontFamily.bold}
              />
            </View>
          )}
        </View>
        <AddNewItem title="Add new card" onPress={() => addNewCard()} />
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
