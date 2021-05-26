import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import Axios from 'axios';
import baseUrl from '../../../Url/BaseUrl';

const styles = StyleSheet.create({
    cardContainer: {
       marginTop: 10,
    },
    cardContent: {
        alignItems:'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 30
    },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#009688",
        paddingVertical: 10,
        paddingHorizontal: 12,
        width: 120,
      },
      appButtonText: {
        color: "#fff",
        alignSelf: "center",
      }
})

export default function Profile({route, navigation}) {
    const [Employee, setEmployee] = React.useState({});
    const {employeeId} = route.params;

    useEffect(() => {
        getEmployeeDetails();
      },[])

    const getEmployeeDetails = () => {
        Axios({
            method:'GET',
            url:`${baseUrl}/user/details`,
            params:{
                userId: employeeId
            }
        })
        .then(res => {
            console.log(res.data.user);
            setEmployee(res.data.user);
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <View>
            <View style={styles.cardContainer}>
            <Card style={{borderRadius: 25, elevation: 3}}>
                <Card.Content>
                    <View style={styles.cardContent}>
                    <Title>{Employee.name}</Title>
                    <Paragraph>{Employee.username}</Paragraph>
                    <Title style={{marginTop: 10}}>
                        Role
                    </Title>
                    <Paragraph>Shift Incharge</Paragraph>
                    </View>
                    <View style={styles.buttonContainer}>                  
                            <TouchableOpacity style={styles.appButtonContainer} onPress={() => {console.log(token)}}>
                               <Text style={styles.appButtonText}>
                                   History
                               </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.appButtonContainer}>
                               <Text style={styles.appButtonText}>
                                   Summary
                               </Text>
                            </TouchableOpacity>
                             
                    </View>
                </Card.Content>
            </Card>
            <View style={{marginTop: 20, marginLeft: 20}}>
                <Title>
                    Wage Per Hour
                </Title>
                <Paragraph>
                    PKR {Employee.wedge}
                </Paragraph>
            </View>
            </View>
        </View>
    )
}