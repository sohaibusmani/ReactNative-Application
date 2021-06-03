import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ImageBackground, TouchableOpacity, Alert } from 'react-native';
import Axios from 'axios';
import SyncStorage from 'sync-storage';
import baseUrl from '../Url/BaseUrl';
import { RadioButton } from 'react-native-paper';



import image from '../assets/pic.jpg';

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
        width: '100%',
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
    },
    container: {
        marginBottom: 35,
        marginTop: 30,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 20
    },
    radioContainer: {
        display: 'flex',
        justifyContent: "space-between",
        flexDirection: 'row'
    },
    radioText: {
        marginRight: 15,
        fontSize: 14,
        color: '#000',
        fontWeight: '500'
    },
    radioCircle: {
        height: 20,
        width: 20,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: '#428AF8',
        alignItems: 'center',
        justifyContent: 'center',
    },
    selectedRb: {
        width: 10,
        height: 10,
        borderRadius: 50,
        backgroundColor: '#428AF8',
    },
    result: {
        marginTop: 20,
        color: 'white',
        fontWeight: '600',
        backgroundColor: '#F3FBFE',
    },
});

export default function Login({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [radioVal, setRadio] = React.useState('employee');

    const onLogin = () => {
        Axios({
            method: 'POST',
            url: `${baseUrl}/auth/login`,
            data: {
                username: username,
                password: password
            }
        })
            .then(res => {
                SyncStorage.set('token', res.data.token);
                SyncStorage.set('userData', res.data.user);
                SyncStorage.set("newUser", { user: res.data.user, schedule: { break: [] } })


                // console.log('Login Successfull', res.data.user);

                navigation.navigate('AppNavigator');
                setUsername("");
                setPassword("")
            })
            .catch(err => {Alert.alert('Error', err.response.data.message)})
    }

    const onAdminLogin = () => {
        Axios({
            method: 'POST',
            url: `${baseUrl}/auth/admin-login`,
            data: {
                username: username,
                password: password
            }
        })
            .then(res => {
                setUsername("");
                setPassword("")

                console.log('Login Successfull');

                navigation.replace('AdminNavigator')
            })
            .catch(err => {Alert.alert('Error', err.response.data.message)})
    }

   

    return (
        <ImageBackground source={image} style={styles.image}>
            <View style={styles.screen}>
                <View style={{ marginBottom: 10, marginTop:70 }}>
                    <Text style={styles.heading}>
                        Login
                </Text>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder='Enter Username'
                        style={styles.input}
                        selectionColor='#428AF8'
                        underlineColorAndroid='#428AF8'
                        onChangeText={(username) => setUsername(username)}
                        value={username}
                    />
                    <TextInput
                        placeholder='Enter Password'
                        style={styles.input}
                        selectionColor='#428AF8'
                        underlineColorAndroid='#428AF8'
                        secureTextEntry={true}
                        onChangeText={(password) => setPassword(password)}
                        value={password}
                    />
                </View>
                <View style={styles.radioContainer}>
                    <View style={styles.container}>
                        <Text style={styles.radioText}>Login as Admin</Text>
                        <TouchableOpacity
                            style={styles.radioCircle}
                            onPress={() => {
                                setRadio("admin")
                            }}>
                            {radioVal === "admin" && <View style={styles.selectedRb} />}
                        </TouchableOpacity>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.radioText}>Login as Employee</Text>
                        <TouchableOpacity
                            style={styles.radioCircle}
                            onPress={() => {
                                setRadio("employee")
                            }}>
                            {radioVal === "employee" && <View style={styles.selectedRb} />}
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ width: '30%', marginTop: 30 }}>
                    {
                        radioVal === "admin" ?
                            <Button
                                title="Login"
                                color="#428AF8"
                                onPress={onAdminLogin}
                            />
                            :
                            <Button
                                title="Login"
                                color="#428AF8"
                                onPress={onLogin}
                                
                            />
                    }
                </View>
                <View style={{ flexDirection: 'row', bottom: 50, position: 'absolute' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 17 }}>
                        Don't have an account ?
                    </Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 17, marginLeft: 5 }}
                        onPress={() => { navigation.navigate('Signup') }}
                    >
                        Create
            </Text>
                </View>
            </View>
        </ImageBackground>

    )
}