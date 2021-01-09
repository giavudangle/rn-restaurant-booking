import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import CartStack from './Cart/CartStack';
import HomeStack from './Home/HomeStack';
import LogoutStack from './Logout/LogoutStack';
import OrderStack from './Orders/OrderStack';
import ReservationStack from './Reservations/ReservationStack';
import SearchStack from './Search/SearchStack';
import MenuStack from './Menu/MenuStack';

import FontistoIcon from 'react-native-vector-icons/Fontisto';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

const Drawer = createDrawerNavigator();

const RootDrawer = () => {
  return(
    <Drawer.Navigator 
    drawerPosition='left'
    drawerContentOptions={{style:{marginTop:200}}} 
    initialRouteName="HomeDrawer">
      <Drawer.Screen 
      
        options={{
          headerShown:false,
          drawerIcon: () => <FontistoIcon name='shopping-store' size={30}/>,
          title:'HOME',
        }} 
        name="HomeDrawer" 
        component={HomeStack}/>
      <Drawer.Screen 
      options={{
        headerShown:false,
        drawerIcon: () => <MaterialIcon name='restaurant-menu' size={30}/>,
        title:'MENU'
      }} 
      name="MenuDrawer" 
      component={MenuStack}/>
      <Drawer.Screen 
      options={{
        headerShown:false,
        drawerIcon: () => <MaterialIcon name='search' size={30}/>,
        title:'SEARCH'
      }} 
      name="SearchDrawer" 
      component={SearchStack}/>
      <Drawer.Screen 
      options={{
        headerShown:false,
        drawerIcon: () => <MaterialIcon name='shopping-cart' size={30}/>,
        title:'CART'
      }} 
      name="CartDrawer" 
      component={CartStack}/>
      <Drawer.Screen 
      options={{
        headerShown:false,
        drawerIcon: () => <MaterialCommunityIcon name='notebook' size={30}/>,
        title:'RESERVATIONS'
      }} 
      name="ReservationDrawer" 
      component={ReservationStack}/>
      <Drawer.Screen 
      options={{
        headerShown:false,
        drawerIcon: () => <MaterialCommunityIcon name='truck-check' size={30}/>,
        title:'ORDERS',
       
      }} 
      name="OrderDrawer" 
      component={OrderStack}/>
      <Drawer.Screen 
      options={{
        headerShown:false,
        drawerIcon: () => 
          <AntDesignIcon 
          style={{ transform: [
            { rotate: "90deg" }
          ]}} name='logout' size={30}/>,
        title:'LOGOUT'
      }} 
      name="LogoutDrawer" 
      component={LogoutStack}/>
    </Drawer.Navigator>
  )
}

export default RootDrawer;