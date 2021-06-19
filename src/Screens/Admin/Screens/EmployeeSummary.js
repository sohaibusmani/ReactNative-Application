import React, { useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator, TouchableOpacity, Text, Dimensions } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import Axios from 'axios';
import baseUrl from '../../../Url/BaseUrl';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

const WIDTH = Dimensions.get('window').width;


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
  },
  txtHeader: {
    fontSize: 22, fontWeight: "bold", color: "rgba(0,0,0,0.5)",
    marginLeft: WIDTH * 0.6 - 130, marginTop: 35
  },
  btnMenu: {
    marginTop: 42, marginLeft: 15,
  },
  viewHeader: {
    width: WIDTH, height: 75, zIndex: 1000,
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  }
})

export default function Profile({ route }) {
  const { employeeId } = route.params;
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
  const [shifts, setShifts] = React.useState([]);
  const [respectiveTime, setRespectiveTime] = React.useState('');
  const [respectiveWage, setRespectiveWage] = React.useState('');


  useEffect(() => {
    getSummary();
  }, [])

  const getSummary = () => {
    Axios({
      method: 'GET',
      url: `${baseUrl}/user/summary`,
      params: {
        userId: employeeId
      }
    })
      .then(res => {
        setMonthlyWage(res.data.monthlyWage);
        setTotalHours(res.data.totalHours);
        setUser(res.data.user);
        setLoading(false);

      })
  }

  const getRespectiveMonthSummary = () => {
    Axios({
      method: 'GET',
      url: `${baseUrl}/shift/get-by-date`,
      params: {
        userId: employeeId,
        startDate,
        endDate
      }
    })
      .then(res => {
        var totalBreak = 0;
        var totalTime = 0;
        console.log(res.data.shifts.length)
        setShifts(res.data.shifts);
        res.data.shifts.forEach(el => {
          var checkinTime = moment(el.shiftStartTime);
          var checkOutTime = moment(el.shiftEndTime);
          var totalHoursSpendInADay = checkOutTime.diff(checkinTime, 'hours');

          el.breakTime.forEach(breakEl => {
            var breakStartTime = moment(breakEl.breakStart);
            var breakEndTime = moment(breakEl.breakEnd);
            var totalBreakHours = breakEndTime.diff(breakStartTime, 'seconds');
            totalBreak = totalBreak + totalBreakHours;
          });

          totalTime = totalTime + totalHoursSpendInADay;

        });
        let breakInHours = totalBreak / 3600;
        let x = totalTime - breakInHours;
        x = x.toFixed(2);
        setRespectiveTime(x);
        const monthlyWage = x * parseFloat(user.wedge);
        setRespectiveWage(monthlyWage);
        console.log('wage', monthlyWage, user.wedge, x, breakInHours, totalTime)
      })
      .catch(err => {
        console.log(err)
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
    getRespectiveMonthSummary();
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
        <View style={styles.viewHeader}>
          <Text style={styles.txtHeader}>Employee Summary</Text>
        </View>
        <View style={styles.cardContainer}>
          <Card style={{ borderRadius: 25, elevation: 3 }}>
            <Card.Content>
              <View style={styles.cardContent}>
                <Title>{user.name}</Title>
                <Paragraph>{user.username}</Paragraph>
                <View>
                </View>
                <Title style={{ marginTop: 10 }}>
                  Total Hours In a Month
                    </Title>
                <Paragraph>{totalHours}</Paragraph>
              </View>
              <View style={{ marginTop: 10 }}>
              </View>
              <View style={{ marginTop: 10 }}>
                <Title>
                  Wage Per Hour
                </Title>
                <Paragraph>
                  PKR {user.wedge}
                </Paragraph>
              </View>
              <View style={{ marginTop: 10 }}>
                <Title>
                  Wage Per Month
                </Title>
                <Paragraph>
                  PKR {monthlyWage}
                </Paragraph>
                <Title style={{ marginTop: 20 }}>
                  Calculate as per your requirements
                </Title>
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
                <View style={{marginTop:10}}>
                <Title>
                  Total Hours
                </Title>
                <Paragraph>
                  {respectiveTime}
                </Paragraph>
                <Title>
                  Total Wage
                </Title>
                <Paragraph>
                  {respectiveWage}
                </Paragraph>
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