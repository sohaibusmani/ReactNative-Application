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

  const [checkIn, setCheckIn] = React.useState('');
  const [schedule, setSchedule] = React.useState({});
  const [breakStart, setBreakStart] = React.useState('');
  const [breakEnd, setBreakEnd] = React.useState('');
  const [checkOut, setCheckOut] = React.useState('');
  const [isCheckedIn, setIsCheckedIn] = React.useState(false);
  const [isOnBreak, setIsOnBreak] = React.useState(false);
  const [isCheckedOut, setIsCheckedOut] = React.useState(false);
  const [isBreakEnd, setIsBreakEnd] = React.useState(false);


  useEffect(() => {

    Axios({
      method: 'GET',
      url: `${baseUrl}/user/get-localstorage`,
      params: {
        userId: user.user._id
      }
    })
      .then(res => {
        let tempLocalStorage = res.data.localStorage;
        if (tempLocalStorage.checkInTime) {
          setIsCheckedIn(true)
          setSchedule(tempLocalStorage)
        }
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const handleSetCheckInTime = (time) => {
    let tempSchedule = {};
    tempSchedule.checkInTime = time;
    setSchedule(tempSchedule);
    setIsCheckedIn(true);

    Axios({
      method: 'POST',
      url: `${baseUrl}/user/post-localstorage`,
      data: {
        localStorage: tempSchedule,
        userId: user.user._id
      }
    })
      .then(res => {
        // console.log('post checkin time', res.data);
      })
      .catch(err => {
        console.log(err)
      })

  }

  const handleSetBreakStartTime = async (time) => {
    let tempSchedule = { ...schedule };
    let tempBreakTime = [];

    if (tempSchedule.break?.length > 0)
      tempBreakTime = tempSchedule.break;

    tempBreakTime.push({ breakStart: time, breakEnd: "" });
    tempSchedule.break = tempBreakTime;
    setSchedule(tempSchedule);
    setIsOnBreak(true);

    Axios({
      method: 'POST',
      url: `${baseUrl}/user/post-localstorage`,
      data: {
        localStorage: tempSchedule,
        userId: user.user._id
      }
    })
      .then(res => {
        // console.log('post break start time', res.data)
        // setSchedule(res.data.user.localStorage);
      })
      .catch(err => {
        console.log(err)
      })
  }

  const handleSetBreakEndTime = (time) => {
    let tempSchedule = { ...schedule };
    let tempBreakTime = [...tempSchedule.break];
    let tempIndex = tempBreakTime.length;

    tempBreakTime[tempIndex - 1].breakEnd = time;
    tempSchedule.break = tempBreakTime;
    setSchedule(tempSchedule);
    setIsOnBreak(false);

    Axios({
      method: 'POST',
      url: `${baseUrl}/user/post-localstorage`,
      data: {
        localStorage: tempSchedule,
        userId: user.user._id
      }
    })
      .then(res => {
        // console.log('post break start time', res.data)
        // setSchedule(res.data.user.localStorage);
      })
      .catch(err => {
        console.log(err)
      })
  }


  const handleSetCheckOutTime = (time) => {
    let tempSchedule = { ...schedule };
    tempSchedule.checkOutTime = time;
    setSchedule(tempSchedule);

    Axios({
      method: 'POST',
      url: `${baseUrl}/user/post-localstorage`,
      data: {
        localStorage: tempSchedule,
        userId: user.user._id
      }
    })
      .then(res => {
        handleSaveData(time);
      })
      .catch(err => {
        console.log(err)
      })
  }

  const handleSaveData = (shiftEndTime) => {

    Axios({
      method: 'POST',
      url: `${baseUrl}/shift/save`,
      data: {
        userId: user.user._id,
        shiftStartTime: schedule.checkInTime,
        breakTime: schedule.break,
        shiftEndTime

      }
    })
      .then(res => {
        console.log('Shift Save Sucessfully');
        setIsCheckedIn(false);
      })
      .catch(err => {
        console.log(err.response.data.message)
      })
  }

  console.log(schedule)

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground resizeMode='cover' style={styles.image} style={{ height: 200 }} source={image}>
      </ImageBackground>
      <ScrollView>
        <View style={{ marginTop: 20 }}>
          {
            schedule.checkInTime &&

            <View>
              <View>
                <Card style={{ borderRadius: 25 }}>
                  <Card.Title title={user.user.name} subtitle={user.user.designation} />
                  <Card.Content>
                    <View style={{ flexDirection: 'row' }}>
                      <Entypo name="back-in-time" size={20} color="black" />
                      <Text style={{ marginLeft: 5 }}>{moment(schedule.checkInTime).format('hh:mm:ss a')}</Text>
                    </View>
                    <Paragraph>Checked In</Paragraph>
                  </Card.Content>
                </Card>
              </View>
            </View>
          }
          {
            schedule?.break && schedule?.break.length > 0 && schedule?.break.map((el, i) => (
              <View key={i}>
                <Card style={{ borderRadius: 25, marginTop: 20 }}>
                  <Card.Title title={user.user.name} subtitle={user.user.designation}  />
                  <Card.Content>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                      <View style={{ flexDirection: 'row' }}>
                        <Entypo name="back-in-time" size={20} color="black" />
                        <Text style={{ marginLeft: 5 }}>{moment(el.breakStart).format('hh:mm:ss a')}</Text>
                      </View>

                      {
                        el.breakEnd
                          ?
                          <View style={{ flexDirection: 'row' }}>
                            <Entypo name="back-in-time" size={20} color="black" />
                            <Text style={{ marginLeft: 5 }}>{moment(el.breakEnd).format('hh:mm:ss a')}</Text>
                          </View>
                          :
                          null
                      }

                    </View>

                  </Card.Content>
                </Card>
              </View>
            ))
          }
          {
            schedule.checkOutTime &&

            <View>
              <View>
                <Card style={{ borderRadius: 25, marginTop: 20 }}>
                  <Card.Title title={user.user.name} subtitle={user.user.designation} />
                  <Card.Content>
                    <View style={{ flexDirection: 'row' }}>
                      <Entypo name="back-in-time" size={20} color="black" />
                      <Text style={{ marginLeft: 5 }}>{moment(schedule.checkOutTime).format("hh:mm:ss a")}</Text>
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
                <TouchableOpacity style={styles.appButtonContainer} onPress={() => handleSetBreakEndTime(moment())}>
                  <Text style={styles.appButtonText}>
                    Break End
                </Text>
                </TouchableOpacity>
              </View>
              :
              isCheckedIn &&
              <View style={{ alignItems: 'center', marginTop: 20 }}>
                <TouchableOpacity style={styles.appButtonContainer} onPress={() => handleSetBreakStartTime(moment())}>
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
                <TouchableOpacity style={styles.appButtonContainer} onPress={() => handleSetCheckOutTime(moment())}>
                  <Text style={styles.appButtonText}>
                    Check out
                </Text>
                </TouchableOpacity>
              </View>
              :
              !schedule.checkInTime &&
              <View style={{ alignItems: 'center', marginTop: 20 }}>
                <TouchableOpacity style={styles.appButtonContainer} onPress={() => handleSetCheckInTime(moment())}>
                  <Text style={styles.appButtonText}>
                    CheckIn
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