import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default function ChatPage() {
  return (
    <View style={style.main}>
      <Text>Hello I am chat Page</Text>
     </View>
  );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
})

