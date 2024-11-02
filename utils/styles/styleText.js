import { StyleSheet } from 'react-native';
import  colors1  from '../colors/colors1.js';

const styleText = StyleSheet.create({
    textLarge: {
        fontSize: 25,
        color: colors1.textWhite,
    },
    textLargeBold: {
      fontWeight: 'bold',
      fontSize: 25,
      color: colors1.textWhite,
    },
    textMedium: {
        fontWeight: '200',
        fontSize: 16,
        color: colors1.textWhite,
        fontWeight: 'bold', 
    },
    textSmall: {
        color: colors1.textWhite,
        fontSize: 14,
        fontFamily: 'Ubuntu-Medium',
    },
    buttonText: {
        color: colors1.textWhite,
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'Ubuntu-Medium',
    },
});

export default styleText;
