
// import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import MainNavigator, {navigationRef} from './AppNavigator';

// export default function Navigation() {
//   return (
//     <NavigationContainer ref={navigationRef}>
//       <MainNavigator />
//     </NavigationContainer>
//   );
// }


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
import Splash from '../Screens/Splash';
import Login from "../Screens/Login";
import Signup from '../Screens/Signup'
import AppNavigator from './AppNavigator'

const Stack = createStackNavigator();

function RootStack() {
    return (
        <Stack.Navigator
            initialRouteName="AppNavigator"
            screenOptions={{ gestureEnabled: false }}
        >
            <Stack.Screen
                name="Splash"
                component={Splash}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Signup"
                component={Signup}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="AppNavigator"
                component={AppNavigator}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    );
}

export default RootStack;