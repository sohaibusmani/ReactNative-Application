import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import image from '../assets/splash1.jpg'

const styles = StyleSheet.create({
    screen: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        backgroundColor:'#66bbb9', 
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
          <View style={styles.screen}>
             <MaterialCommunityIcons name="account-clock-outline" size={80} color="white" />
             <Text style={{fontWeight:'bold', color:'white',  fontSize:30, marginTop: 8}}>Time Tracking App</Text>
          </View>
    )
}
