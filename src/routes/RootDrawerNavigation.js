import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import CartStack from './Cart/CartStack';
import HomeStack from './Home/HomeStack';
import LogoutStack from './Logout/LogoutStack';
import OrderStack from './Orders/OrderStack';
import ReservationStack from './Reservations/ReservationStack';
import SearchStack from './Search/SearchStack';
import MenuStack from './Menu/MenuStack';



const Drawer = createDrawerNavigator();

const RootDrawer = () => {
  return(
    <Drawer.Navigator initialRouteName="HomeDrawer">
      <Drawer.Screen options={{headerShown:false}} name="CartDrawer" component={CartStack}/>
      <Drawer.Screen options={{headerShown:false}} name="HomeDrawer" component={HomeStack}/>
      <Drawer.Screen options={{headerShown:false}} name="LogoutDrawer" component={LogoutStack}/>
      <Drawer.Screen options={{headerShown:false}} name="OrderDrawer" component={OrderStack}/>
      <Drawer.Screen options={{headerShown:false}} name="ReservationDrawer" component={ReservationStack}/>
      <Drawer.Screen options={{headerShown:false}} name="SearchDrawer" component={SearchStack}/>
      <Drawer.Screen options={{headerShown:false}} name="MenuDrawer" component={MenuStack}/>
    </Drawer.Navigator>
  )
}

export default RootDrawer;