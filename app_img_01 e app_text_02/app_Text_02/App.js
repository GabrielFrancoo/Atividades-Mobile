import React from 'react';
import {View, Text } from 'react-native';

const App = () => {
  return (
    <View style={{flex:1,padding:30,backgroundColor: 'lightblue'}}>
      <View style={{flex:1,backgroundColor: 'red',borderColor: 'black',borderWidth: 10, marginBottom: 30}}>
        <Text style={{fontWeight: 'normal',fontFamily: 'Roboto', fontSize: 18,color: 'white'}}>A tecnologia está cada vez mais presente no nosso dia a dia.{'\n'}Ela facilita a comunicação, o trabalho e o acesso à informação.</Text></View>
      
      <View style={{flex:1,backgroundColor: 'green',borderColor: 'black',borderWidth: 10, marginBottom: 30}}>
        <Text style={{fontWeight:'bold',fontFamily: 'Poppins', fontSize: 25,color: 'red',}}>Aprender programação abre muitas oportunidades no mercado.{'\n'}Além disso, desenvolve o raciocínio lógico e a criatividade.</Text></View>
      
      <View style={{flex:1,backgroundColor: 'blue',borderColor: 'black',borderWidth: 10, marginBottom: 30}}>
        <Text style={{fontWeight: 'bold',fontFamily: 'sans-serif',color: 'orange', fontSize:30}}>O estudo constante é importante para alcançar bons resultados.{'\n'}Com dedicação, qualquer pessoa pode aprender coisas novas.</Text></View>
      
      <View style={{flex:1,backgroundColor: 'yellow',borderColor: 'black',borderWidth: 10}}>
        <Text style={{fontWeight: 'normal',fontFamily: 'monospace',color: 'brown', fontSize: 40}}>A colaboração entre pessoas ajuda a resolver problemas complexos.{'\n'}Trabalhar em equipe também fortalece o aprendizado.</Text></View>
    </View>
  );
};

export default App;