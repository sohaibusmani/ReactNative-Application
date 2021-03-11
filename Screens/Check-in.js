import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Button, Card } from 'react-native-paper';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useEffect } from 'react';
import { Text } from 'native-base';

const styles = StyleSheet.create({
    screen:{
        flex: 1,
         justifyContent: 'center'
    },
    btn: {
        margin: 20,
        backgroundColor: '#66bbb9',
        height: 38
    },
    card: {
        margin: 10,
        backgroundColor: '#66bbb9',
        borderRadius: 10,
        height: 100
    }

})


function CheckIn({ navigation }) {
    const [criteria, setCriteria] = React.useState('');
    const [currentDate, setCurrentDate] = React.useState('');

    

      const getDate = () => {
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes
        var sec = new Date().getSeconds(); //Current Seconds
        setCurrentDate(
          date + '/' + month + '/' + year 
          + ' ' + hours + ':' + min + ':' + sec
        );
      }
    

    return (
        <View style={styles.screen}>
            <View style={{flexDirection: 'row', justifyContent:'space-evenly', padding: 10}}>
            <DropDownPicker
                items={[
                    { label: 'Check-In',  value: 'checkIn', icon: () => <Feather name="check" size={18} style={{ marginEnd: 10 }} color='black' /> },
                    { label: 'Check-Out', value: 'checkOut', icon: () => <MaterialIcons name="exit-to-app" style={{ marginEnd: 10 }} size={18} color="black" /> },
                    { label: 'Break-Start', value: 'breakStart', icon: () => <MaterialIcons name="free-breakfast" style={{ marginEnd: 10 }} size={18} color='black' /> },
                    { label: 'Break-End', value: 'breakEnd', icon: () => <MaterialCommunityIcons name="format-page-break" style={{ marginEnd: 10 }} size={18} color='black' /> },
                ]}
                defaultValue={criteria}
                containerStyle={{ height: 45, flex: 1 , flexWrap: 'wrap', marginTop: 15 }}
                style={{ backgroundColor: '#fafafa'}}
                itemStyle={{
                    justifyContent: 'space-between',
                    padding: 10, 

                }}
                dropDownStyle={{ backgroundColor: '#fafafa' }}
                onChangeItem={item => setCriteria(item.value)}
            />
            <Button mode='contained' style={styles.btn} onPress={getDate}>
                Start
            </Button>
            </View>
            <TouchableOpacity style={{marginRight: 10, marginTop: 17}}>
                 <Card style={styles.card}>
                     <Card.Content>
                         <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', padding: 20}}>
                             <Text style={{color: 'white'}}>
                                 {criteria}
                             </Text>
                             <Text style={{color: 'white'}}>
                                 {currentDate}
                             </Text>
                         </View>
                     </Card.Content>
                 </Card>
               </TouchableOpacity>
        </View>
    )
}

export default CheckIn;