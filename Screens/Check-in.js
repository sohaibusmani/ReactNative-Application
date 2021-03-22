import React from 'react';
import { View, StyleSheet, ImageBackground} from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

import image from '../assets/pic2.jpg';

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
    },
    image: {
        width: '100%',
        height: '100%',
        flex: 1
      },

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
        <View style={{flex: 1}}>
          <ImageBackground resizeMode='cover' style={styles.image} style={{height: 200}} source={image}>
              <View style={{flex:1, backgroundColor:'rgba(0,0,0,0.3)',alignItems:'center'}}>
                <Title style={{ color:'white'}}>20 March 2021</Title>   
              </View>
          </ImageBackground>
         
        </View>
    )
}

export default CheckIn;