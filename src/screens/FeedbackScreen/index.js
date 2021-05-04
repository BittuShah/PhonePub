import React, {useState} from 'react';
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
// import {Rating, AirbnbRating} from 'react-native-ratings';
import theme from '../../theme';
import {
  Button,
  IconInput,
  Link,
  Header,
  CustomText,
  Icon,
  BodyTitle,
} from '../../components';
import {showToast} from '../../lib/helper';
const {height} = Dimensions.get('window');

const FeedbackScreen = () => {
  const [selectedEmoji, setSelectedEmoji] = useState('laugh');
  const [message, setMessage] = useState('');

  const onSubmit = () => {
    if (!message) {
      showToast('Please enter message');
    } else {
      showToast('Message sent', 'success');
    }
  };

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
        rightText="Skip"
        rightTextColor={theme.colors.WHITE}
        leftIconBg={theme.colors.GOLDEN}
        headerBackground={theme.colors.PRIMARY_BLUE}
      />

      <View style={{paddingHorizontal: 15}}>
        <CustomText
          text="How do you feel?"
          color={theme.colors.WHITE}
          fontFamily={theme.fontFamily.bold}
          fontSize="23"
        />
        {/* <CustomText
          text="Tell us about your experience"
          color={theme.colors.WHITE_FADE}
          fontSize
        /> */}
        <Text
          style={{
            color: theme.colors.WHITE_FADE,
            marginTop: 5,
            fontFamily: theme.fontFamily.medium,
            fontSize: 14,
          }}>
          Tell us about your experience
        </Text>

        <View style={styles.emojiContainer}>
          <TouchableOpacity
            style={[
              styles.emoji,
              selectedEmoji === 'laugh' && {
                backgroundColor: theme.colors.GOLDEN,
                borderColor: theme.colors.GOLDEN,
              },
            ]}
            onPress={() => setSelectedEmoji('laugh')}>
            <Icon
              name="laugh"
              color={theme.colors.WHITE}
              height="30"
              width="30"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.emoji,
              selectedEmoji === 'happy' && {
                backgroundColor: theme.colors.GOLDEN,
                borderColor: theme.colors.GOLDEN,
              },
            ]}
            onPress={() => setSelectedEmoji('happy')}>
            <Icon
              name="happy"
              color={theme.colors.WHITE}
              height="30"
              width="30"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.emoji,
              selectedEmoji === 'sad' && {
                backgroundColor: theme.colors.GOLDEN,
                borderColor: theme.colors.GOLDEN,
              },
            ]}
            onPress={() => setSelectedEmoji('sad')}>
            <Icon
              name="sad"
              color={theme.colors.WHITE}
              height="30"
              width="30"
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.whiteView}>
        <ScrollView
          style={{
            paddingHorizontal: 20,
          }}>
          <View>
            {/* <Text style={styles.title}>Give us feedback</Text> */}
            <BodyTitle title="Give us feedback" />
            <CustomText
              text="Write your suggestion here"
              style={styles.subTitle}
            />
            {/* <Text style={styles.subTitle}>Write your suggestion here</Text> */}
          </View>

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

          <TextInput
            placeholder="Message"
            multiline
            numberOfLines={10}
            placeholderTextColor="#abaeb0"
            onChangeText={text => setMessage(text)}
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
              title="Send"
              fontFamily={theme.fontFamily.bold}
              color={theme.colors.WHITE}
              onPress={() => onSubmit()}
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
  emojiContainer: {
    flexDirection: 'row',
  },
  emoji: {
    height: 80,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: theme.colors.WHITE_FADE,
    borderRadius: 17,
    marginTop: 15,
    marginRight: 15,
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
    color: theme.colors.black,
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

export default FeedbackScreen;
