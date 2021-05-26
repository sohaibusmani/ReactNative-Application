import React, { useEffect } from 'react';
import { View, StyleSheet, ImageBackground, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { Entypo } from '@expo/vector-icons';
import SyncStorage from 'sync-storage';
import moment from 'moment';
import Axios from 'axios';
import baseUrl from '../Url/BaseUrl';


import image from '../assets/pic2.jpg';


const styles = StyleSheet.create({
  screen: {
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
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    // borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: '60%',
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
})


function CheckIn({ navigation }) {

  const user = SyncStorage.get('newUser');
  console.log('user ka data', user);

  const [checkIn, setCheckIn] = React.useState('');
  const [breakStart, setBreakStart] = React.useState('');
  const [breakEnd, setBreakEnd] = React.useState('');
  const [checkOut, setCheckOut] = React.useState('');
  const [isCheckedIn, setIsCheckedIn] = React.useState(false);
  const [isOnBreak, setIsOnBreak] = React.useState(false);
  const [isCheckedOut, setIsCheckedOut] = React.useState(false);
  const [isBreakEnd, setIsBreakEnd] = React.useState(false);


  const handleSetCheckInTime = (time) => {

    console.log(time);
    setCheckIn(time);
    setIsCheckedIn(true)
    let user = SyncStorage.get("newUser");
    let tempSchedule = user.schedule;
    tempSchedule.checkInTime = time
    user.schedule = tempSchedule;
    console.log(user.schedule)
    SyncStorage.set("newUser", user);

  }

  const handleSetBreakStartTime = (time) => {

    setBreakStart(time);
    setIsOnBreak(true);
    const user = SyncStorage.get('newUser');
    console.log(user.schedule)
    let tempArrBreak = user.schedule.break;

    console.log(tempArrBreak)

    tempArrBreak.push({ breakStart: time, breakEnd: "" });
    console.log(tempArrBreak)
    user.schedule.break = tempArrBreak;

    SyncStorage.set('newUser', user)
  }

  const handleSetBreakEndTime = (time) => {
    const user = SyncStorage.get('newUser');
    const tempBreak = user.schedule.break;
    const tempIndex = tempBreak.length;

    tempBreak[tempIndex - 1].breakEnd = time;
    user.break = tempBreak;
    SyncStorage.set('newUser', user)

    console.log(user)

    setBreakEnd(time);
    setIsOnBreak(false);
    setIsBreakEnd(true);
  }


  const handleSetCheckOutTime = (time) => {
    setCheckOut(time);
    setIsCheckedIn(false);
    setIsCheckedOut(true)
    let user = SyncStorage.get("newUser");
    let tempSchedule = user.schedule;
    tempSchedule.checkOutTime = time
    user.schedule = tempSchedule;
    console.log(user.schedule)
    SyncStorage.set("newUser", user);

  }

  const handleSaveData = () => {

     Axios({
       method:'POST',
       url:`${baseUrl}/shift/save`,
       data:{
         userId: user.user._id,
         shiftStartTime: user.schedule.checkInTime,
         breakTime: user.schedule.break,
         shiftEndTime: user.schedule.checkOutTime

       }
     })
     .then(res => {
       console.log('Shift Save Sucessfully')
     })
     .catch(err => {
       console.log(err.response.data.message)
     })
  }

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground resizeMode='cover' style={styles.image} style={{ height: 200 }} source={image}>
      </ImageBackground>
      <ScrollView>
        <View style={{ marginTop: 20 }}>
          {
            user.schedule.checkInTime &&

            <View>
              <View>
                <Card style={{ borderRadius: 25 }}>
                  <Card.Title title="Sohaib Usmani" subtitle="Employee" />
                  <Card.Content>
                    <View style={{ flexDirection: 'row' }}>
                      <Entypo name="back-in-time" size={20} color="black" />
                      <Text style={{ marginLeft: 5 }}>{checkIn}</Text>
                    </View>
                    <Paragraph>Checked In</Paragraph>
                  </Card.Content>
                </Card>
              </View>
            </View>
          }
          {
            user.schedule.break.map((el, i) => (
              <View key={i}>
                <Card style={{ borderRadius: 25, marginTop: 20 }}>
                  <Card.Title title="Sohaib Usmani" subtitle="Employee" />
                  <Card.Content>
                    <View style={{ flexDirection: 'row', justifyContent:'space-between' }}>
                    <View style={{ flexDirection: 'row' }}>
                      <Entypo name="back-in-time" size={20} color="black" />
                      <Text style={{ marginLeft: 5 }}>{el.breakStart}</Text>
                    </View>
                  
                    <View style={{ flexDirection: 'row' }}>
                    <Entypo name="back-in-time" size={20} color="black" />
                    <Text style={{ marginLeft: 5 }}>{el.breakEnd}</Text>
                    </View>
                    
                    </View>
                    <Paragraph>Break</Paragraph>
                  </Card.Content>
                </Card>
              </View>
            ))
          }
           {
            user.schedule.checkOutTime &&

            <View>
              <View>
                <Card style={{ borderRadius: 25, marginTop: 20 }}>
                  <Card.Title title="Sohaib Usmani" subtitle="Employee" />
                  <Card.Content>
                    <View style={{ flexDirection: 'row' }}>
                      <Entypo name="back-in-time" size={20} color="black" />
                      <Text style={{ marginLeft: 5 }}>{checkOut}</Text>
                    </View>
                    <Paragraph>Checked Out</Paragraph>
                  </Card.Content>
                </Card>
              </View>
            </View>
          }
          {
            isCheckedIn && isOnBreak
              ?
              <View style={{ alignItems: 'center', marginTop: 20 }}>
                <TouchableOpacity style={styles.appButtonContainer} onPress={() => handleSetBreakEndTime(moment().format('hh:mm:ss a'))}>
                  <Text style={styles.appButtonText}>
                    Break End
            </Text>
                </TouchableOpacity>
              </View>
              :
              isCheckedIn &&
              <View style={{ alignItems: 'center', marginTop: 20 }}>
                <TouchableOpacity style={styles.appButtonContainer} onPress={() => handleSetBreakStartTime(moment().format('hh:mm:ss a'))}>
                  <Text style={styles.appButtonText}>
                    Break Start
            </Text>
                </TouchableOpacity>
              </View>
          }
          {
            isCheckedIn
              ?
              <View style={{ alignItems: 'center', marginTop: 20 }}>
                <TouchableOpacity style={styles.appButtonContainer} onPress={() => handleSetCheckOutTime(moment().format('hh:mm:ss a'))}>
                  <Text style={styles.appButtonText}>
                    Check out
            </Text>
                </TouchableOpacity>
              </View>
              :
              <View style={{ alignItems: 'center', marginTop: 20 }}>
                <TouchableOpacity style={styles.appButtonContainer} onPress={() => handleSetCheckInTime(moment().format('hh:mm:ss a'))}>
                  <Text style={styles.appButtonText}>
                    CheckIn
            </Text>
                </TouchableOpacity>
              </View>
          }
          {
            isCheckedOut &&
            <View style={{ alignItems: 'center', marginTop: 20 }}>
                <TouchableOpacity style={styles.appButtonContainer} onPress={handleSaveData}>
                  <Text style={styles.appButtonText}>
                    Save Shift
            </Text>
                </TouchableOpacity>
              </View>

          }
        </View>
      </ScrollView>
    </View>
  )
}

export default CheckIn;