import React, { useState } from 'react';
import {NativeRouter, Switch, Route} from 'react-router-native';
import {View, StyleSheet} from 'react-native';


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
});


// Components 
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import MyDrawer from './Components/Drawer';
import Header from './Components/Header';

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
    <NativeRouter>
        {/* <Switch>
          <Route exact path='/' component={Login}/>
          <Route exact path='/signup' component={Signup}/>
        </Switch> */}
        <MyDrawer/>
        {/* <Header/> */}
    </NativeRouter>

  );
}


