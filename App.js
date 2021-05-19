import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStack from './Routes/HomeStack';
import CheckInStack from './Routes/CheckInStack';

const Tab = createBottomTabNavigator();


export default function App() {

  return (
    <NavigationContainer>
      <HomeStack/>
    </NavigationContainer>
   
  );
}


