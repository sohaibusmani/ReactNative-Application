import React from 'react';
import { View, StyleSheet} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { Text } from 'native-base';

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
    }

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
    
      const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

    return (
        <View>
            <Card>
    <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
    <Card.Content>
      <Title>Card title</Title>
      <Paragraph>Card content</Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
        </View>
    )
}

export default CheckIn;