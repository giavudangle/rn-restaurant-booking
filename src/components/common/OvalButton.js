import React from 'react'
import { View,Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function OvalButton({title,func,style,backgroundColor,textColor}) {
  return (
    <TouchableOpacity onPress={func} style={style}>
      <View 
      style={{
        backgroundColor:`${backgroundColor}`,  
        width:300,
        height:50,
        borderRadius:300,
        borderColor:'black',
        borderWidth:0.4}}>
        <Text 
        style={{ 
          alignSelf:'center',
          fontSize:20,
          fontWeight:'500',
          textAlign:'center',
          padding:10,
          color:`${textColor}`}}>{title}</Text>
      </View>
    </TouchableOpacity>
   
   
  )
}
