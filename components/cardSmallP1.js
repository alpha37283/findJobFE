import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import colors1 from '../utils/colors/colors1';
import styleTextBlack from '../utils/styles/styleTextBlack';

function CardSmall() {
  const { width, height } = useWindowDimensions();

  return (
    <View style={styles.main}>
      <View style={[styles.card, {width : width * 0.4, height : height * 0.12, borderRadius: width * 0.06,}]}>
        <Text style={[styleTextBlack.textSmallBold, {letterSpacing : 1}]}>In November</Text>
        <Text style={[styleTextBlack.textMediumBold, {marginTop : width * 0.025}]}>$5,234</Text>
      </View>

      <View style={[styles.card, {width : width * 0.4, height : height * 0.12, borderRadius: width * 0.06}]}>
        <Text style={[styleTextBlack.textSmallBold, {letterSpacing : 1}]}>Clients</Text>
        <Text style={[styleTextBlack.textMediumBold, {marginTop : width * 0.025}]}>10</Text>
      </View>

      <View style={[styles.card, {width : width * 0.4, height : height * 0.12, borderRadius: width * 0.06}]}>
        <Text style={[styleTextBlack.textSmallBold, {letterSpacing : 1}]}>Orders</Text>
        <Text style={[styleTextBlack.textMediumBold, {marginTop : width * 0.025}]}>12</Text>
      </View>

      <View style={[styles.card, {width : width * 0.4, height : height * 0.12, borderRadius: width * 0.06}]}>
        <Text style={[styleTextBlack.textSmallBold, {letterSpacing : 1}]}>Total Earnings</Text>
        <Text style={[styleTextBlack.textMediumBold, {marginTop : width * 0.025}]}>$10,510</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',       // Row layout for the cards
    flexWrap: 'wrap',            // Wrap to a new line if they exceed the width
    justifyContent: 'space-around', // Space around each card
    padding: 10,
  },
  card: {
    backgroundColor: colors1.primary,
    justifyContent : 'flex-start',
    padding: 15,                
    margin: 10,                 
    alignItems: 'center',       
    shadowColor: "#000",        
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 10,               // Android shadow
  }
});

export default CardSmall;
