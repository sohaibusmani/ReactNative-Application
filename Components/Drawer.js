import React from 'react';
import {View, SafeAreaView, StyleSheet, Image} from 'react-native';

// Component
import DrawerItems from './DrawerItems';
import logo from '../assets/favicon.png'

export default function MyDrawer(props){
  return(
    <SafeAreaView style={{ flex: 1 }}>
      <DrawerItems/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: 'center',
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
});