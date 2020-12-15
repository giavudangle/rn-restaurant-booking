import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import BrowserFood from '../../screens/Onboarding/BrowserFood'
import ApplePay from '../../screens/Onboarding/ApplePay'
import MakeReservation from '../../screens/Onboarding/MakeReservation'
import OrderFood from '../../screens/Onboarding/OrderFood'
import QuickSearch from '../../screens/Onboarding/QuickSearch'


const Stack = createStackNavigator();

const OnboardingStack = () => {
  return(
    <Stack.Navigator initialRouteName="BrowserFood">
      <Stack.Screen options={{headerShown:false}} component={BrowserFood} name="BrowserFood"/>
      <Stack.Screen options={{headerShown:false}} component={ApplePay} name="ApplePay"/>
      <Stack.Screen options={{headerShown:false}} component={MakeReservation} name="MakeReservation"/>
      <Stack.Screen options={{headerShown:false}} component={OrderFood} name="OrderFood"/>
      <Stack.Screen options={{headerShown:false}} component={QuickSearch} name="QuickSearch"/>
    </Stack.Navigator>
  )
}

export default OnboardingStack;