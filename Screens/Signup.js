import React, {useState} from 'react';
import { StyleSheet, Text, View, Button,TextInput, ImageBackground } from 'react-native';

import image from '../assets/pic2.jpg';

const styles = StyleSheet.create({
    screen: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        backgroundColor:'rgba(0,0,0,0.3)', 
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
    marginBottom: 40
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

export default function signup({history}){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullname] = useState('');
    const [contactNumber, setContactnumber] = useState('');

    const consoleFunc = () => {
        console.log(fullName, email, password, contactNumber)
    }

    return(
       <ImageBackground source={image} style={styles.image}>
           <View style={styles.screen}>
           <View style={{marginBottom: 10}}>
                <Text style={styles.heading}>
                    Signup
                </Text>
            </View>
            <View style={styles.inputContainer}>
            <TextInput
                placeholder='Enter Name'
                style={styles.input}
                selectionColor='#428AF8'
                underlineColorAndroid= '#428AF8'
                onChangeText={(fullName) => setFullname(fullName)}
                value={fullName}
               />
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
               <TextInput
                placeholder='Enter Number'
                style={styles.input}
                selectionColor='#428AF8'
                underlineColorAndroid= '#428AF8'
                onChangeText={(contactNumber) => setContactnumber(contactNumber)}
                value={contactNumber}
               />
            </View>
            <View style={{width:'30%', marginTop: 30}}>
                <Button
                title="Signup"
                color="#428AF8"
                onPress={() => {history.push('/')}}
                />
            </View>
           </View>
       </ImageBackground> 
    )
}