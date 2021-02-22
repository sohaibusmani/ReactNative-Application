import React from 'react';
import {View, Text, Button} from 'react-native';
import Profile from "../Screens/profile"

function Home({navigation}){
    return(
    <View style={{marginTop: 100}}>
        <Text>
            Home Screen
        </Text>
        <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
    )
}
 
export default Home;