import React from 'react';
import {View, SafeAreaView, StyleSheet, Image} from 'react-native';
import {Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer'

// Component 
import logo from '../assets/favicon.png'

export default function MyDrawer(props){
  return(
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
         <View>
           <Text>
             Main Content
           </Text>
         </View>
      </DrawerContentScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1
  },

});