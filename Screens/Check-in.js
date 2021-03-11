import React from 'react';
import {View, Text} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';


function CheckIn({navigation}){
    const [criteria, setCriteria] = React.useState('')

    return(
    <View style={{flex:1}}>
        <DropDownPicker
    items={[
        {label: 'USA', value: 'usa'},
        {label: 'UK', value: 'uk', },
        {label: 'France', value: 'france'},
    ]}
    defaultValue={criteria}
    containerStyle={{height: 40}}
    style={{backgroundColor: '#fafafa'}}
    itemStyle={{
        justifyContent: 'flex-start'
    }}
    dropDownStyle={{backgroundColor: '#fafafa'}}
    onChangeItem={item => setCriteria(item.value)}
/>
    </View>
    )
}

export default CheckIn;