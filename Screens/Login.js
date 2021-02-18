import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ImageBackground } from 'react-native';


import image from '../assets/pic.jpg';

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

export default function Login({history}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

   const consoleFunc = () => {
        console.log(email, password)
    }

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
                onChangeText={(email) => setEmail(email)}
                value={email}
               />
               <TextInput
                placeholder='Enter Password'
                style={styles.input}
                selectionColor='#428AF8'
                underlineColorAndroid= '#428AF8'
                onChangeText={(password) => setPassword(password)}
                value={password}
               />
            </View>
            <View style={{width:'30%', marginTop: 30}}>
                <Button
                title="Login"
                color="#428AF8"
                onPress={consoleFunc}
                />
            </View>
            <View style={{flexDirection:'row', bottom: 50, position:'absolute'}}>
            <Text style={{fontWeight:'bold', fontSize: 17}}>
                Don't have an account ?  
            </Text>
            <Text style={{fontWeight:'bold', fontSize: 17, marginLeft: 5}}
            onPress={() => {history.push('/signup')}}
            >
                Create
            </Text>
            </View>         
        </View>
        </ImageBackground>
        
    )
}