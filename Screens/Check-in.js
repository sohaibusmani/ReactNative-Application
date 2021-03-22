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
    const [criteria, setCriteria] = React.useState([])
    const [currentDate, setCurrentDate] = React.useState('');
    const [showCard, setShowCard] = React.useState(false);
    

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
        setShowCard(true);
      }
    

    return (
        <View style={styles.screen}>
            <Text>CheckIn</Text>
        </View>
    )
}

export default CheckIn;