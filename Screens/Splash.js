import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';

import image from '../assets/splash1.jpg'

const styles = StyleSheet.create({
    screen: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        backgroundColor:'rgba(0,0,0,0.2)', 
    },
    inputContainer: {
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '80%',

    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
      },
  });

 export default function Splash(){
    return(
        <ImageBackground source={image} style={styles.image}>
         
        </ImageBackground>
    )
}
