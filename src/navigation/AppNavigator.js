
// import React from 'react';
// import {createStackNavigator} from '@react-navigation/stack';
// import AuthNavigator from './AuthNavigator';
// import DrawerNavigator from './DrawerNavigator';
// import {connect} from 'react-redux';

// const MainStack = createStackNavigator();

// export const navigationRef = React.createRef();

// export function navigate(name, params) {
//   navigationRef.current?.navigate(name, params);
// }

// const MainNavigator = (props) => {
//   return (
//     <MainStack.Navigator headerMode="none" initialRouteName="AuthStack">
//       {props?.user ? (
//         <MainStack.Screen name="DrawerNavigator">
//           {() => <DrawerNavigator {...props?.user} />}
//         </MainStack.Screen>
//       ) : (
//         <MainStack.Screen name="AuthStack" component={AuthNavigator} />
//       )}
//     </MainStack.Navigator>
//   );
// };

// const mapStateToProps = (state) => {
//   return {
//     user: state.authReducer.user,
//   };
// };

// export default connect(mapStateToProps)(MainNavigator);









import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// import Home from "../Screens/Home"
import Header from '../Components/Header';
// import CheckIn from '../Screens/Check-in';
import DrawerNavigator from '../navigation/DrawerNavigator';


const Stack = createStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="DrawerNavigator"
      screenOptions={{ gestureEnabled: false }}
    > 
      {/* <Stack.Screen
        name="Home"
        component={Home}  
        options={({ navigation }) => ({
          headerTitle: () => <Header navigation={navigation} title='Time Tracking App'/>,
        })}
      />
      <Stack.Screen
        name="CheckIn"
        component={CheckIn}
      />  */}
       <Stack.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
        options={({ navigation }) => ({
          headerTitle: () => <Header navigation={DrawerNavigator} title='Time Tracking App'/>,
        })}
      /> 
    </Stack.Navigator>
  );
}

export default RootStack;