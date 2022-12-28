import { View, Text, SafeAreaView, StyleSheet, Image, TextInput, Button, Pressable } from 'react-native';
import FocusStatusbar from '../../FocusStatusbar';
import React from 'react';
import { SIZES, COLORS, assets, FONTS  } from '../../../constants';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

export default function Login() {
  return (
   <SafeAreaView style={{
    backgroundColor:"#ffffff",
   }}>
   
    <FocusStatusbar backgroundColor={"black"} />

    
     <View style={{
        backgroundColor:"#ffffff",
        width:'100%',
        height:'100%', 
        marginTop:'40%',
        position:'relative',
        borderBottomStartRadius:50, 
        borderBottomRightRadius:50,
        
        
     }}>
      
      
      <Image source={assets.aulogo} 
            resizeMode="contain"
            style={{
                width: "100%",
              
        }} />

       
        <TextInput
        placeholder='Username'
        style={styles.input}/>

        <TextInput
        
        placeholder='Password'
        autoComplete='password'
        secureTextEntry={true}
        style={styles.input}/>

        <View style={styles.loginArea}>
        
         <TouchableOpacity  
         containerStyle={{
            height:40, 
             backgroundColor: COLORS.primary,
           width:'30%',
            position:'absolute',
            alignItems:'center',
               justifyContent:'center',
          
                }}>
          <Text style={styles.buttons}>Login </Text>
         </TouchableOpacity>
        
        <TouchableOpacity containerStyle={{
    height:40, 
     backgroundColor: COLORS.secondary,
    right:10,
    position:'absolute',
    alignItems:'center',
       justifyContent:'center',
  
        }}>
        <Text
        style={styles.buttons}
        >Forgot password? </Text>
        </TouchableOpacity>
       
       
        </View>
      
     </View>

   
  
  
  
   </SafeAreaView>

  )
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },

    loginArea: {
        margin:12, 
        padding:10,
        flex:1 , 
        flexDirection:'row', 
        height:20
    },
    buttons:{
        color:'white',
        padding:10,
        fontSize: SIZES.medium,
        fontWeight:FONTS.bold
    }

  });