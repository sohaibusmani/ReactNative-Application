
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// import Home from "../Screens/Home"
import Header from '../Components/Header';
// import CheckIn from '../Screens/Check-in';
import DrawerNavigator from '../navigation/DrawerNavigator';

const Stack = createStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="DrawerNavigator"
      screenOptions={{ gestureEnabled: false }}
      headerMode="none"
    > 
      {/* <Stack.Screen
        name="Home"
        component={Home}  
        options={({ navigation }) => ({
          headerTitle: () => <Header navigation={navigation} title='Time Tracking App'/>,
        })}
      />
      <Stack.Screen
        name="CheckIn"
        component={CheckIn}
      />  */}
       <Stack.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
        // options={({ navigation }) => ({
        //   headerTitle: () => <Header  title='Time Tracking App'/>,
        // })}
      /> 
    </Stack.Navigator>
  );
}

export default RootStack;