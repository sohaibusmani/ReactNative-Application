import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ImageBackground } from 'react-native';


import image from '../assets/pic.jpg';

const styles = StyleSheet.create({
    screen: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center' 
    },
    inputContainer: {
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '80%'
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
        justifyContent: "center"
      },
    heading: {
        fontSize: 25,
        textAlign: 'center',
        margin: 10,
        fontWeight: 'bold',
    }
  });

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <ImageBackground source={image} style={styles.image}>
        <View style={styles.screen}>
            <View style={{marginBottom: 10}}>
                <Text style={styles.heading}>
                    Login
                </Text>
            </View>
            <View style={styles.inputContainer}>
               <TextInput
                placeholder='Enter Email'
                style={styles.input}
                selectionColor='#428AF8'
                underlineColorAndroid= '#428AF8'
                onChangeText={(e) => setEmail(e.target.value)}
                value={email}
               />
               <TextInput
                placeholder='Enter Password'
                style={styles.input}
                selectionColor='#428AF8'
                underlineColorAndroid= '#428AF8'
                onChangeText={(e) => setPassword(e.target.value)}
                value={password}
               />
            </View>
            <View style={{width:'30%'}}>
                <Button
                title="Login"
                color="#428AF8"
                />
            </View>
           
        </View>
        </ImageBackground>
    )
}