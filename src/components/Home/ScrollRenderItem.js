import React from 'react'
import { View, Text,Image,Dimensions,StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const {width,height} = Dimensions.get('screen');


export default function ScrollRenderItem({item}) {
  return (
    <View style={{margin:20,justifyContent:'flex-start',alignItems:'flex-start',flex:1}}>
      <View>
        <Image  resizeMode='contain' source={item.image_url} 
        style={{marginTop:-40,width:width/1.1,height:height/3}}
        />
      </View>
    
      <View style={{marginTop:-50,flexDirection:'row',justifyContent:'space-between',width:width/1.1}}>
        <Text style={{fontSize:16,fontWeight:'500',fontFamily:'Helvetica'}}>{item.name}</Text>
        <View></View>
        <Text style={{fontSize:16,fontWeight:'500',fontFamily:'Helvetica'}}>$ {item.price}</Text>
      </View>

    </View>
    
      
  )
}


