import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './pages/loginPage';
import SignUp from './pages/signUpPage';
import HomePage from './pages/homePage';
import CardSmall from './components/cardSmallP1';

import ActiveServices from './components/activeServices';

import TabsNavigator from './components/tabsNavigator';

export default function App() {
  return (
      <HomePage></HomePage>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
