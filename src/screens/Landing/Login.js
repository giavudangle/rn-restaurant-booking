import React from 'react'
import { SafeAreaView, Text,View ,StyleSheet} from 'react-native'
import CustomTextInput from '../../components/common/CustomTextInput'
import AntIcon from 'react-native-vector-icons/AntDesign';
import OvalButton from '../../components/common/OvalButton';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Login({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntIcon style={{marginLeft:30}} name='left' size={28} color='#333'/>
        </TouchableOpacity>
        <Text style={styles.headerDetail}>Sign In</Text>
      
      </View>

      <View style={styles.inputContainer}>
        <CustomTextInput borderColor='#333' bgColor='#fff' placeholderColor='#333' placeholder='Email or phone number'/>
        <View style={{margin:14}}></View>
        <CustomTextInput borderColor='#333' bgColor='#fff' placeholderColor='#333' placeholder='Password'/>
      </View>

      <View style={styles.buttonContainer}>
        <OvalButton func={() => navigation.navigate('Home')} style={{}} title='Log In' backgroundColor='#5EA33A' textColor='#fff'/>
        <Text style={{color:'#333',fontSize:20,margin:30,fontWeight:'bold'}}>OR</Text>
        <OvalButton style={{}} title='Facebook Login' backgroundColor='#344D91' textColor='#fff'/>
      </View>
     
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container:{
    backgroundColor:'#fff',
    flex:1
  },
  headerContainer:{
    flex:1
  },
  headerDetail:{
    color:'#5EA33A',
    fontSize:24,
    fontWeight:'800',
    marginTop:30,
    marginLeft:30
  },
  inputContainer:{
    flex:4,
    justifyContent:'center',
    alignItems:'center',
    marginBottom:10,
    marginTop:30
  },
  buttonContainer:{
    flex:5,
    justifyContent:'flex-start',
    alignItems:'center',
    flexDirection:'column',
    
  }

})