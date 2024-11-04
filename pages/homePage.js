import React from 'react';
import { Text, StyleSheet, View, SafeAreaView, useWindowDimensions, Image } from 'react-native';
import { styleText, styleImage, styleView, styleTextNoColor } from '../utils/styles/indexImports.js';
import styleContainer from '../utils/styles/containers.js';
import { useFonts } from 'expo-font';
import CardSmall from '../components/cardSmallP1.js';
import { Divider } from 'react-native-elements';

function HomePage() {

    const name = "Ahmed";
    const { width, height} = useWindowDimensions();

    const [fontsLoaded] = useFonts({
        'Ubuntu-Medium': require('../assets/fonts/Ubuntu-Medium.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.safeArea}>
                <View style={[styles.viewProfile, {height : height * 0.15,width: width, marginTop : height * 0.05, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }]}>
                    <View style={[styles.avatar]}>
                        <Image style={[styleImage.imgMedium, { borderRadius: width * 0.1 }]} source={require('../assets/images/alpha.png')} />
                    </View>
                    <View style={[styles.text, {marginLeft : 60}]}>
                        <View>
                            <Text style={[styleTextNoColor.textSmall, { letterSpacing: 1 }]}>Hello, {name}</Text>
                        </View>
                        <View>
                            <Text style={[styleTextNoColor.textLarge, { letterSpacing: 1 }]}>Welcome Back.</Text>
                        </View>
                    </View>
                </View>
                
                <Divider width={2} color="#C1C1C1" style={{ width: width * 0.85, alignSelf: 'center' }} />

                {/* CardSmall Component */}
                <CardSmall />
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    safeArea: {
        flex: 1,
        paddingHorizontal: 10,
    },
    viewProfile: {
        color: 'black',
        paddingVertical: 20,
    },
    // separator: {
    //     width: '100%',
    //     height: 1,
    //     backgroundColor: 'black',
    //     marginVertical: 10,
    // },
});

export default HomePage;
