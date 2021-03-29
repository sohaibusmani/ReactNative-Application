import React, {useEffect} from 'react';
import { View, StyleSheet, ImageBackground, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
  const [checkIn, setCheckIn] = React.useState('');
  const [breakStart, setBreakStart] = React.useState('');
  const [breakEnd, setBreakEnd] = React.useState('');
  const [checkOut, setCheckOut] = React.useState('');
  const [currentDate, setCurrentDate] = React.useState('');
  const [showCard, setShowCard] = React.useState(false);

  useEffect(() => {
        getDate();
  },[]) 

  const storeDate = async () => {
    const jsonValue = JSON.stringify(new Date());
    await AsyncStorage.setItem('date',jsonValue)
    console.log(jsonValue);
  }

  const getDate = async () => {
   const jsonValue =  await AsyncStorage.getItem('date');
   return jsonValue != null ? JSON.parse(jsonValue) : null;
   console.log(jsonValue);
  }

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground resizeMode='cover' style={styles.image} style={{ height: 250 }} source={image}>
        <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.3)', }}>
          <View style={{ color: 'white', alignItems: 'center' }}>
            <Title style={{ color: 'white', }}>20 March 2021</Title>
          </View>
          <View style={{ flexDirection: 'row', margin: 15 }}>
            <Feather style={{ marginTop: 2 }} name="check-square" size={20} color="white" />
            <Text style={{ marginLeft: 8, fontSize: 18, color: 'white' }}>Check In : 9:05 AM</Text>
          </View>
          <View style={{ flexDirection: 'row', margin: 15 }}>
            <MaterialIcons name="free-breakfast" size={24} color="white" />
            <Text style={{ marginLeft: 8, fontSize: 18, color: 'white' }}>Break Start : 2:05 PM</Text>
          </View>
          <View style={{ flexDirection: 'row', margin: 15 }}>
            <MaterialCommunityIcons name="format-page-break" size={24} color="white" />
            <Text style={{ marginLeft: 8, fontSize: 18, color: 'white' }}>Break End : 3:05 PM</Text>
          </View>
          <View style={{ flexDirection: 'row', margin: 15 }}>
            <MaterialIcons name="exit-to-app" size={23} color="white" />
            <Text style={{ marginLeft: 8, fontSize: 18, color: 'white' }}>Check Out : 8:05 PM</Text>
          </View>
        </View>
      </ImageBackground>
      <ScrollView>
        <View style={{ marginTop: 20 }}>
          <View>
            <Card>
              <Card.Title title="Sohaib Usmani" subtitle="Employee" />
              <Card.Content>
                <View style={{ flexDirection: 'row' }}>
                  <Entypo name="back-in-time" size={20} color="black" />
                  <Text style={{ marginLeft: 5 }}>9:05 AM</Text>
                </View>
                <Paragraph>Checked In</Paragraph>
              </Card.Content>
            </Card>
          </View>
          <View style={{ marginTop: 20, alignItems: 'center' }}>
            <TouchableOpacity style={styles.appButtonContainer} onPress={storeDate}>
              <Text style={styles.appButtonText}>
                Break
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default CheckIn;