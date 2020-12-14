import React from 'react'
import { View, Text,StyleSheet,Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import DotSlider from '../../components/common/DotSlider'

export default function BrowserFood() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../../images/restaurant_menu_ic.png')} style={styles.image}/>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Browser Food</Text>
        <Text numberOfLines={1} style={styles.content}>Welcome to our restaurant app! 
        </Text>
      </View>
      <View style={styles.sliderContainer}>
        <DotSlider isActive={true}/>
        <DotSlider isActive={false}/>
        <DotSlider isActive={false}/>
        <DotSlider isActive={false}/>
        <DotSlider isActive={false}/>
      </View>

    </SafeAreaView>
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
    width:100,
    height:100
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