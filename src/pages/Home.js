import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
   } from 'react-native';

export function Home(){
  return(
    <View style={styles.container}>
       <Text style={styles.title}>
         Welcome, Daniel 
      </Text>

       <TextInput
        style={styles.input}
        placeholder='New Skill'
        placeholderTextColor ='#555'
       />

       <TouchableOpacity
       style={styles.button}
       activeOpacity={.7}
       >
         <Text style={styles.buttonText}>
           Adicionar
         </Text>
        
       </TouchableOpacity>

       { /* O modo abaixo de aproveitar estilos de outro
       componente e adicionar os que deseja */ }

       <Text style={[styles.title,{marginTop:50}]}>
           My Skills
         </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      flex:1, 
      backgroundColor:'#121015',
      paddingHorizontal: 30,
      paddingVertical:70

    },
    title:{
      color:'#FFF',
      fontSize:20,
      fontWeight:'bold'
    },
    input:{
      backgroundColor:'#1f1e25',
      color:'#FFF',
      fontSize:10,
      padding: Platform.OS == 'ios' ? 15 : 10,
      marginTop:30,
      borderRadius:7,
      marginBottom:20
    },
    button:{
      backgroundColor:'#a370f7',
      padding: 15,
      borderRadius:7,
      alignItems:'center'
      
    },
    buttonText:{
      color: '#FFF',
      fontSize:17,
      fontWeight:'bold'

    }


})