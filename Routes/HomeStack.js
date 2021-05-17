import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../Screens/Home"
import Login from "../Screens/Login";
import Signup from '../Screens/Signup'
import Header from '../Components/Header';
import CheckIn from '../Screens/Check-in';
import Splash from '../Screens/Splash';
import Drawer from '../Components/Drawer';


const Stack = createStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{ gestureEnabled: false }}
    > 
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
         headerShown: false
        }}    
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{
         headerShown: false
        }}    
      />
      <Stack.Screen
       name="Login"
       component={Login}
       options={{
        headerShown: false
       }} 
      />
      <Stack.Screen
        name="Home"
        component={Home}  
        options={({ navigation }) => ({
          headerTitle: () => <Header navigation={navigation} title='Time Tracking App'/>,
        })}
      />
      <Stack.Screen
        name="CheckIn"
        component={CheckIn}
      /> 
       <Stack.Screen
        name="Drawer"
        component={Drawer}
        options={({ navigation }) => ({
          headerTitle: () => <Header navigation={navigation} title='Time Tracking App'/>,
        })}
      /> 
    </Stack.Navigator>
  );
}

export default RootStack;