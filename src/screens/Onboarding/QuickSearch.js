import React from 'react'
import { View, Text,StyleSheet,Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import DotSlider from '../../components/common/DotSlider'

import GestureRecognizer,{swipeDirections} from 'react-native-swipe-gestures';



export default function QuickSearch({navigation}) {
  return (
   
      <GestureRecognizer 
      onSwipeLeft={() => navigation.navigate('ApplePay')}
      style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={require('../../images/noun_Binoculars_1107295.png')} style={styles.image}/>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Quick Search</Text>
          <Text numberOfLines={1} style={styles.content}>Quickly find food items you like the most
          </Text>
        </View>
        <View style={styles.sliderContainer}>
          <DotSlider isActive={false}/>
          <DotSlider isActive={false}/>
          <DotSlider isActive={false}/>
          <DotSlider isActive={true}/>
          <DotSlider isActive={false}/>
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
    marginTop:200,
   

  },
  image:{
    width:120,
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