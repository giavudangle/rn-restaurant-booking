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
      <Stack.Screen component={ApplePay} name="ApplePay"/>
      <Stack.Screen component={MakeReservation} name="MakeReservation"/>
      <Stack.Screen component={OrderFood} name="OrderFood"/>
      <Stack.Screen component={QuickSearch} name="QuickSearch"/>
    </Stack.Navigator>
  )
}

export default OnboardingStack;