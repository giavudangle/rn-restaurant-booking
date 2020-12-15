import React from 'react'
import { View, Text ,StyleSheet} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function DotSlider({isActive,func}) {
  return (
    <TouchableOpacity onPress={func}>
    <View style={isActive? styles.dotContainerActive : styles.dotContainerInActive}></View>


    </TouchableOpacity>
      
    
  )
}

const styles = StyleSheet.create({
  dotContainerActive:{
    backgroundColor:'gray',
    width:10,
    height:10,
    backgroundColor:'white',
    borderRadius:300,
    margin:10
  },
  dotContainerInActive:{
    backgroundColor:'gray',
    width:10,
    height:10,
    backgroundColor:'white',
    borderRadius:300,
    opacity:0.5,
    margin:10
  }
})