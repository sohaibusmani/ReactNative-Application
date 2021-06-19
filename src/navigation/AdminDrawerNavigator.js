import React from 'react';
import { View, SafeAreaView, StyleSheet, Image, ImageBackground } from 'react-native';
import { Avatar, Title, Text } from 'react-native-paper';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import SyncStorage from 'sync-storage';
import image from '../assets/pic1.jpg';
import Employes from '../Screens/Admin/Screens/Employes';
import Signup from '../Screens/Signup';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();

export default function MyDrawer(props) {

    return (
        <Drawer.Navigator drawerContent={prop => <DrawerContent {...prop} {...props} />}>
            <Drawer.Screen name="Employes" component={Employes} />
            <Drawer.Screen name="Signup" component={Signup} />
        </Drawer.Navigator>
    )
}

const DrawerContent = (props) => {
    const user = SyncStorage.get('newUser')
    // console.log('rawer', user)


    return (  
        <View style={{ flex: 1 }}>
            <View style={styles.drawerContent}>
               <ImageBackground source={image} style={styles.image}>
               <View style={styles.userInfoSection}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ marginLeft: 10, marginTop: 5 }}>
                            <Title style={{color:'white'}}>Admin</Title>
                        </View>
                    </View>
                </View>
               </ImageBackground>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate('Employes')}
                    style={{ marginTop: 35, marginLeft: 15, flexDirection: 'row' }}>
                    <MaterialIcons name="people" size={20} color="black" />
                    <Text style={{marginLeft:10, fontSize:16}}>Employes</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => props.navigation.navigate('Signup')}
                style={{ marginTop: 35, marginLeft: 15,flexDirection: 'row' }}>
                   <MaterialIcons name="add" size={20} color="black" />
                <Text style={{marginLeft:10, fontSize:16}}>Add Employes</Text>
            </TouchableOpacity>
            </View>
           
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
    },
    image: {
       height: 200,
       justifyContent:"flex-end"
    },
});