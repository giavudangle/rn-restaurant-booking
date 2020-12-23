import React from 'react'
import { View, Text,Image,Dimensions,StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import DotSlider from '../common/DotSlider';

const {width,height} = Dimensions.get('screen');


export default function ListRenderItem({item}) {
  return (
    <TouchableOpacity> 
      <View style={{
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        backgroundColor:'#333',
        height:height/3,
        
        width,
        }}>
        <Image resizeMode='cover' source={item.image_url} style={{height:height/2.55,width:width,opacity:0.6}}/>    
        <Text style={{fontFamily:'Helvetica',fontSize:20,fontWeight:'bold',color:'#fff',bottom:height/6}}>{item.name}</Text>
        <View style={styles.sliderContainer}>
          <DotSlider isActive={true}/>
          <DotSlider isActive={false}/>
          <DotSlider isActive={false}/>
          <DotSlider isActive={false}/>
          <DotSlider isActive={false}/>
          <DotSlider isActive={false}/>
          <DotSlider isActive={false}/>
          <DotSlider isActive={false}/>
          <DotSlider isActive={false}/>
          <DotSlider isActive={false}/>
          <DotSlider isActive={false}/>
        </View>
      </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  
  sliderContainer:{
    flexDirection:'row',
    justifyContent:'center',
    bottom:height/10,
  }
})