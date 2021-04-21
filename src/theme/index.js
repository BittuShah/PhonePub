import {Constants} from '../lib/constant';

export default theme = {
  //COLORS
  colors: {
    //GIVEN COLORS
    NAVY_BLUE: '#000497',
    PINK: '#ff1f80',
    GREEN: '#2dcd75',
    GREEN_LIGHT: '#21e600',

    //DEVELOPER COLORS
    PRIMARY_COLOR: '#2aabb8',
    WHITE: '#ffffff',
    PLACE_HOLDER_TEXT_COLOR: '#c9c9c9',
    GREY: 'grey',
    GREY2: '#aaa',
    GREY3: '#ccc',
    GREY4: '#e9e9e9',
    WHITE_FADE: 'rgba(255, 255, 255, 0.6)',
    BLACK: '#000',
    black: '#000',
    BACKGROUND_COLOR: '#EEEFF1',
    BLUE: '#0079B8',
    skyBlue: '#1E96E0',
  },
  //FONT FAMILY
  fontFamily: {
    extra_bold: `${Constants.FONT_FAMILY.ROBOTO}-ExtraBold`,
    bold: `${Constants.FONT_FAMILY.ROBOTO}-Bold`,
    light: `${Constants.FONT_FAMILY.ROBOTO}-Light`,
    medium: `${Constants.FONT_FAMILY.ROBOTO}-Medium`,
    regular: `${Constants.FONT_FAMILY.ROBOTO}-Regular`,
    semi_bold: `${Constants.FONT_FAMILY.ROBOTO}-Black`,
    thin: `${Constants.FONT_FAMILY.ROBOTO}-Thin`,
    extra_light: `${Constants.FONT_FAMILY.ROBOTO}-ExtraLight`,
    black: `${Constants.FONT_FAMILY.ROBOTO}-Black`,
  },
  //FONT SIZE
  fontSize: {
    EXTRA_SMALL: 10,
    SMALL: 12,
    NORMAL: 14,
    MEDIUM: 16,
    HEADING: 18,
    LARGE: 20,
    MEDIUM_LARGE: 22,
    EXTRA_LARGE: 24,
    TITLE: 34,
  },
};
