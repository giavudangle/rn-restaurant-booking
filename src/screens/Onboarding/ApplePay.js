import React from 'react'
import { View, Text,StyleSheet,Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import DotSlider from '../../components/common/DotSlider'

import GestureRecognizer,{swipeDirections} from 'react-native-swipe-gestures';



export default function MakeReservation({navigation}) {
  return (
      <GestureRecognizer 
      onSwipeLeft={() => navigation.navigate('Landing')}
      style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={require('../../images/noun_mac_2076879.png')} style={styles.image}/>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Make Reservations</Text>
          <Text numberOfLines={1} style={styles.content}>
          Book a table in advance to avoid waiting inline
          </Text>
        </View>
        <View style={styles.sliderContainer}>
          <DotSlider isActive={false}/>
          <DotSlider isActive={false}/>
          <DotSlider isActive={false}/>
          <DotSlider isActive={false}/>
          <DotSlider isActive={true}/>
        </View>
        </GestureRecognizer>
   
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#5EA33A'
  },
  imageContainer:{
    flex:3/10,
    justifyContent:'center',
    alignItems:'center',
    marginTop:200

  },
  image:{
    width:80,
    height:100,
  },
  contentContainer:{
    flex:3/10,
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center'
  },
  title:{
    fontWeight:'bold',
    fontSize:20,
    color:'white'
  },
  content:{
    fontSize:16,
    color:'white',
    paddingTop:20
  },
  sliderContainer:{
    flex:4/10,
    flexDirection:'row',
    justifyContent:'center',
    
  }
})