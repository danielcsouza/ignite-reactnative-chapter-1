import React, {useState, useEffect} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    FlatList,
   } from 'react-native';

import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';


export function Home(){

  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkill] = useState([]);
  const [greeting, setGreeting] = useState('');

  function handleAddNewSkill(){
    setMySkill(oldState =>[...oldState, newSkill]);
  }

  useEffect(()=>{
    //console.log('use effect executado')
    const currentHour = new Date().getHours();
    console.log(currentHour)

    if (currentHour<12){
      setGreeting('Bom dia');
    }else if (currentHour >=12 && currentHour <18){
      setGreeting('Boa tarde');
    }
    else{
      setGreeting('Boa noite');
    }

  },[])


  return(
    <View style={styles.container}>
       <Text style={styles.title}>
         Welcome, Daniel 
      </Text>

      <Text style={styles.greetings}>
      {greeting}
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

       

        <FlatList 
          data={mySkills}
          keyExtractor={item=>item}
          renderItem={({item}) => (
          <SkillCard  key={item} skill={item}/>
        )}
       />
       
         
       

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
    greetings:{
      color: '#FFF'
    }
   
})