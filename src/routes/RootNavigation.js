import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import OnboardingStack from './Onboarding/OnboardingStack';

const RootNavigation = () => {
  return(
    <NavigationContainer>
      <OnboardingStack/>
    </NavigationContainer>
  )
}

export default RootNavigation;