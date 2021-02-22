import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import CheckIn from '../Screens/Check-in';



const Stack = createStackNavigator();

function CheckInStack() {
  return (
    <Stack.Navigator
      initialRouteName="CheckIn"
      screenOptions={{ gestureEnabled: false }}
    >
      <Stack.Screen
        name="CheckIn"
        component={CheckIn}
        options={{ title: 'Check-in Page' }}
      />
    </Stack.Navigator>
  );
}

export default CheckInStack;