import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import img from '../../../assets/favicon.png'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection: 'row',
        padding: 10,
        marginLeft:16,
        marginRight:16,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 5,
        // backgroundColor: '#FFF',
        // elevation: 2,
    },
    title: {
        fontSize: 16,
        color: '#000',
    },
    container_text: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 12,
        justifyContent: 'center',
    },
    description: {
        fontSize: 11,
        fontStyle: 'italic',
    },
    photo: {
        height: 50,
        width: 50,
    },
});

const EmployesRow = ({ title, designation, navigation }) => (
    
    <View style={styles.container}>
        <View style={styles.container_text}>
        <TouchableOpacity onPress={() => {navigation.navigate('EmployeeProfile')}}>
            <Text style={styles.title}>
               Sohaib Usmani
            </Text>
            <Text style={styles.description}>
                Shift Incharge
            </Text>
            </TouchableOpacity>
        </View>   
    </View>   

);

export default EmployesRow;