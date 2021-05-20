import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Header from '../Components/Header';

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
        options={({ navigation }) => ({
          headerTitle: () => <Header navigation={navigation} title='Check-in'/>,
        })}
      /> 
    </Stack.Navigator>
  );
}

export default CheckInStack;