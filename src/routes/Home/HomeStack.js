import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../../screens/Home/Home';

const Stack = createStackNavigator();

const HomeStack = () => {
  return(
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen options={{headerShown:false}} name="Home" component={Home}/>
    </Stack.Navigator>
  )
}

export default HomeStack;
