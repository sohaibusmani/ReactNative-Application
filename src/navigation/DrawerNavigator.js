import React from 'react';
import { View, SafeAreaView, StyleSheet, Image } from 'react-native';
import { Avatar, Title, Caption, Paragraph, Text, TouchableRipple, Switch } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem, createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons';

// Component 
import logo from '../assets/me.jpg'

import Home from '../Screens/Home';
import CheckIn from '../Screens/Check-in'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'native-base';

const Drawer = createDrawerNavigator();

export default function MyDrawer(props) {

    return (
        <Drawer.Navigator drawerContent={prop => <DrawerContent {...prop} {...props} />}>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="CheckIn" component={CheckIn} />
        </Drawer.Navigator>
    )
}

const DrawerContent = (props) => {
    return (
        // <View style={{ flex: 1 }}>
        //     <DrawerContentScrollView {...props}>
        //         <View style={styles.drawerContent}>
        //             <View style={styles.userInfoSection}>
        //                 <View style={{ flexDirection: 'row' }}>
        //                     <Avatar.Image
        //                         source={logo}
        //                         size={50}
        //                     />
        //                     <View style={{ marginLeft: 20, marginTop: 5 }}>
        //                         <Title>Sohaib Usmani</Title>
        //                     </View>
        //                 </View>
        //             </View>
        //             <Drawer.Section style={styles.drawerSection}>
        //                 <DrawerItem
        //                     icon={({ color, size }) => (<MaterialIcons name='home' size={size} color={color} />)}
        //                     label='Home'
        //                     onPress={() => { props.navigation.navigate('Home') }}
        //                 />
        //                 <DrawerItem
        //                     icon={({ color, size }) => (<MaterialIcons name='access-time' size={size} color={color} />)}
        //                     label='Check-In'
        //                     onPress={() => { props.navigation.navigate('CheckIn') }}
        //                 />
        //             </Drawer.Section>
        //             <Drawer.Section title='Preferences'>
        //                 <TouchableRipple onPress={() => { toggleTheme() }}>
        //                     <View style={styles.preference}>
        //                         <Text>Dark Theme</Text>
        //                         <View pointerEvents='none'>
        //                             <Switch />
        //                         </View>
        //                     </View>
        //                 </TouchableRipple>
        //             </Drawer.Section>
        //         </View>
        //     </DrawerContentScrollView>
        //     <Drawer.Section style={styles.bottomDrawerSection}>
        //         <DrawerItem
        //             icon={({ color, size }) => (<MaterialIcons name='exit-to-app' size={size} color={color} />)}
        //             label='Sign Out'
        //         />
        //     </Drawer.Section>
        // </View>
        <View style={{ flex: 1 }}>
            {/* <Text>
                Heading here
            </Text>
          */}
            <View style={styles.drawerContent}>
              <View style={styles.userInfoSection}>
              <View style={{ flexDirection: 'row' }}>
                            <Avatar.Image
                                source={logo}
                                size={50}
                            />
                            <View style={{ marginLeft: 20, marginTop: 5 }}>
                                <Title>Sohaib Usmani</Title>
                            </View>
                        </View>
              </View>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Home')}
                style={{  marginTop: 25, marginLeft: 15, flexDirection:'row' }}
                >
                    <Icon name='home' type='FontAwesome' style={{fontSize:18}}/>
                <Text>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => props.navigation.navigate('CheckIn')}
                style={{  marginTop: 35, marginLeft: 15,flexDirection:'row' }}>
                    <Icon name='check' type='FontAwesome' style={{fontSize:18}}/>
                <Text>Check Inn</Text>
            </TouchableOpacity> 
            </View>
            <TouchableOpacity
                onPress={() => props.navigation.navigate('CheckIn')}
                style={{ height: 60, margin: 15, justifyContent: "center" }}>
                <Text>Sign Out</Text>
            </TouchableOpacity> 
        </View>
    )
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1
    },
    userInfoSection: {
        padding: 10,
    },
    drawerSection: {
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