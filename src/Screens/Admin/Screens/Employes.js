import React, {useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Axios from 'axios';
import {Avatar} from 'react-native-paper';
import baseUrl from '../../../Url/BaseUrl';
import { ScrollView } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';


const WIDTH = Dimensions.get('window').width;


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
        fontSize: 18,
        color: '#000',
        fontWeight:'bold'
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
    txtHeader:{
        fontSize:22, fontWeight:"bold", color:"rgba(0,0,0,0.5)",
        marginLeft: WIDTH*0.5 - 130, marginTop: 35
      },
      btnMenu:{
        marginTop:42, marginLeft:15,
      },
      viewHeader:{
        width: WIDTH, height: 75, zIndex:1000, 
        flexDirection:"row",
        shadowColor: "#000",
         shadowOffset: {
           width: 0,
           height: 3,
         },
         shadowOpacity: 0.29,
         shadowRadius: 4.65,
    
         elevation: 7,
      }
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
    <View style={{flex: 1}}>
        <View style={styles.viewHeader}>
         <TouchableOpacity onPress={()=> navigation.toggleDrawer()} style={styles.btnMenu}>
            <Feather name="menu" size={22} color="black" />         
         </TouchableOpacity>
         <Text style={styles.txtHeader}>Time Tracking App</Text>
       </View>
    <ScrollView>
     {
         EmployesList.length > 0 &&
         EmployesList.map((employee, i) => (
            <View style={styles.container} key={i}>
            <View style={styles.container_text}>
            <TouchableOpacity  onPress={() => {navigation.navigate('EmployeeProfile',{
                employeeId: employee._id
            })}}>
                <Text style={styles.title}>
                   {employee.name}
                </Text>
                <Text>
                    {employee.designation}
                </Text>
                </TouchableOpacity>
            </View>   
        </View>   
         ))
     }
    </ScrollView>
    </View>
)
}

export default Employes;