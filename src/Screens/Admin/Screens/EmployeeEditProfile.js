import React, {useState} from 'react';
import { StyleSheet, Text, View, Button,TextInput, ImageBackground } from 'react-native';
import Axios from 'axios';

import image from '../../../assets/pic2.jpg';
// import baseUrl from '../Url/BaseUrl';

const styles = StyleSheet.create({
    screen: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
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

export default function signup({history, navigation}){
    const [wage, setWage] = useState('');
    const [contactNumber, setContactnumber] = useState('');
    const [designation, setDesignation] = useState('')


    return(
       <ImageBackground source={image} style={styles.image}>
           <View style={styles.screen}>
           <View style={{marginBottom: 10}}>
                <Text style={styles.heading}>
                    Edit Profile
                </Text>
            </View>
            <View style={styles.inputContainer}>
               <TextInput
                placeholder='Enter Number'
                style={styles.input}
                selectionColor='#428AF8'
                underlineColorAndroid= '#428AF8'
                onChangeText={(contactNumber) => setContactnumber(contactNumber)}
                value={contactNumber}
               />
                <TextInput
                placeholder='Enter Designation'
                style={styles.input}
                selectionColor='#428AF8'
                underlineColorAndroid= '#428AF8'
                onChangeText={(designation) => setDesignation(designation)}
                value={designation}
               />
                <TextInput
                placeholder='Enter Wage'
                style={styles.input}
                selectionColor='#428AF8'
                underlineColorAndroid= '#428AF8'
                onChangeText={(wage) => setWage(wage)}
                value={wage}
               />
            </View>
            <View style={{width:'30%', marginTop: 30}}>
                <Button
                title="Update"
                color="#428AF8"
                // onPress={onSignup}
                />
            </View>
           </View>
       </ImageBackground> 
    )
}