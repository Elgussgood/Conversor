import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import React from 'react';
const buttons = ['AC', 'DEL', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '3', '2', '1', '+', 0, '.', '+/-', '=']
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  result: {
    backgroundColor: "#f5f5f5",
    width:"100%",
    minHeight: 300, 
    alignItems:"flex-end",
    justifyContent:'flex-end'
  },
  resultText:{
    margin:10, 
    fontSize:25,
  },
  button:{
    backgroundColor: '#e5e5e5',
    minWidth:90, 
    minHeight:130,
    flex:2,
    alignItems:'center',
    justifyContent:'center'
  },
  buttons:{
    flexDirection: 'row',
    flexWrap:'wrap',

  }
})
export default function App() {
  
  return (
    <View>
      <View style={styles.result}>
        <Text style={styles.resultText}> hola</Text>
      </View>
      <View style={styles.buttons}>
        {buttons.map((button)=>
          button === '=' ?
          <TouchableOpacity key={button} style={styles.button}>
            <Text>{button}</Text>
          </TouchableOpacity>
          :
          <TouchableOpacity key={button} style={styles.button}>
            <Text>{button}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

;
