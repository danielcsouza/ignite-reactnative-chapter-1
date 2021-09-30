import React from "react";
import {
      TouchableOpacity, 
      Text,
      StyleSheet,
      TouchableOpacityProps
    } from "react-native";

{/* outra forma de tipar sem usar interface */}    
//type ButtonProps = TouchableOpacityProps;

interface ButtonProps extends TouchableOpacityProps{
  title: string;
}

{/*capturar todas as propriedaade do objeto por meio do rest - adicionando
uma propriedade especifica title e também herdando todas as propriedades do 
 TouchableOpacityProps por meio da interface acima com o ...rest */}  

export function Button({title,...rest}: ButtonProps){
    return (
    <TouchableOpacity
       style={styles.button}
       activeOpacity={.7}
       {...rest}
       >    
         <Text style={styles.buttonText}>
           {title}
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
