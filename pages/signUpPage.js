import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, Pressable, TextInput, useWindowDimensions, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';


import colors1 from '../utils/colors/colors1.js';
import { styleText, styleImage, styleView, styleButton } from '../utils/styles/indexImports.js';
import styleContainer from '../utils/styles/containers.js';

import loginSeller from '../api/apiConnections.js';

function SignUp({ navigation }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


//   useEffect( () => {
//         console.log(email, '\n', password);    
//     },[])


  const triggerLogin = async () => {
    await loginSeller(email, password);
  }

  const { width, height } = useWindowDimensions();

  const [fontsLoaded] = useFonts({
    'Ubuntu-Medium': require('../assets/fonts/Ubuntu-Medium.ttf'),
  });
  
  if (!fontsLoaded) {
    return null; // Return null or a loader until fonts are loaded
  }
  
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styleContainer.containerMain}>
        <SafeAreaView style={styleView.safeArea}>
          <View style={{ marginTop: height * 0.03, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ marginTop: height * 0.03 }}>
              <Text style={[styleText.textLargeBold, { fontFamily: 'Ubuntu-Medium' }]}>
                Welcome Back to KaamSay
              </Text>
              <Text style={[styleText.textMedium, { marginTop: height * 0.01, textAlign: 'center' }]}>
                Your Go-To App for Trusted {'\n'} Home Services in Pakistan!
              </Text>
            </View>
          </View>

          <View style={styles.upper}>
                <View style={{ marginTop: height * 0.03, alignItems: 'center',}}>

                   <View style={[styles.inputContainer, { width: width * 0.9 }]}>
                            <Image style={styleImage.imgSmall} source={require('../assets/images/nameLogo.png')} />
                            <TextInput
                            style={[styles.email, { flex: 1, alignItems: 'center', marginLeft: width * 0.02 }]}
                            placeholder="Enter Name"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            returnKeyType="next"
                            onSubmitEditing={() => this.passwordInput.focus()}
                            blurOnSubmit={false}
                            />
                    </View>

                    <View style={[styles.inputContainer, { width: width * 0.9 }]}>
                            <Image style={styleImage.imgSmall} source={require('../assets/images/EmailLogo.png')} />
                            <TextInput
                            style={[styles.email, { flex: 1, alignItems: 'center', marginLeft: width * 0.02 }]}
                            placeholder="E-mail / Username"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            returnKeyType="next"
                            onSubmitEditing={() => this.passwordInput.focus()}
                            blurOnSubmit={false}
                            />
                    </View>

              <View style={[styles.inputContainer, { width: width * 0.9 }]}>
                    <Image style={styleImage.imgSmall} source={require('../assets/images/Lock.png')} />
                        <TextInput
                        ref={(input) => { this.passwordInput = input; }}
                        style={{ flex: 1, marginLeft: width * 0.02 }}
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        returnKeyType="done"
                        />
              </View>

              <Pressable style={[styleButton.buttonLong, { width: width * 0.9 }]} onPress={triggerLogin}>
                <Text style={styleText.buttonText}>Sign In</Text>
              </Pressable>

              <View style={{ flexDirection: 'row', marginTop: height * 0.02 }}>
                <Text style={[styleText.textSmall, { fontFamily: 'Ubuntu-Medium' }]}>Already have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                  <Text style={[styleText.textSmall, { color: colors1.buttonColor, marginLeft: width * 0.01 }]}>Login</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.sgnWith}>
            <Text style={[styleText.textSmall, { fontFamily: 'Ubuntu-Medium', marginRight: width * 0.05 }]}>Sign Up with:</Text>
            <View style={styles.logoContainer}>
              <Image style={styleImage.imgSmall} source={require('../assets/images/AppleLogo.png')} />
            </View>
            <View style={[styles.logoContainer, { marginLeft: width * 0.04, marginRight: width * 0.15 }]}>
              <Image style={styleImage.imgSmall} source={require('../assets/images/GoogleLogo.png')} />
            </View>
          </View>
        </SafeAreaView>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  upper: {
    flex: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  sgnWith: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 10,
  },
});

export default SignUp;
