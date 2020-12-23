import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Cart from '../../screens/Cart/Cart';

const Stack = createStackNavigator();

const CartStack = () => {
  return(
    <Stack.Navigator initialRouteName='Cart'>
      <Stack.Screen options={{headerShown:false}} name="Cart" component={Cart}/>
    </Stack.Navigator>
  )
}

export default CartStack;
