import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

// Components 
import Login from './Screens/Login';
import Signup from './Screens/Signup';

export default function App() {
  // const [enteredGoal, setEnteredGoal] = useState('');

  // const goalInputHandler = (enteredText) => {
  //   setEnteredGoal(enteredText);
  // };

  // const addGoalHandler = () => {
  //   console.log(enteredGoal);
  // };

  return (
    // <View style={styles.screen}>
    //   <View style={styles.inputContainer}>
    //     <TextInput
    //       placeholder="Course Goal"
    //       style={styles.input}
    //       onChangeText={goalInputHandler}
    //       value={enteredGoal}
    //     />
    //     <Button title="ADD" onPress={addGoalHandler} />
    //   </View>
    //   <View />
    // </View>
    <Signup/>

  );
}


