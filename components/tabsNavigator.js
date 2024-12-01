



import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


//simport { useRoute } from '@react-navigation/native';

import { CredentialsContext } from '../context/contextCredentials.js';



import React from 'react';
import { View, Text, StyleSheet, ScrollView, useWindowDimensions } from 'react-native';
import colors1 from '../utils/colors/colors1.js';
import { useFonts } from 'expo-font';
import activeServices from './activeSerRaw.js';
import styleTextBlack from '../utils/styles/styleTextBlack.js';

import { styleText, styleImage, styleView, styleButton } from '../utils/styles/indexImports.js';



import HomePage from '../pages/homePage.js';
import SettingPage from '../pages/settingPage.js';
import ChatPage from '../pages/chatPage.js';
import OrderInfoPage from '../pages/orderInfoPage.js';
import ProfilePage from '../pages/profilePage.js';






const Tabs = createBottomTabNavigator();

const screenOpt = {

    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: {
      position: 'absolute',
      backgroundColor: 'transparent',
      borderTopWidth: 0, // Remove the top border
      elevation: 0, // Remove shadow on Android
      shadowOpacity: 0, // Remove shadow on iOS
      height: 50,
    },
  
}
const opt1 = {
  
    tabBarIcon: ({ focused }) => (
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <ImageBackground
          style={[
            styles.iconBackground,
            {
              shadowColor: focused ? 'aqua' : 'transparent',
              shadowOffset: { width: 0, height: 0 },
              shadowRadius: focused ? 10 : 0,
              shadowOpacity: focused ? 1 : 0,
            },
          ]}
        >
          <Image
            style={[styles.icns, { tintColor: focused ? 'aqua' : 'grey' }]}
            source={require('../assets/images/homeIcn.png')}
          />
        </ImageBackground>
      </View>
    ),
  
  
}

const opt2 = {
  tabBarIcon: ({ focused }) => (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <ImageBackground
        style={[
          styles.iconBackground,
          {
            shadowColor: focused ? 'aqua' : 'transparent',
            shadowOffset: { width: 0, height: 0 },
            shadowRadius: focused ? 10 : 0,
            shadowOpacity: focused ? 1 : 0,
          },
        ]}
      >
        <Image
          style={[styles.icns, { tintColor: focused ? 'aqua' : 'grey' }]}
          source={require('../assets/images/chatIcn.png')}
        />
      </ImageBackground>
    </View>
  ),
}

const opt3 = {
  tabBarIcon: ({ focused }) => (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <ImageBackground
        style={[
          styles.iconBackground,
          {
            shadowColor: focused ? 'aqua' : 'transparent',
            shadowOffset: { width: 0, height: 0 },
            shadowRadius: focused ? 10 : 0,
            shadowOpacity: focused ? 1 : 0,
          },
        ]}
      >
        <Image
          style={[styles.icns, { tintColor: focused ? 'aqua' : 'grey' }]}
          source={require('../assets/images/orderInfoIcn.png')}
        />
      </ImageBackground>
    </View>
  ),
}

const opt4  = {
  tabBarIcon: ({ focused }) => (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <ImageBackground
        style={[
          styles.iconBackground,
          {
            shadowColor: focused ? 'aqua' : 'transparent',
            shadowOffset: { width: 0, height: 0 },
            shadowRadius: focused ? 10 : 0,
            shadowOpacity: focused ? 1 : 0,
          },
        ]}
      >
        <Image
          style={[styles.icns, { tintColor: focused ? 'aqua' : 'grey' }]}
          source={require('../assets/images/profileIcn.png')}
        />
      </ImageBackground>
    </View>
  ),
}

const TabsNavigator = () => {

  //const route = useRoute();
  

  return  (

          <Tabs.Navigator
          screenOptions={screenOpt}
        >
          <Tabs.Screen 
            name="Home" 
            component={HomePage} 
            options={opt1}
            
          />
          <Tabs.Screen 
            name="Tasks" 
            component={ChatPage}
            options={opt2}
          />

          <Tabs.Screen 
            name="Calender" 
            component={OrderInfoPage} 
            options={opt3}
            
          />
          <Tabs.Screen 
            name="Settings" 
            component={ProfilePage} 
            options={opt4}
          />
        </Tabs.Navigator>

  );
}

const styles = StyleSheet.create({
  icns: {
    width: 30,
    height: 30,
  },
});

export default TabsNavigator;
