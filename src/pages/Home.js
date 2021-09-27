import React, {useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput
   } from 'react-native';

import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';


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

       <Button onPress={handleAddNewSkill}/>

       { /* O modo abaixo de aproveitar estilos de outro
       componente e adicionar os que deseja */ }

       <Text style={[styles.title,{marginVertical:50}]}>
           My Skills 
       </Text>

       {
         mySkills.map(skill => (
          <SkillCard/>
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
   
})