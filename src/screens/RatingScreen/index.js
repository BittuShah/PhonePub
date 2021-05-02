import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
  TextInput,
} from 'react-native';
import {Rating, AirbnbRating} from 'react-native-ratings';
import theme from '../../theme';
import {Button, IconInput, Link, Header, CustomText} from '../../components';
const {height} = Dimensions.get('window');

const RatingScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.PRIMARY_BLUE,
        paddingVertical: 10,
        height: 100,
      }}>
      <Header
        // primaryText="Sign in"
        leftIcon="left-arrow"
        leftIconColor="#616161"
        leftIconBg={theme.colors.WHITE}
        headerBackground={theme.colors.PRIMARY_BLUE}
      />

      <View style={{alignItems: 'center'}}>
        <CustomText
          text="Rate our service"
          color={theme.colors.WHITE}
          fontFamily={theme.fontFamily.bold}
          fontSize="25"
        />
      </View>

      <View style={styles.whiteView}>
        <ScrollView
          style={{
            paddingHorizontal: 20,
          }}>
          {/* <View style={{alignItems: 'center'}}>
            <Text style={styles.title}>Smart watch</Text>
          </View> */}
          {/* <Text style={styles.subTitle}>Enter your credential login</Text> */}

          {/* <View style={styles.imageContainer}>
            <Image
              source={require('../../assets/selfie_stick.png')}
              style={styles.image}
            />
          </View> */}

          {/* <Rating
            type="heart"
            ratingCount={3}
            imageSize={60}
            showRating
            // onFinishRating={this.ratingCompleted}
          /> */}

          <Rating
            type="custom"
            // ratingImage={WATER_IMAGE}
            ratingColor={theme.colors.GOLDEN}
            ratingBackgroundColor="#c8c7c8"
            ratingCount={5}
            imageSize={25}
            // onFinishRating={this.ratingCompleted}
            style={{paddingVertical: 10}}
          />

          <TextInput
            placeholder="Add your thoughts here ..."
            multiline
            numberOfLines={5}
            style={styles.textarea}
          />

          {/* <View style={styles.inputContainer}>
            <IconInput
              iconName="user-fill"
              placeHolder="Phone or Email"></IconInput>

            <IconInput
              iconName="padlock"
              placeHolder="Password"
              secureTextEntry></IconInput>
          </View> */}
          <View style={{alignItems: 'flex-end'}}>
            <Button
              title="Submit"
              fontFamily={theme.fontFamily.bold}
              color={theme.colors.WHITE}
            />
          </View>
          {/* <View style={styles.link}>
            <Link text="Forgot your password?" />
          </View> */}

          {/* <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 30}}>
            <View
              style={{flex: 1, height: 1, backgroundColor: theme.colors.GOLDEN}}
            />
            <View>
              <Text
                style={{
                  width: 40,
                  textAlign: 'center',
                  color: theme.colors.GOLDEN,
                  fontFamily: theme.fontFamily.bold,
                }}>
                or
              </Text>
            </View>
            <View
              style={{flex: 1, height: 1, backgroundColor: theme.colors.GOLDEN}}
            />
          </View> */}

          {/* <TouchableOpacity style={styles.borderButton}>
            <Text style={{color: '#7d7e80', fontFamily: theme.fontFamily.bold}}>
              Create an account
            </Text>
          </TouchableOpacity> */}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  whiteView: {
    width: '100%',
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    backgroundColor: theme.colors.WHITE,
    paddingTop: 20,
    paddingBottom: 30,
    height: height - 150,
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: theme.fontFamily.bold,
    // color: theme.colors.TITLE,
    color: '#4e5358',
    // alignItems: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    height: 150,
    marginVertical: 20,
    // width: 50,
    // borderWidth: 2,
  },
  image: {
    height: 150,
    width: 100,
  },
  textarea: {
    backgroundColor: theme.colors.GREY5,
    // justifyContent: 'flex-start',
    // alignItems: 'center',
    textAlignVertical: 'top',
    borderRadius: 17,
    paddingHorizontal: 15,
    marginTop: 15,
    marginBottom: 20,
  },
  subTitle: {
    color: theme.colors.SUB_TITLE,
    fontFamily: theme.fontFamily.bold,
    marginTop: 4,
    marginBottom: 10,
  },
  inputContainer: {
    marginTop: 10,
    marginBottom: 15,
  },
  bottomText: {
    fontSize: 15,
    fontFamily: theme.fontFamily.bold,
    marginTop: 10,
    alignSelf: 'center',
  },
  link: {
    marginTop: 10,
    alignSelf: 'center',
  },
  borderButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 17,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#c5c5c5',
    marginTop: 20,
    marginBottom: 25,
    height: 55,
  },
});

export default RatingScreen;
