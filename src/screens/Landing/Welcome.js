import React from 'react'
import { View, Text, SafeAreaView,StyleSheet,Image } from 'react-native'
import OvalButton from '../../components/common/OvalButton'

export default function Welcome({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../../images/icons8-restaurant-menu-101.png')}/>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Welcome to our restaurant</Text>
        <Text style={styles.content}>Order food and make reservations with one click</Text>

      </View>
      <View style={styles.buttonContainer}>
        <OvalButton textColor='#fff' backgroundColor='#5EA33A' title='Log In' func={() => navigation.navigate('Login')} />
        <OvalButton textColor='#333' backgroundColor='#fff'style={{marginTop:20}} title='Sign up' func={() => navigation.navigate('Register')} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff'
  },
  imageContainer:{
    flex:3,
    justifyContent:'center',
    alignItems:'center'
  },
  image:{
    width:120,
    height:100,
  },
  contentContainer:{
    flex:2,
    marginTop:10,
    paddingTop:10

  },
  title:{
    fontSize:22,
    fontWeight:'bold',
    color:'#5EA33A',
    textAlign:'center',
    marginBottom:20
  },
  content:{
    textAlign:'center',
    fontSize:16,
    color:'black'
  },
  buttonContainer:{
    flex:5,
    alignItems:'center',
    marginBottom:60
  }
})
