import React from 'react';
import  { useEffect } from 'react';
import {View, Text, ScrollView,StyleSheet, ActivityIndicator, Dimensions} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {Card, Paragraph} from 'react-native-paper';
import SyncStorage from 'sync-storage';
import Axios from 'axios';
import baseUrl from '../../../Url/BaseUrl';
import moment from 'moment';

const WIDTH = Dimensions.get('window').width;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center"
    },
    horizontal: {
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 10
    },
    txtHeader:{
      fontSize:22, fontWeight:"bold", color:"rgba(0,0,0,0.5)",
      marginLeft: WIDTH*0.6 - 130, marginTop: 35
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

function Home({route, navigation}){
    const {employeeId} = route.params;
    const [shifts, setShifts] = React.useState([]);
    const [singleShift, setSingleShift] = React.useState({});
    const [loading, setLoading] = React.useState(true)


    useEffect(() => {
      getMonthData();
    },[])

   const getMonthData = () => {
    
      Axios({
        method:'GET',
        url:`${baseUrl}/shift/get-current-month`,
        params:{
          userId: employeeId
        }
      })
      .then(res => {
        setShifts(res.data.shifts);
        setLoading(false)
      })
      .catch(err => {
        console.log(err)
      })
   }

   const getShiftByDate = (date) => {

     Axios({
       method:'GET',
       url:`${baseUrl}/shift/get-single`,
       params:{
        userId: employeeId,
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
     
         loading
         ?
         <View style={[styles.container, styles.horizontal]}>
         <ActivityIndicator size="large" color="#009688" />
         </View>
         :
         <View style={{flex: 1}}>
    <View style={{flex: 1}}>
    <View style={styles.viewHeader}>
         <Text style={styles.txtHeader}>History</Text>
       </View>
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
                    <Card.Title title={moment(singleShift.createdAt).format('DD/MM/YYYY')} />
                    <Card.Content>
                    <View style={{ flexDirection: 'row',marginTop:10, justifyContent:'center' }}>
                        <Paragraph style={{fontWeight:'bold'}}>Shift Start :</Paragraph>
                        <Text style={{marginTop: 3, marginLeft: 3}}>{moment(singleShift.shiftStartTime).format('hh:mm:ss a')}</Text>
                      </View>
                     {
                      singleShift.breakTime.length > 0 && singleShift.breakTime.map((br, i) => (
                        <View key={i} style={{flexDirection:'row', justifyContent:'space-between', marginTop:10}}>
                        <View style={{flexDirection:'row'}}>
                        <Paragraph style={{fontWeight:'bold'}}>Break Start :</Paragraph>
                        <Text style={{marginTop: 3, marginLeft: 3}}>{moment(br.breakStart).format('hh:mm:ss a')}</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                        <Paragraph style={{fontWeight:'bold'}}>Break End :</Paragraph>
                        <Text style={{marginTop: 3, marginLeft: 3}}>{moment(br.breakEnd).format('hh:mm:ss a')}</Text>
                        </View>
                      </View>
                      
                      ))
                     }
                      <View style={{ flexDirection: 'row', justifyContent:'center', marginTop:10 }}>
                        <Paragraph style={{fontWeight:'bold'}}>Shift End :</Paragraph>
                        <Text style={{marginTop: 3, marginLeft: 3}}>{moment(singleShift.shiftEndTime).format('hh:mm:ss a')}</Text>
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
                      <View style={{ flexDirection: 'row', marginTop:10, justifyContent:'center' }}>
                          <Paragraph style={{fontWeight:'bold'}}>Shift Start :</Paragraph>
                          <Text style={{marginTop: 3, marginLeft: 3}}>{moment(shift.shiftStartTime).format('hh:mm:ss a')}</Text>
                        </View>
                       {
                        shift.breakTime.length > 0 && shift.breakTime.map((br, i) => (
                          <View key={i} style={{flexDirection:'row', justifyContent:'space-between', marginTop:10}}>
                          <View style={{flexDirection:'row'}}>
                          <Paragraph style={{fontWeight:'bold'}}>Break Start :</Paragraph>
                          <Text style={{marginTop: 3, marginLeft: 3}}>{moment(br.breakStart).format('hh:mm:ss a')}</Text>
                          </View>
                          <View style={{flexDirection:'row'}}>
                          <Paragraph style={{fontWeight:'bold'}}>Break End :</Paragraph>
                          <Text style={{marginTop: 3, marginLeft: 3}}>{moment(br.breakEnd).format('hh:mm:ss a')}</Text>
                          </View>
                        </View>
                        
                        ))
                       }
                        <View style={{ flexDirection: 'row', justifyContent:'center', marginTop:10 }}>
                          <Paragraph  style={{fontWeight:'bold'}}>Shift End :</Paragraph>
                          <Text style={{marginTop: 3, marginLeft: 3}}>{moment(shift.shiftEndTime).format('hh:mm:ss a')}</Text>
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


 