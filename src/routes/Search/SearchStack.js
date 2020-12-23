import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Search from '../../screens/Search/Search';

const Stack = createStackNavigator();

const SearchStack = () => {
  return(
    <Stack.Navigator initialRouteName='Reservations'>
      <Stack.Screen options={{headerShown:false}} name="Search" component={Search}/>
    </Stack.Navigator>
  )
}

export default SearchStack;
