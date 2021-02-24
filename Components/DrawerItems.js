import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeStack from '../Routes/HomeStack';
import CheckInStack from '../Routes/CheckInStack';

const Drawer = createDrawerNavigator();

export default function DrawerItems(){
return(
    <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="CheckIn" component={CheckInStack} />
    </Drawer.Navigator>
    </NavigationContainer>
)
}