import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

// Components
import Home from '../Screens/Home';
import CheckIn from '../Screens/Check-in';

const Drawer = createDrawerNavigator();

export default function MyDrawer(){
return(
    <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="CheckIn" component={CheckIn} />
    </Drawer.Navigator>
    </NavigationContainer>
)
}