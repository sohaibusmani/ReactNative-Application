import React, { useEffect } from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import gif from '../assets/splashGif.gif';
import SyncStorage from 'sync-storage';

const styles = StyleSheet.create({
    screen: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        backgroundColor:'white'
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

 export default function Splash({navigation}){

 const token = SyncStorage.get('token');
 console.log(token)

  useEffect(() => {
    setTimeout(() => {
      token ?
      navigation.replace('AppNavigator')
      :
      navigation.replace('Login')
    }, 2000)
  },[])
  
    return(
          <View style={styles.screen}>
             <Image source={gif}/>
             <Text style={{fontWeight:'bold', color:'black',  fontSize:30, marginTop: 8}}>Passage Time</Text>
          </View>
    )
}
