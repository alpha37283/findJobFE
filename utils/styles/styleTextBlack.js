import { StyleSheet } from 'react-native';
import  colors1  from '../colors/colors1.js';

const styleTextBlack = StyleSheet.create({
    textLarge: {
        fontSize: 25,
        color: 'black',
        fontFamily: 'Ubuntu-Medium',
    },
    textLargeBold: {
      fontWeight: 'bold',
      fontSize: 25,
      color: 'black',
      fontFamily: 'Ubuntu-Medium',
    },
    textMedium: {
        fontWeight: '200',
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold', 
        fontFamily: 'Ubuntu-Medium',
    },
    textMediumBold: {
        
        fontSize: 19,
        color: 'black',
        fontWeight: 'bold', 
        fontFamily: 'Ubuntu-Medium',
    },
    textSmall: {
        color: 'black',
        fontSize: 14,
        fontFamily: 'Ubuntu-Medium',
    },
    textSmallBold: {
        color: 'black',
        fontSize: 14,
        fontFamily: 'Ubuntu-Medium',
        fontWeight : 'bold'
    },
    buttonText: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'Ubuntu-Medium',
    },
});

export default styleTextBlack;