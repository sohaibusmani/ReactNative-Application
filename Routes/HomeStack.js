import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from "../Screens/Home"
import Profile from "../Screens/profile";

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
        options={{ title: 'My app' }}
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