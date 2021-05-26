import React, {useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Axios from 'axios';
import img from '../../../assets/favicon.png'
import baseUrl from '../../../Url/BaseUrl';
import { ScrollView } from 'react-native-gesture-handler';

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


function Employes({navigation}){
    const [EmployesList, setEmployesList] = React.useState([])
    
    useEffect(() => {
        getAllEmployees();
      },[])

    const getAllEmployees = () => {
        Axios({
            method:'GET',
            url:`${baseUrl}/user/list`,
        })
        .then(res => {
            console.log(res.data.users);
            setEmployesList(res.data.users);
        })
        .catch(err => {
            console.log(err)
        })
    }
return(
    <ScrollView>
     {
         EmployesList.length > 0 &&
         EmployesList.map((employee, i) => (
            <View style={styles.container} key={i}>
            <View style={styles.container_text}>
            <TouchableOpacity onPress={() => {navigation.navigate('EmployeeProfile',{
                employeeId: employee._id
            })}}>
                <Text style={styles.title}>
                   {employee.name}
                </Text>
                <Text style={styles.description}>
                    Employee
                </Text>
                </TouchableOpacity>
            </View>   
        </View>   
         ))
     }
    </ScrollView>
)
}

export default Employes;