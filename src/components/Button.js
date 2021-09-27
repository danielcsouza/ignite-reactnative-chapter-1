import React from "react";
import {TouchableOpacity, Text, StyleSheet} from "react-native";

export function Button({onPress}){
    return (
    <TouchableOpacity
       style={styles.button}
       activeOpacity={.7}
       onPress={onPress}
       >    
         <Text style={styles.buttonText}>
           Adicionar
         </Text>
        
       </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
   
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
    },
   
})