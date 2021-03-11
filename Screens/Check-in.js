import React from 'react';
import {View, Text} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


function CheckIn({navigation}){
    const [criteria, setCriteria] = React.useState('')
    console.log(criteria);

    return(
    <View style={{flex: 1, justifyContent: 'center'}}>
        <DropDownPicker
    items={[
        {label: 'Check-In', value: 'checkIn', icon: () => <Feather name="check" size={18} style={{marginEnd:10}} color='black' />},
        {label: 'Check-Out', value: 'checkOut', icon: () => <MaterialIcons name="exit-to-app" style={{marginEnd:10}} size={18} color="black" /> },
        {label: 'Break-Start', value: 'breakStart', icon: () => <MaterialIcons name="free-breakfast" style={{marginEnd:10}} size={18} color='black' />},
        {label: 'Break-End', value: 'breakEnd', icon: () => <MaterialCommunityIcons name="format-page-break" style={{marginEnd:10}} size={18} color='black' />},
    ]}
    defaultValue={criteria}
    containerStyle={{height: 70}}
    style={{backgroundColor: '#fafafa'}}
    itemStyle={{
        justifyContent: 'space-between',
        padding: 10

    }}
    dropDownStyle={{backgroundColor: '#fafafa'}}
    onChangeItem={item => setCriteria(item.value)}
/>
    </View>
    )
}

export default CheckIn;