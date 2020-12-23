import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Orders from '../../screens/Orders/Orders';

const Stack = createStackNavigator();

const OrderStack = () => {
  return(
    <Stack.Navigator initialRouteName='Menu'>
      <Stack.Screen options={{headerShown:false}} name="Orders" component={Orders}/>
    </Stack.Navigator>
  )
}

export default OrderStack;
