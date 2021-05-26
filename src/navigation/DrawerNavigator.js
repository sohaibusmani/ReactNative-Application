import React from 'react';
import { View, SafeAreaView, StyleSheet, Image } from 'react-native';
import { Avatar, Title, Caption, Paragraph, Text, TouchableRipple, Switch } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem, createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons';
import SyncStorage from 'sync-storage';

// Component 
import logo from '../assets/me.jpg'

import Home from '../Screens/Home';
import CheckIn from '../Screens/Check-in'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'native-base';
import Employes from '../Screens/Admin/Screens/Employes';

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
    const user = SyncStorage.get('newUser')

    const handleLogout = () => {

        SyncStorage.remove("token")
        SyncStorage.remove("newUser")
        props.navigation.navigate("Login")
    }

    return (  
        <View style={{ flex: 1 }}>
            <View style={styles.drawerContent}>
                <View style={styles.userInfoSection}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ marginLeft: 10, marginTop: 5 }}>
                            <Title>{user.user.name}</Title>
                        </View>
                    </View>
                </View>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate('Home')}
                    style={{ marginTop: 25, marginLeft: 15, flexDirection: 'row' }}
                >
                    <Icon name='home' type='FontAwesome' style={{ fontSize: 18 }} />
                    <Text>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => props.navigation.navigate('CheckIn')}
                    style={{ marginTop: 35, marginLeft: 15, flexDirection: 'row' }}>
                    <Icon name='check' type='FontAwesome' style={{ fontSize: 18 }} />
                    <Text>Check Inn</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                onPress={() => { handleLogout() }}
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