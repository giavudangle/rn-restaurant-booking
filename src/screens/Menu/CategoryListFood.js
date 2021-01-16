import React from 'react'
import { View, Text, Image } from 'react-native'

export default function CategoryListFood({foodDetail}) {
  return (
    <View style={{backgroundColor:'#333',width:180,height:120}}>
      <Image 
      resizeMode='cover' 
      style={{width:180,height:120,opacity:0.5}} 
      source={foodDetail.image_url}/>
      <Text style={{top:-70,left:50,fontSize:20,fontFamily:'Helvetica',color:'white'}}>{foodDetail.name}</Text>
    </View>
  )
}
