import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../../screens/Landing/Login';
import Register from '../../screens/Landing/Register';
import Welcome from '../../screens/Landing/Welcome';

const Stack = createStackNavigator();

const LandingStack = () => {
  return(
    <Stack.Navigator initialRouteName='Welcome'>
      <Stack.Screen options={{headerShown:false}} name="Login" component={Login}/>
      <Stack.Screen options={{headerShown:false}} name="Register" component={Register}/>
      <Stack.Screen options={{headerShown:false}} name="Welcome" component={Welcome}/>

    </Stack.Navigator>
  )
}

export default LandingStack;
