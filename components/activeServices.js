import React from 'react';
import { View, Text, StyleSheet, ScrollView, useWindowDimensions } from 'react-native';
import colors1 from '../utils/colors/colors1';
import { useFonts } from 'expo-font';
import activeServices from './activeSerRaw.js';
import styleTextBlack from '../utils/styles/styleTextBlack';

import { styleText, styleImage, styleView, styleButton } from '../utils/styles/indexImports.js';

function ActiveServices() {
  const { width, height } = useWindowDimensions();

  const [fontsLoaded] = useFonts({
    'Ubuntu-Medium': require('../assets/fonts/Ubuntu-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.main}>
      <ScrollView
        horizontal
        contentContainerStyle={[styles.scrollContainer, { padding: width * 0.01 }]}
        showsHorizontalScrollIndicator={false}
      >
        {activeServices.map((service) => (
          <View key={service.id} style={[styles.taskContainer, {width: width * 0.5, height : height * 0.12, alignItems : 'stretch', justifyContent : 'space-between' }]}>
            <View style={[styles.dandt,{flexDirection : 'row', justifyContent : 'space-between'}]}>
                <Text style={[styleTextBlack.textLargeBold, { fontSize: width * 0.05, letterSpacing : 2 }]}>{service.title}</Text>
            </View>
            
            <View style={[styles.dandt,{flexDirection : 'row', justifyContent : 'space-between', }]}>
              <Text style={[styleText.textMedium, { fontSize: width * 0.04 }]}>
                {service.buyer}
              </Text>
              <Text>     </Text>
              <Text style={[styleText.textMedium, { fontSize: width * 0.04 }]}>
                {service.loc}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
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
  scrollContainer: {
    alignItems: 'center',
  },
  taskContainer: {
    padding: 15,
    backgroundColor: colors1.primary || '#D9D9D9',
    borderRadius: 10,
    marginHorizontal: 10,
    alignItems: 'flex-start',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // Shadow effect for Android
  },


});

export default ActiveServices;
