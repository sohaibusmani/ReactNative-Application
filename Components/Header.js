// import React, { Component } from 'react';
// import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';


// export default class HeaderIconExample extends Component {
//   render() {
//     const {navigation} = this.props;
//     const openMenu = () => {
//           navigation.openDrawer()
//     };

//     return (
//       <Container>
//         <Header>
//           <Left>
//           <Button 
//           transparent
//           onPress={openMenu}
//           >
//               <Icon name='menu' />
//             </Button>
//           </Left>
//           <Body>
//             <Title>Time Tracking App</Title>
//           </Body>
//         </Header>
//       </Container>
//     );
//   }
// }

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

export default function Header({navigation}){

const openMenu = () => {
  navigation.openDrawer()
}

  return(
  <View style={styles.header}>
   <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon}/>
   <View>
     <Text style={styles.headerText}>
       Check-in App
     </Text>
   </View>
  </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center'
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1
  },
  icon: {
    position: 'absolute',
    left: 10
  }
})
