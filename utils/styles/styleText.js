import { StyleSheet } from 'react-native';
import  colors1  from '../colors/colors1.js';

const styleText = StyleSheet.create({
    textLarge: {
        fontSize: 25,
        color: colors1.textWhite,
        fontFamily: 'Ubuntu-Medium',
    },
    textLargeBold: {
      fontWeight: 'bold',
      fontSize: 25,
      color: colors1.textWhite,
      fontFamily: 'Ubuntu-Medium',
    },
    textMedium: {
        fontWeight: '200',
        fontSize: 16,
        color: colors1.textWhite,
        fontWeight: 'bold', 
        fontFamily: 'Ubuntu-Medium',
    },
    textMediumBold: {
        fontWeight: '200',
        fontSize: 19,
        color: colors1.textWhite,
        fontWeight: 'bold', 
        fontFamily: 'Ubuntu-Medium',
    },
    textSmall: {
        color: colors1.textWhite,
        fontSize: 14,
        fontFamily: 'Ubuntu-Medium',
    },
    textSmallBold: {
        color: colors1.textWhite,
        fontSize: 14,
        fontFamily: 'Ubuntu-Medium',
        fontWeight : 'bold'
    },
    buttonText: {
        color: colors1.textWhite,
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'Ubuntu-Medium',
    },
});

export default styleText;
