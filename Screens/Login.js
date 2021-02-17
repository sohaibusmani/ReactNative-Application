import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const styles = StyleSheet.create({
    screen: {
      padding: 50
    },
    inputContainer: {
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    input: {
      width: '100%',
      height: 'auto',
      borderColor: 'black',
      borderWidth: 1,
      padding: 5,
      marginBottom: 15
    }
  });

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <View style={styles.screen}>
            <View style={styles.inputContainer}>
               <TextInput
                placeholder='Enter Email'
                style={styles.input}
                onChangeText={(e) => setEmail(e.target.value)}
                value={email}
               />
               <TextInput
                placeholder='Enter Password'
                style={styles.input}
                onChangeText={(e) => setPassword(e.target.value)}
                value={password}
               />
            </View>
        </View>
    )
}