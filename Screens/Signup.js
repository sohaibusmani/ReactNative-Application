import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ImageBackground } from 'react-native';

import image from '../assets/pic2.jpg';

const styles = StyleSheet.create({
    screen: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        backgroundColor:'rgba(0,0,0,0.5)', 
    },
    inputContainer: {
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '80%',

    },
    input: {
    height: 40,
    width:'100%',
    padding: 6,
    marginBottom: 20
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
      },
    heading: {
        fontSize: 25,
        textAlign: 'center',
        margin: 10,
        fontWeight: 'bold',
    }
  });

export default function signup(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullname] = useState('');
    const [contactNumber, setContactnumber] = useState('')

    return(
       <ImageBackground source={image} style={styles.image}>
           <View style={styles.screen}>
           <View style={{marginBottom: 10}}>
               
            </View>
           </View>
       </ImageBackground> 
    )
}