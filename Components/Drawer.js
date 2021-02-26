import React from 'react';
import {View, SafeAreaView, StyleSheet, Image} from 'react-native';
import {Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {MaterialIcons} from '@expo/vector-icons';

// Component 
import logo from '../assets/me.jpg'

export default function MyDrawer(props){
  return(
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
         <View style={styles.drawerContent}>
           <View style={styles.userInfoSection}>
            <View style={{flexDirection:'row'}}>
              <Avatar.Image
               source={logo}
               size={50}
              />
              <View style={{marginLeft: 20, marginTop: 5}}>
                <Title>Sohaib Usmani</Title>
              </View>
            </View>
           </View>
           <Drawer.Section style={styles.drawerSection}>
             <DrawerItem
              icon={({color, size}) => (<MaterialIcons name='home' size={size} color={color}/>)}
              label='Home'
             />
           </Drawer.Section>
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
  drawerSection:{
   marginTop: 10
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1
  },

});