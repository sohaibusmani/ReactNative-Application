import React from 'react';
import {View, SafeAreaView, StyleSheet, Image} from 'react-native';
import {Avatar, Title, Caption, Paragraph, Text, TouchableRipple, Switch} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem, createDrawerNavigator} from '@react-navigation/drawer';
import {MaterialIcons} from '@expo/vector-icons';

// Component 
import logo from '../assets/me.jpg'

import Home from '../Screens/Home';
import CheckIn from '../Screens/Check-in'

const Drawer = createDrawerNavigator();

export default function MyDrawer(props){


 return(
    <Drawer.Navigator drawerContent={prop => <DrawerContent {...prop} {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="CheckIn" component={CheckIn} />
    </Drawer.Navigator>
  )
 }

  const DrawerContent = (props, {navigation}) => {
    return(
//       <View style={{ flex: 1 }}>
//     <DrawerContentScrollView {...props}>
//        <View style={styles.drawerContent}>
//          <View style={styles.userInfoSection}>
//           <View style={{flexDirection:'row'}}>
//             <Avatar.Image
//              source={logo}
//              size={50}
//             />
//             <View style={{marginLeft: 20, marginTop: 5}}>
//               <Title>Sohaib Usmani</Title>
//             </View>
//           </View>
//          </View>
//          <Drawer.Section style={styles.drawerSection}>
//            <DrawerItem
//             icon={({color, size}) => (<MaterialIcons name='home' size={size} color={color}/>)}
//             label='Home'
//             onPress={() => {props.navigation.navigate('Home')}}
//            />
//             <DrawerItem
//             icon={({color, size}) => (<MaterialIcons name='access-time' size={size} color={color}/>)}
//             label='Check-In'
//             onPress={() => {props.navigation.navigate('CheckIn')}}
//            />
//          </Drawer.Section>
//          <Drawer.Section title='Preferences'>
//            <TouchableRipple onPress={() => {toggleTheme()}}>
//              <View style={styles.preference}>
//                <Text>Dark Theme</Text>
//                <View pointerEvents='none'>
//                 <Switch/>
//                </View>
//              </View>
//            </TouchableRipple>
//          </Drawer.Section>
//        </View>
//     </DrawerContentScrollView>
//     <Drawer.Section style={styles.bottomDrawerSection}>
//        <DrawerItem
//         icon={({color, size}) => (<MaterialIcons name='exit-to-app' size={size} color={color}/>)}
//         label='Sign Out'
//        />
//     </Drawer.Section>
//   </View>
<View>
  <Text>
      Chal gaya
  </Text>
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
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16
  }
});