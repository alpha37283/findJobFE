import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './pages/loginPage';
import SignUp from './pages/signUpPage';
import HomePage from './pages/homePage';
import CardSmall from './components/cardSmallP1';

export default function App() {
  return (
    <View style={styles.container}>
      <HomePage></HomePage>
    </View>
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
