import React from 'react';
import  { useEffect } from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {Card, Paragraph} from 'react-native-paper';
import SyncStorage from 'sync-storage';
import Axios from 'axios';
import baseUrl from '../Url/BaseUrl';
import Header from '../Components/Header';
import moment from 'moment';

function Home({navigation}){
    const [shifts, setShifts] = React.useState([]);
    const [singleShift, setSingleShift] = React.useState({});


    useEffect(() => {
      getMonthData();
    },[])

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
        setShifts(res.data.shifts);
      })
      .catch(err => {
        console.log(err)
      })
   }

   const getShiftByDate = (date) => {
    const user = SyncStorage.get('newUser');
     Axios({
       method:'GET',
       url:`${baseUrl}/shift/get-single`,
       params:{
        userId: user.user._id,
         date,
       }
     })
     .then(res => {
       console.log(res.data, 'single shift');
       setSingleShift(res.data.shift)
       setShifts([])
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
      onDayPress={(day) => {getShiftByDate(day.dateString)}}
      />
    <ScrollView>
      <View>
      { 
      singleShift._id
        && 
        <View style={{flex:1}}>
        <Card style={{ borderRadius: 25, marginTop: 20 }}>
                    <Card.Title title={moment(singleShift.createdAt).format('DD/MM/YYYY')} subtitle={singleShift.userId} />
                    <Card.Content>
                      <View style={{ flexDirection: 'row' }}>
                        <Paragraph>Shift Start :</Paragraph>
                        <Text style={{marginTop: 3, marginLeft: 3}}>{singleShift.shiftStartTime}</Text>
                      </View>
                     {
                      singleShift.breakTime.length > 0 && singleShift.breakTime.map((br, i) => (
                        <View key={i}>
                        <View style={{flexDirection:'row'}}>
                        <Paragraph>Break Start :</Paragraph>
                        <Text style={{marginTop: 3, marginLeft: 3}}>{br.breakStart}</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                        <Paragraph>Break End :</Paragraph>
                        <Text style={{marginTop: 3, marginLeft: 3}}>{br.breakEnd}</Text>
                        </View>
                      </View>
                      
                      ))
                     }
                      <View style={{ flexDirection: 'row' }}>
                        <Paragraph>Shift End :</Paragraph>
                        <Text style={{marginTop: 3, marginLeft: 3}}>{singleShift.shiftEndTime}</Text>
                      </View>
                    </Card.Content>
                  </Card>
        </View>
      }
      { 
      shifts.length > 0 
        && 
        shifts.map((shift, i) => (
          <View style={{flex:1}} key={i}>
          <Card style={{ borderRadius: 25, marginTop: 20 }}>
                      <Card.Title title={moment(shift.createdAt).format('DD/MM/YYYY')} subtitle={shift.userId} />
                      <Card.Content>
                        <View style={{ flexDirection: 'row' }}>
                          <Paragraph>Shift Start :</Paragraph>
                          <Text style={{marginTop: 3, marginLeft: 3}}>{shift.shiftStartTime}</Text>
                        </View>
                       {
                        shift.breakTime.length > 0 && shift.breakTime.map((br, i) => (
                          <View key={i}>
                          <View style={{flexDirection:'row'}}>
                          <Paragraph>Break Start :</Paragraph>
                          <Text style={{marginTop: 3, marginLeft: 3}}>{br.breakStart}</Text>
                          </View>
                          <View style={{flexDirection:'row'}}>
                          <Paragraph>Break End :</Paragraph>
                          <Text style={{marginTop: 3, marginLeft: 3}}>{br.breakEnd}</Text>
                          </View>
                        </View>
                        
                        ))
                       }
                        <View style={{ flexDirection: 'row' }}>
                          <Paragraph>Shift End :</Paragraph>
                          <Text style={{marginTop: 3, marginLeft: 3}}>{shift.shiftEndTime}</Text>
                        </View>
                      </Card.Content>
                    </Card>
          </View>
        ))
        
      }
      </View>
    </ScrollView>
    </View>
    </View>  
    )
}
 
export default Home;


 