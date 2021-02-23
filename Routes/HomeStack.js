import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from "../Screens/Home"
import Profile from "../Screens/profile";
import Header from '../Components/Header';


const Stack = createStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ gestureEnabled: false }}
    >
      <Stack.Screen
        name="Home"
        component={Home}  
        options={({ navigation }) => ({
          headerTitle: () => <Header navigation={navigation} title='Time Tracking App'/>,
        })}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ title: 'My app' }}
      />
    </Stack.Navigator>
  );
}

export default RootStack;