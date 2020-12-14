import React from 'react'
import { View, Text ,StyleSheet} from 'react-native'

export default function DotSlider({isActive}) {
  return (
    <View style={isActive? styles.dotContainerActive : styles.dotContainerInActive}></View>
      
    
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