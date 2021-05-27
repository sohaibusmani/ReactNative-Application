import React, {useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import Axios from 'axios';
import baseUrl from '../../../Url/BaseUrl';

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
              </View>
                </Card.Content>
            </Card>
           
            </View>
        </View>
    )
}