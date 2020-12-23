import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';



import OnboardingStack from './Onboarding/OnboardingStack';
import LandingStack from './Landing/LandingStack';
import HomeStack from './Home/HomeStack';


const Stack = createStackNavigator();

const RootStack = () => {
  return(
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen options={{headerShown:false}} name="Onboarding" component={OnboardingStack}/>
      <Stack.Screen options={{headerShown:false}} name="Landing" component={LandingStack}/>
      <Stack.Screen options={{headerShown:false}} name="Home" component={HomeStack}/>
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