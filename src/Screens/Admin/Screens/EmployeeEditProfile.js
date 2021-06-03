import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button,TextInput, ImageBackground, Alert } from 'react-native';
import Axios from 'axios';
import baseUrl from '../../../Url/BaseUrl';

import image from '../../../assets/splash1.jpg';
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

export default function signup({history, navigation, route}){
    const {employeeId} = route.params;
    const [wage, setWage] = useState('');
    const [contactNumber, setContactnumber] = useState('');
    const [designation, setDesignation] = useState('');
    const [fullName, setFullName] = useState('')

    useEffect(() => {
        getEmployeeDetails();
      },[])

    const getEmployeeDetails = () => {
        Axios({
            method:'GET',
            url:`${baseUrl}/user/details`,
            params:{
                userId: employeeId
            }
        })
        .then(res => {
            console.log(res.data.user);
            setFullName(res.data.user.name);
            setDesignation(res.data.user.designation);
            setContactnumber(res.data.user.contactNumber);
            setWage(res.data.user.wedge)
        })
        .catch(err => {
            console.log(err)
        })
    }

    const updateProfile = () => {
        Axios({
            method:'POST',
            url:`${baseUrl}/user/update`,
            data: {
                name: fullName,
                contactNumber,
                designation,
                wedge: parseInt(wage),
                userId: employeeId
            }
        })
        .then(res =>{
            Alert.alert('Updated', 'Profile has been updated.')
        })
        .catch(err => {
            console.log(err.response.data.message)
            Alert.alert('Error', 'Profile has not been updated.')
        })
    }

    return(
       <ImageBackground source={image} style={styles.image}>
           <View style={styles.screen}>
            <View style={styles.inputContainer}>
            <TextInput
                placeholder='Enter Number'
                style={styles.input}
                selectionColor='#428AF8'
                underlineColorAndroid= '#428AF8'
                onChangeText={(fullName) => setFullName(fullName)}
                value={fullName}
               />
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
                keyboardType = 'numeric'
                underlineColorAndroid= '#428AF8'
                onChangeText={(wage) => setWage(wage)}
                value={wage.toString()}
               />
            </View>
            <View style={{width:'30%', marginTop: 30}}>
                <Button
                title="Update"
                color="#428AF8"
                onPress={updateProfile}
                />
            </View>
           </View>
       </ImageBackground> 
    )
}