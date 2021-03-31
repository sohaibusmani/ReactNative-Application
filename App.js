import React, { useState } from 'react';
import {NativeRouter, Switch, Route} from 'react-router-native';
import {View, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeStack from './Routes/HomeStack';
import CheckInStack from './Routes/CheckInStack';

const Drawer = createDrawerNavigator();


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
import Splash from './Screens/Splash';
import MyDrawer from './Components/Drawer';


export default function App() {

  return (
    // <NavigationContainer>
    // <Drawer.Navigator drawerContent={props => <MyDrawer {...props} />}>
    //   <Drawer.Screen name="Home" component={HomeStack} />
    //   <Drawer.Screen name="CheckIn" component={CheckInStack} />
    // </Drawer.Navigator>
    // </NavigationContainer>
     <Splash/>
  );
}


