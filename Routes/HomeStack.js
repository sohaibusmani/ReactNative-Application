import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from "../Screens/Home"
import Profile from "../Screens/profile";
import Header from '../Components/Header';
import CheckIn from '../Screens/Check-in';
import Splash from '../Screens/Splash'


const Stack = createStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{ gestureEnabled: false }}
      // headerMode='none'
    > 
      <Stack.Screen
        name="Splash"
        component={Splash}
        // headerShown={false}  
        // headerMode='none'
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
        // headerShown={false}
      // headerMode='none'
      // options={{
      //   // header: <Header/>
      //   title:"App"
        
      // }}
      // headerShown={Header}
      />
      <Stack.Screen
        name="CheckIn"
        component={CheckIn}
        // options={({ navigation }) => ({
        //   headerTitle: () => <Header navigation={navigation} title='Check-in'/>,
        // })}
        headerShown={false}
        // headerShown={Header}
      /> 
    </Stack.Navigator>
  );
}

export default RootStack;