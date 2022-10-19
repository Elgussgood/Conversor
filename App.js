import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import React from 'react';
const buttons = ['7', '8', '9', '4', '5', '6', '1', '2', '3', 0, 'AC', 'DEL', 'CONVERTIR']
const options = ['C=>F', 'C=>K', 'F=>C', 'F=>K', 'K=>C', 'K=>F']
var x = 10;
var muestra = ""




const styles = StyleSheet.create({
  result: {
    backgroundColor: "#4B4B4B",
    width: "100%",
    height: 120,
    minHeight: 400,
    alignItems: "flex-end",
    justifyContent: 'flex-end'
  },
  txtcolor: {
    color: '#B9BF00',
    fontSize: 15
  },
  resultText: {
    margin: 10,
    fontSize: 50,
    color: '#F7FF00'
  },
  button: {
    borderColor: '#525900',
    backgroundColor: '#3F3F3F',
    minWidth: 130,
    minHeight: 96.5,
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: .5
  },
  buttons: {

    flexDirection: 'row',
    flexWrap: 'wrap',

  },
  options: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  opcion: {
    borderColor: '#525900',
    backgroundColor: '#3F3F3F',
    minWidth: 5,
    minHeight: 70,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1
  },
  txtacc:{
    margin: 10,
    fontSize: 50,
    color: '#F7FF00'
  },
  grados: {
    marginTop: -80,
    backgroundColor: "#4B4B4B",
    width: "50%",
    height: 80,
    minHeight: 20,
    alignItems: "flex-start",
    justifyContent: 'flex-start'
  },
  his:{
    color:'#B5C300',
    fontSize:30,
    margin:10
  }
})
export default function App() {

  const [res, setRes] = useState("")
  const [acc, setAcc] = useState("")
  const [his, setHis] = useState("")
  function teclado(tecla) {
    
    if (tecla === 'DEL' || tecla === 'AC' || tecla === 'CONVERTIR') {
      var cara=""
      var chi
      switch(tecla){
        case "AC":
          muestra=""
          console.log("se borro");
          setRes(parseFloat(muestra))
        break
        case 'DEL':
          if(muestra.length>=2){
            let ola = 0
          do{
            cara +=" "+muestra.charAt(ola)
            ola++
          }while(ola<=muestra.length-1)
            chi = cara.split(" ")
            chi.pop()
            ola=0
            muestra=''
          do{
            muestra +=chi[ola]
            console.log(chi[ola]);
            ola++
          }while(ola<=chi.length-1)
          }else{
            muestra=""
          }
          setRes(parseFloat(muestra))
        break
        case 'CONVERTIR':
          let x = res
          switch(acc){
            case "C=>F":
              x = x*1.8 
              x=x+32
              setRes(x)
              setHis(res)
            break;
            case 'C=>K':
              x=x+273.15
              setRes(x)
              setHis(res)
            break;
            case 'F=>C':
              x = x-32
              x = x/1.8
              setRes(x)
              setHis(res)
            break;
            case 'F=>K':
              x=x-32  
              x = x*.55555555
              x=x+273.15
              setRes(x)
              setHis(res)
            break;
            case 'K=>C':
              x=x-273.15
              setRes(x)
              setHis(res)
            break;
            case 'K=>F':
              x=x-273.15
              x = x*1.8 
              x=x+32
              setRes(x)
              setHis(res)
            break;
          }
        break
      }
    } else {
      muestra += tecla
      setRes(parseFloat(muestra))
    }
    
  }
  function op(opc){
    setAcc(opc)
  }


  return (
    <View>
      <View style={styles.result}>
      <Text style={styles.his}>{his}</Text>
        <Text style={styles.resultText}>{res}</Text>
      </View>
      <View style={styles.grados}>
        <Text style={styles.txtacc}>{acc}</Text>
      </View>
      <View style={styles.options}>
        {options.map((opcion) =>
          <TouchableOpacity key={opcion} style={styles.opcion} onPress={() => op(opcion)}>
            <Text style={styles.txtcolor}>{opcion}</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.buttons}>
        {buttons.map((button) =>
          <TouchableOpacity key={button} style={styles.button} onPress={() => teclado(button)}>
            <Text style={styles.txtcolor}>{button}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
