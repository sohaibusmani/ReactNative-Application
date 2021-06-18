import React, {useEffect} from 'react';
import { View, StyleSheet, ActivityIndicator,TouchableOpacity, Text } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import Axios from 'axios';
import baseUrl from '../../../Url/BaseUrl';
import DateTimePicker from '@react-native-community/datetimepicker';

const styles = StyleSheet.create({
    cardContainer: {
       marginTop: 10,
    },
    cardContent: {
        // alignItems:'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 30
    },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#009688",
        paddingVertical: 10,
        paddingHorizontal: 12,
        width: 120,
      },
      appButtonText: {
        color: "#fff",
        alignSelf: "center",
      },
      loaderContainer: {
        flex: 1,
        justifyContent: "center"
      },
      horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
      }
})

export default function Profile({route}) {
    const {employeeId} = route.params;
    const [totalHours, setTotalHours] = React.useState('');
    const [monthlyWage, setMonthlyWage] = React.useState('');
    const [user, setUser] = React.useState({});
    const [loading, setLoading] = React.useState(true);
    const [startDate, setStartDate] = React.useState(new Date());
    const [startMode, setStartMode] = React.useState('date');
    const [startShow, setStartShow] = React.useState(false);
    const [endDate, setEndDate] = React.useState(new Date());
    const [endMode, setEndMode] = React.useState('date');
    const [endShow, setEndShow] = React.useState(false);


    useEffect(() => {
        getSummary();
      },[])

    const getSummary = () => {
      Axios({
          method:'GET',
          url:`${baseUrl}/user/summary`,
          params:{
              userId: employeeId
          }
      })
      .then(res => {
          console.log(res.data)
          setMonthlyWage(res.data.monthlyWage);
          setTotalHours(res.data.totalHours);
          setUser(res.data.user);
          setLoading(false);

      })
    }

    const startOnChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setStartShow(false);
      setStartDate(currentDate);
    };

    const startShowMode = (currentMode) => {
      setStartShow(true);
      setStartMode(currentMode);
    };
  
    const startShowDatepicker = () => {
      startShowMode('date');
    };

    const endOnChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setEndShow(false);
      setEndDate(currentDate);
    };

    const endShowMode = (currentMode) => {
      setEndShow(true);
      setEndMode(currentMode);
    };
  
    const endShowDatepicker = () => {
      endShowMode('date');
    };

    return (
        loading
        ?
        <View style={[styles.loaderContainer, styles.horizontal]}>
         <ActivityIndicator size="large" color="#009688" />
         </View>
        :
        <View>
            <View style={styles.cardContainer}>
            <Card style={{borderRadius: 25, elevation: 3}}>
                <Card.Content>
                    <View style={styles.cardContent}>
                    <Title>{user.name}</Title>
                    <Paragraph>{user.username}</Paragraph>
                    <View>
      </View>
                    <Title style={{marginTop: 10}}>
                        Total Hours In a Month
                    </Title>
                    <Paragraph>{totalHours}</Paragraph>
                    </View>
                    <View style={{marginTop: 10}}>
              </View>
              <View style={{marginTop: 10}}>
                <Title>
                    Wage Per Hour
                </Title>
                <Paragraph>
                    PKR {user.wedge}
                </Paragraph>
              </View>
              <View style={{marginTop: 10}}>
                <Title>
                    Wage Per Month
                </Title>
                <Paragraph>
                    PKR {monthlyWage}
                </Paragraph>
                <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.appButtonContainer} onPress={startShowDatepicker}>
                          <Text style={styles.appButtonText}>
                              Start Date
                          </Text>
                       </TouchableOpacity>
                       <TouchableOpacity style={styles.appButtonContainer} onPress={endShowDatepicker}>
                          <Text style={styles.appButtonText}>
                              End Date
                          </Text>
                       </TouchableOpacity>
                       </View>
                       {startShow && (
        <DateTimePicker
          testID="dateTimePicker"
          value={startDate}
          mode={startMode}
          is24Hour={true}
          display="default"
          onChange={startOnChange}
        />
      )}
       {endShow && (
        <DateTimePicker
          testID="dateTimePicker"
          value={endDate}
          mode={endMode}
          is24Hour={true}
          display="default"
          onChange={endOnChange}
        />
      )}
              </View>
                </Card.Content>
            </Card>
           
            </View>
        </View>
    )
}