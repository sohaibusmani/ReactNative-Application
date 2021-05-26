import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Header from '../Components/Header'
import Employes from '../Screens/Admin/Screens/Employes';
import EmployeeProfile from '../Screens/Admin/Screens/Employeeprofile';
import EmployeeSummary from '../Screens/Admin/Screens/EmployeeSummary';
import EmployeeHistory from '../Screens/Admin/Screens/EmployeeHistory';


const Stack = createStackNavigator();

function AdminStack(){
    return(
        <Stack.Navigator
            initialRouteName="Employes"
            screenOptions={{ gestureEnabled: false }}
        >
        <Stack.Screen
        name="Employes"
        component={Employes}
        options={({ navigation }) => ({
            headerTitle: () => <Header  title='Employes'/>,
          })}
    />
     <Stack.Screen
        name="EmployeeProfile"
        component={EmployeeProfile}
        options={({ navigation }) => ({
            headerTitle: () => <Header title='Profile'/>,
          })}
    />
     <Stack.Screen
        name="EmployeeSummary"
        component={EmployeeSummary}
        options={({ navigation }) => ({
            headerTitle: () => <Header title='Summary'/>,
          })}
    />
     <Stack.Screen
        name="EmployeeHistory"
        component={EmployeeHistory}
        options={({ navigation }) => ({
            headerTitle: () => <Header title='History'/>,
          })}
    />
    </Stack.Navigator>
    )
}

export default AdminStack;
