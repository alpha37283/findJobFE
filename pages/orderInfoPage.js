import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default function OrderInfoPage() {
  return (
    <View style={style.main}>
      <Text>Hello I am OrderInfoPage</Text>
     </View>
  );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
})

