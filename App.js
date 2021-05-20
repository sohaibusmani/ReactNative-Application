import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStack from './src/navigation/RootNavigator';
// import CheckInStack from './src/Routes/CheckInStack';

const Tab = createBottomTabNavigator();


export default function App() {

  return (
    <NavigationContainer>
      <HomeStack/>
    </NavigationContainer>
    // <Tab.Navigator>
    //   <Tab.Screen name="Home" component={HomeStack} />
    //   <Tab.Screen name="CheckIn" component={CheckInStack} />
    // </Tab.Navigator>
  );
}


