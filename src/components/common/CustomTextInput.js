import React from 'react'
import {Text, TextInput,View,Dimensions} from 'react-native'

const {width,height} = Dimensions.get('screen');

export default function CustomTextInput({bgColor,placeholder,placeholderColor,borderColor}) {
  return (
    <View style={{justifyContent:'center',
    alignItems:'center',
    backgroundColor:`${bgColor}`,
    width:width/1.2,
    borderWidth:0.6,
    borderColor:`${borderColor}`,
    height:height/18,
    borderRadius:300,
    margin:10
    }}>
      <TextInput placeholder={placeholder} style={{color:`${placeholderColor}`}} />
    </View>
  )
}
