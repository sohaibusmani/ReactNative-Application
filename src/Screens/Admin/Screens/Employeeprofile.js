import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
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
      },
      loaderContainer: {
        flex: 1,
        justifyContent: "center"
      },
      horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
      }
})

export default function Profile({route, navigation}) {
    const {employeeId} = route.params;
    const [Employee, setEmployee] = React.useState({});
    const [loading, setLoading] = React.useState(true)

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
            setLoading(false)
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
       loading
       ?
        <View style={[styles.loaderContainer, styles.horizontal]}>
         <ActivityIndicator size="large" color="#009688" />
         </View>
       :
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
               <Paragraph>{Employee.designation}</Paragraph>
               </View>
               <View style={styles.buttonContainer}>                  
                       <TouchableOpacity style={styles.appButtonContainer} onPress={() => {navigation.navigate('EmployeeHistory',{employeeId: employeeId})}}>
                          <Text style={styles.appButtonText}>
                              History
                          </Text>
                       </TouchableOpacity>
                       <TouchableOpacity style={styles.appButtonContainer} onPress={() => {navigation.navigate('EmployeeSummary',{employeeId: employeeId})}}>
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