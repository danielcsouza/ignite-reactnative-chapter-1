import React, {useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
   } from 'react-native';


export function Home(){

  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkill] = useState([]);

  function handleAddNewSkill(){
    setMySkill(oldState =>[...oldState, newSkill]);
  }

  return(
    <View style={styles.container}>
       <Text style={styles.title}>
         Welcome, Daniel 
      </Text>

       <TextInput
        style={styles.input}
        placeholder='New Skill'
        placeholderTextColor ='#555'
        onChangeText={setNewSkill}
       />

       <TouchableOpacity
       style={styles.button}
       activeOpacity={.7}
       onPress={handleAddNewSkill}
       >
         <Text style={styles.buttonText}>
           Adicionar
         </Text>
        
       </TouchableOpacity>

       { /* O modo abaixo de aproveitar estilos de outro
       componente e adicionar os que deseja */ }

       <Text style={[styles.title,{marginVertical:50}]}>
           My Skills 
       </Text>

       {
         mySkills.map(skill => (
            <TouchableOpacity key={skill}
              style={styles.buttonSkill}
              activeOpacity={.7}
            >
          <Text style={styles.textSkill}>
              {skill}
          </Text>
       </TouchableOpacity>
         ))
        
       }

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
      fontSize:18,
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
    },
    buttonSkill:{
      backgroundColor:'#1f1e25',
      borderRadius:50,
      padding: 15,
      alignItems:'center',
      marginVertical:10
    },
    textSkill:{
      color: '#FFF',
      fontSize: 22,
      fontWeight:'bold'
    },


})