// styles.js
import { StyleSheet } from 'react-native';
import colors1 from '../colors/colors1.js';

const styleContainer = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor: colors1.primary, 
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styleContainer;
