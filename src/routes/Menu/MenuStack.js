import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Menu from '../../screens/Menu/Menu';

const Stack = createStackNavigator();

const MenuStack = () => {
  return(
    <Stack.Navigator initialRouteName='Menu'>
      <Stack.Screen options={{headerShown:false}} name="Menu" component={Menu}/>
    </Stack.Navigator>
  )
}

export default MenuStack;
