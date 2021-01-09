import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import FeatherIcon from 'react-native-vector-icons/Feather';

export default function Header({ navigation,header }) {
  return (
    <>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <FeatherIcon name='menu' size={30} color='#4A4A4A' />
      </TouchableOpacity>
      <Text style={{fontSize:20,top:6,fontFamily:'Helvetica',fontWeight:'500'}}>{header}</Text>
      <TouchableOpacity style={{ top: -18 }} onPress={() => { }}>
        <View style={{ width: 18, height: 18, backgroundColor: 'red', borderRadius: 300, left: 20, top: 12, zIndex: 99 }}>
          <Text style={{ justifyContent: 'center', alignItems: 'center', left: 6, top: 2, right: 6, fontWeight: '500', color: 'white', fontSize: 12 }}>3</Text>
        </View>
        <FeatherIcon name='shopping-cart' size={30} color='#4A4A4A' />
      </TouchableOpacity>
    </>
  )
}
