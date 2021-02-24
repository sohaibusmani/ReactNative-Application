import React from 'react';
import {View} from 'react-native';

// Component
import DrawerItems from './DrawerItems';

export default function MyDrawer(){
  return(
    <View style={{ flex: 1 }}>
      <DrawerItems/>
    </View>
  )
}