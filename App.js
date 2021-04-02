import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeStack from './Routes/HomeStack';
import CheckInStack from './Routes/CheckInStack';

const Drawer = createDrawerNavigator();


// Components 
import MyDrawer from './Components/Drawer';


export default function App() {

  return (
    <NavigationContainer>
    <Drawer.Navigator drawerContent={props => <MyDrawer {...props} />}>
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="CheckIn" component={CheckInStack} />
    </Drawer.Navigator>
    </NavigationContainer>
  );
}


