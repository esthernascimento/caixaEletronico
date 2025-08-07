import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { Button, ScrollView } from 'react-native-web';
import { ImageBackground } from 'react-native-web';

export default function App() {
  const[saldo, setSaldo] = useState('')
  var notas = [200, 100, 50, 20, 10, 5, 2, 1];
  const [qtdNotas, setQtdNotas] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
  
  const sacar = () => {
    var novoSaldo = saldo;
    let copiaArray = [...qtdNotas]

     for(i=0; i<notas.length; i++) {
       let resultado = novoSaldo/notas[i];
       let inteiro = parseInt(resultado);

       copiaArray[i] = inteiro;
  
       if(inteiro == 0){
        continue;
       }

       setQtdNotas(copiaArray);

       console.log(copiaArray[i] + " X notas de " +notas[i]);

       let resto = novoSaldo%notas[i];

       if(resto != 0){
        novoSaldo = resto;
        setSaldo(resto)
       }else {
        break
       }
  
     }

  }

  const limpar =() =>{
    setSaldo('')
    setQtdNotas([0, 0, 0, 0, 0, 0, 0, 0])
    
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
    <ImageBackground 
      source={require('./assets/caixa-eletronico.jpg')}
      style={styles.background}
      resizeMode="cover"
      >

      <TextInput 
      style={styles.input} 
      placeholder='Digite o valor'
      keyboardType='numeric'
      value={saldo}
      onChangeText={(text) =>setSaldo(parseInt(text))}
      >

      </TextInput>
      <View style={styles.btns}>
        <Button title="Sacar" onPress={() => sacar()}></Button>
      <Button title="Limpar" onPress={() => limpar()}></Button>
      </View>
      
      <View style={styles.divSaque}>
        {qtdNotas[0] !== 0  
        ?  
        <View style={styles.divNota}><Text style={styles.qtdNota}>{qtdNotas[0]}X</Text><Image style={styles.nota}
          source={require('./assets/nota200.jpg')}></Image></View> 
        : 
        <View><Text></Text></View>}
        
        {qtdNotas[1] !== 0 
        ? 
        <View style={styles.divNota}><Text style={styles.qtdNota}>{qtdNotas[1]}X</Text><Image style={styles.nota}
          source={require('./assets/nota100.jpg')}></Image></View> 
        :   
        <View><Text></Text></View>} 

        {qtdNotas[2] !== 0 
        ? 
        <View style={styles.divNota}><Text style={styles.qtdNota}>{qtdNotas[2]}X</Text><Image style={styles.nota}
          source={require('./assets/nota50.jpg')}></Image></View> 
        : 
        <View><Text></Text></View>}  

        {qtdNotas[3] !== 0 
        ? 
        <View style={styles.divNota}><Text style={styles.qtdNota}>{qtdNotas[3]}X</Text><Image style={styles.nota}
        source={require('./assets/nota20.jpg')}></Image></View> 
        : 
        <View><Text></Text></View>}

        {qtdNotas[4] !== 0 
        ? 
        <View style={styles.divNota}><Text style={styles.qtdNota}>{qtdNotas[4]}X</Text><Image style={styles.nota}
          source={require('./assets/nota10.jpg')}></Image></View>
        : 
        <View><Text></Text></View>}   

        {qtdNotas[5] !== 0 
        ? 
        <View style={styles.divNota}><Text style={styles.qtdNota}>{qtdNotas[5]}X</Text><Image style={styles.nota}
          source={require('./assets/nota5.jpg')}></Image></View>
        : 
        <View><Text></Text></View>} 

        {qtdNotas[6] !== 0 
        ? 
        <View style={styles.divNota}><Text style={styles.qtdNota}>{qtdNotas[6]}X</Text><Image style={styles.nota}
          source={require('./assets/nota2.jpg')}></Image></View> 
        : 
        <View><Text></Text></View>}  

        {qtdNotas[7] !== 0 
        ? 
        <View style={styles.divNota}><Text style={styles.qtdNota}>{qtdNotas[7]}X</Text><Image style={styles.nota}
          source={require('./assets/nota1.jpg')}></Image> </View>
        : 
        <View><Text></Text></View>} 
      </View>
      
      <StatusBar style="auto" />
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    
  },

  background: {
    flex: 1, 
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },

  input: {
    width: 250,
    height: 50,
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 8,
    textAlign: 'center',
    marginTop: 180,
  },

  btns: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 30,
  },

  divSaque: {
    width: '100%',
    gap: 10,
    marginTop: 200,
    padding: 5,
    flexDirection: 'column',
  },

  divNota: {
    height: 40,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  nota: {
    width: 90,
    height: 40,
  },


  qtdNota: {
    fontSize: 14,
    fontWeight: 'bold',
    color: "#fff"
  }

});
