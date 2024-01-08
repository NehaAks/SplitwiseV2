import { Dimensions } from "react-native";
import { dynamicSize } from "../utils/dimension.style";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    color1: '#ffffff',
    color2: '#6CB4EE',
    color3: '#D3D3D3',
    color4:'#1F456E',

    primary: "#fd8640",     // Orange
    primary2: "#4888ef",    // Blue
    primary3: "#2366B8",
    primary4: '#50BCFF',
    primary5: '#2462AE',   // Dark Blue
    primary6: '#2982C7',
    secondary: "#FC2626",   // Red
    fadeWhite: ' #EEEEEE',
    // lightGreen: '#81C9AD',
    davyGray: "#555555",
    blue: '#2A65FF',
    blue1: "#2962F6",
    green: '#3F815D',
    lightPink: '#FFDEDC',
    bg: '#F5F5F5',
    shadow: '#00000010',
    gray: 'grey',
    gray4:'#E8E8E8',
    gray5: '#EDF2F8',
    gray10: "#E5E5E5",
    gray15: '#F1F1F1',
    gray20: "#C4C4C4",
    gray25: '#B7B7B7',
    gray30: "#A1A1A1",
    gray40: '#EEEEEE',
    gray50: "#7F7F7F",

    gray60: "#666666",
    gray70: "#4C4C4C",
    gray80: "#333333",
    gray85: "#242526",
    gray90: "#191919",
    gray100: "#747F88",
    lightGray: '#FAFAFA',

    lightGreen: '#F2F8FF',
    green_success: '#51D18C',
    red_failed: '#cc0000',
    pending: '#FFA959',
    additionalColor4: "#C3C3C3",
    additionalColor9: "#F3F3F3",
    additionalColor11: "#F0FFFB",
    additionalColor13: "#EBF3EF",
    additionalColor15: '#E6E6E6',

    white: '#FFFFFF',
    offWhite: '#F9F8F8',

    black: "#212529",
    black1: '#494949',
    black2: '#636363',
    indicatorColor: '#3235fd',

    lightYellow: '#FCF3D7',
    darkYellow: '#F4E9C8',

    lightRed: '#FFE0DE',
    darkRed: '#F9D2D1',
    dardRed1: '#D44459',
    red: '#FF0000',
    red1: '#FF6B6B',

    skyBlue: '#F2F7FF',
    lightBlue: '#D7DFFF',
    lightBlue1: '#EDF2F8',
    lightBlue2: '#DFF2FF',
    lightBlue3: '#A3DCFF',
    lightBlue4: '#C5D8EC',
    darkBlue: '#D3D8FC',
    darkBlue1: '#2B5796',
    darkBlue2: '#004DBE',
    lightBlue4: '#00B0BF',

    lightBlue: '#E9F6FF',
    dotColor1: '#ffffff',
    dotColor2: '#fd8640',

    transparent: 'transparent',
    transparentWhite1: "rgba(255, 255, 255, 0.1)",
    transparentBlack1: "rgba(0, 0, 0, 0.1)",
    transparentBlack8: "rgba(0, 0, 0, 0.8)",
    transparentBlack4: "rgba(0, 0, 0, 0.4)"
};
export const SIZES = {
    // global sizes
    base: dynamicSize(8),
    font: dynamicSize(14),
    radius: dynamicSize(4),
    padding: dynamicSize(24),
    margin: dynamicSize(12),

    // font sizes
    largeTitle: dynamicSize(32),
    h1: dynamicSize(30),
    h2: dynamicSize(22),
    h3: dynamicSize(18),
    h4: dynamicSize(16),
    h5: dynamicSize(14),
    body1: dynamicSize(30),
    body2: dynamicSize(22),
    body3: dynamicSize(18),
    body4: dynamicSize(16),
    body5: dynamicSize(14),
    body6: dynamicSize(12),
    body7: dynamicSize(10),

    // app dimensions
    width,
    height
};
export const FONTS = {
    largeTitle: { fontFamily: "Roboto-Black", fontSize: SIZES.largeTitle },
    h1: { fontFamily: "Roboto-Black", fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: "Roboto-Bold", fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: "Roboto-Bold", fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: "Roboto-Bold", fontSize: SIZES.h4, lineHeight: 22 },
    h5: { fontFamily: "Roboto-Bold", fontSize: SIZES.h5, lineHeight: 22 },
    body1: { fontFamily: "Roboto-Regular", fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: "Roboto-Regular", fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: "Roboto-Regular", fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: "Roboto-Regular", fontSize: SIZES.body4, lineHeight: 18 },
    body5: { fontFamily: "Roboto-Regular", fontSize: SIZES.body5, lineHeight: 16 },
    body6: { fontFamily: "Roboto-Regular", fontSize: SIZES.body6, lineHeight: 14 },
    body7: { fontFamily: "Roboto-Regular", fontSize: SIZES.body7, lineHeight: 12 },
    toastFont: { fontFamily: "Roboto-Regular", fontSize: SIZES.body4 },
};

export const darkTheme = {
    name: "dark",
    backgroundColor1: COLORS.gray85,
    backgroundColor2: COLORS.gray90,
    backgroundColor3: COLORS.gray90,
    backgroundColor4: COLORS.primary,
    backgroundColor5: COLORS.gray85,
    backgroundColor6: COLORS.black,
    backgroundColor7: COLORS.gray90,
    backgroundColor8: COLORS.gray70,
    backgroundColor9: COLORS.black,
    backgroundColor10: COLORS.gray70,
    backgroundColor11: COLORS.gray70,
    backgroundColor12: COLORS.gray85,
    backgroundColor13: COLORS.gray70,
    lineDivider: COLORS.gray70,
    borderColor1: COLORS.gray70,
    borderColor2: COLORS.gray70,
    textColor: COLORS.white,
    textColor2: COLORS.white,
    textColor3: COLORS.gray40,
    textColor4: COLORS.white,
    textColor5: COLORS.gray30,
    textColor6: COLORS.gray30,
    textColor7: COLORS.gray40,
    tintColor: COLORS.white,
    dotColor1: COLORS.white,
    dotColor2: COLORS.primary,
}

export const lightTheme = {
    name: "light",
    backgroundColor1: COLORS.white,
    backgroundColor2: COLORS.primary3,
    backgroundColor3: COLORS.additionalColor11,
    backgroundColor4: COLORS.white,
    backgroundColor5: COLORS.additionalColor13,
    backgroundColor6: COLORS.primary3,
    backgroundColor7: COLORS.white,
    backgroundColor8: COLORS.gray10,
    backgroundColor9: COLORS.primary3,
    backgroundColor10: COLORS.additionalColor13,
    backgroundColor11: COLORS.additionalColor11,
    backgroundColor12: COLORS.lightBlue,
    backgroundColor13: COLORS.primary3,
    backgroundColor14: COLORS.skyBlue,
    lineDivider: COLORS.gray20,
    borderColor1: COLORS.white,
    borderColor2: COLORS.black,
    textColor: COLORS.black,
    textColor2: COLORS.primary,
    textColor3: COLORS.gray80,
    textColor4: COLORS.white,
    textColor5: COLORS.black,
    textColor6: COLORS.gray,
    textColor7: COLORS.black,
    tintColor: COLORS.black,
    dotColor1: COLORS.gray20,
    dotColor2: COLORS.primary3,
}

export const selectedTheme = lightTheme

const appTheme = { COLORS, SIZES, FONTS, darkTheme, lightTheme };

export default appTheme;
