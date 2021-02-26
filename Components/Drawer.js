import React from 'react';
import {View, SafeAreaView, StyleSheet, Image} from 'react-native';
import {Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {MaterialIcons} from '@expo/vector-icons';

// Component 
import logo from '../assets/favicon.png'

export default function MyDrawer(props){
  return(
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
         <View style={styles.drawerContent}>
           <View style={styles.userInfoSection}>
            <View>
              <Avatar.Image
               source={logo}
               size={50}
              />
            </View>
           </View>
         </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
         <DrawerItem
          icon={({color, size}) => (<MaterialIcons name='exit-to-app' size={size} color={color}/>)}
          label='Sign Out'
         />
      </Drawer.Section>
    </View>
  )
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1
  },
  userInfoSection:{
    padding: 10,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1
  },

});