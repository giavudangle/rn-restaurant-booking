import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Logout from '../../screens/Logout/Logout';

const Stack = createStackNavigator();

const LogoutStack = () => {
  return(
    <Stack.Navigator initialRouteName='Logout'>
      <Stack.Screen options={{headerShown:false}} name="Logout" component={Logout}/>
    </Stack.Navigator>
  )
}

export default LogoutStack;
