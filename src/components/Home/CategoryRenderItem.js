import React from 'react'
import { View, Text,Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function CategoryRenderItem({item}) {
  return (
    <TouchableOpacity> 
      <View style={{padding:10,justifyContent:'center',alignItems:'center'}}>
        <Image source={item.image_url} style={{height:80,width:80,borderRadius:300}}/>
        <Text style={{fontSize:16,fontWeight:'700',fontFamily:'Helvetica',marginTop:10}}>{item.category}</Text>
      </View>
    </TouchableOpacity>
  )
}
