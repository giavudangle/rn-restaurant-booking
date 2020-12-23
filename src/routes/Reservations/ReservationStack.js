import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Reservations from '../../screens/Reservations/Reservations';

const Stack = createStackNavigator();

const ReservationStack = () => {
  return(
    <Stack.Navigator initialRouteName='Reservations'>
      <Stack.Screen options={{headerShown:false}} name="Reservations" component={Reservations}/>
    </Stack.Navigator>
  )
}

export default ReservationStack;
