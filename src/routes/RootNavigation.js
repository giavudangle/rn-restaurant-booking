import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';



import OnboardingStack from './Onboarding/OnboardingStack';
import LandingStack from './Landing/LandingStack';


const Stack = createStackNavigator();

const RootStack = () => {
  return(
    <Stack.Navigator initialRouteName="Onboarding">
      <Stack.Screen options={{headerShown:false}} name="Onboarding" component={OnboardingStack}/>
      <Stack.Screen options={{headerShown:false}} name="Landing" component={LandingStack}/>
    </Stack.Navigator>
  )
}


const RootNavigation = () => {
  return(
    <NavigationContainer>
      <RootStack/>
    </NavigationContainer>
  )
}

export default RootNavigation;