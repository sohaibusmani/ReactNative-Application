import React from 'react';
import  { useEffect } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {Card, Avatar} from 'react-native-paper';
import SyncStorage from 'sync-storage';
import Axios from 'axios';
import baseUrl from '../Url/BaseUrl';
import Header from '../Components/Header';

function Home({navigation}){
    const [items, setItems] = React.useState({});


    useEffect(() => {
      getMonthData();
    })

   const getMonthData = () => {
     const user = SyncStorage.get('newUser');
      Axios({
        method:'GET',
        url:`${baseUrl}/shift/get-current-month`,
        params:{
          userId: user.user._id
        }
      })
      .then(res => {
        console.log(res.data.shifts)
      })
      .catch(err => {
        console.log(err)
      })
   }

    return(
     <View style={{flex: 1}}>
    <View style={{flex: 1}}>
      <Calendar
      current={new Date()}
      onDayPress={(day) => {console.log('selected day', day)}}
      />
    </View>
    </View>  
    )
}
 
export default Home;


 