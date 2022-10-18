import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import React from 'react';
const buttons = ['7', '8', '9', '4', '5', '6', '1', '2', '3', 0, 'AC', 'DEL', 'CONVERTIR']
const options = ['C=>F', 'C=>K', 'F=>C', 'F=>K', 'K=>C','K=>F']
var x =10;
var muestra =""
function teclado (tecla){

console.log(tecla);
var y
if(tecla === 'DEL'||tecla==='AC'||tecla==='CONVERTIR'){
  console.log("no es numero");
}else{
  muestra +=tecla
  console.log("muestra" +muestra);
  y = parseFloat(tecla)
  x += y
  console.log(x);
}
}
const styles = StyleSheet.create({
  result: {
    backgroundColor: "#4B4B4B",
    width:"100%",
    height:120,
    minHeight: 400, 
    alignItems:"flex-end",
    justifyContent:'flex-end'
  },
  txtcolor:{
    color:'#B9BF00',
    fontSize: 15
  },
  resultText:{
    margin:10, 
    fontSize:50,
    color:'#F7FF00'
  },
  button:{  
    borderColor:'#525900' ,
    backgroundColor: '#3F3F3F',
    minWidth:130, 
    minHeight:96.5,
    flex:2,
    alignItems:'center',
    justifyContent:'center',
    borderWidth:.5
  },
  buttons:{
    
    flexDirection: 'row',
    flexWrap:'wrap',

  },
  options:{
    flexDirection: 'row',
    flexWrap:'wrap',
  },
  opcion:{
    borderColor:'#525900' ,
    backgroundColor: '#3F3F3F',
    minWidth:5, 
    minHeight:65,
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    borderWidth:1
  }
})
export default function App() {
  
  return (
    <View>
      <View style={styles.result}>
        <Text style={styles.resultText}>{tecla}</Text>
      </View>
      <View style={styles.options}>
        {options.map((opcion)=>
        <TouchableOpacity key={opcion} style={styles.opcion}>
          <Text style={styles.txtcolor}>{opcion}</Text>
        </TouchableOpacity>
        )}
      </View>
      <View style={styles.buttons}>
        {buttons.map((button)=>
          <TouchableOpacity key={button} style={styles.button} onPress={()=> teclado(button)}>
            <Text style={styles.txtcolor}>{button}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

;
