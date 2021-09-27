import React from "react";

import { TouchableOpacity, Text, StyleSheet } from "react-native";

export function SkillCard(){
    return (
        <TouchableOpacity key="1"
        style={styles.buttonSkill}
        activeOpacity={.7}
      >
    <Text style={styles.textSkill}>
        skill
    </Text>
 </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
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