import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native-web';

  const estilos = StyleSheet.create({
    fundo: {
      backgroundColor: 'powderblue', flex: 1,
      paddingTop: 25, paddingHorizontal: 10
    },
    cabecalho: {
        backgroundColor: 'white', height: '15%',
        paddingTop: 20, flexDirection: 'row', paddingHorizontal: 20,
        justifyContent: 'space-between', alignItems: 'center'
    },
    corpo: {
        backgroundColor: 'white', height: '75%'
    },
    rodape: {
        backgroundColor: 'white', 
        height: '10%',
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        alignItems: 'center'
    },
    itemCorp: {
      backgroundColor: 'blue',
      marginTop: 15,
      borderRadius: 20,
      marginHorizontal: 10,
      height: 70,
      borderLeftWidth: 3,
      borderLeftColor: 'red'

    }

  });

function App() {
  let cabImg1 = require('./img/img1.png');
  let cabImg2 = require('./img/img2.png');
  let rodImg7 = require('./img/img7.png'); // Midia
  let rodImg8 = require('./img/img8.png'); // Locais
  let rodImg9 = require('./img/img9.png'); // Perfil central
  let rodImg10 = require('./img/img10.png'); // Agenda
  let rodImg11 = require('./img/img11.png'); // Agenda

  
  return (
    <View id="View01" style={estilos.fundo}>
      <View id="View02" style={{
        backgroundColor: 'white', height: '15%',
        paddingTop: 20, flexDirection: 'row', paddingHorizontal: 20,
        justifyContent: 'space-between', alignItems: 'center'
      }}>
        <View id="View05" style={estilos.cabecalho}>
          <Image source={cabImg1} style={{ width: 50, height: 50 }} />
          <Text style={{ paddingLeft: 15 }}>Gabriel Ozório Franco</Text>
        </View>
        <Image source={cabImg2} style={{ width: 18, height: 24, resizeMode: 'contain' }} />
      </View>
      <ScrollView id="View03" style={estilos.corpo}>
        <View style={estilos.itemCorp}><Text>TESTE</Text></View>
        <View style={estilos.itemCorp}><Text>TESTE</Text></View>
        <View style={estilos.itemCorp}><Text>TESTE</Text></View>
        <View style={estilos.itemCorp}><Text>TESTE</Text></View>
        <View style={estilos.itemCorp}><Text>TESTE</Text></View>
        <View style={estilos.itemCorp}><Text>TESTE</Text></View>
        <View style={estilos.itemCorp}><Text>TESTE</Text></View>
        <View style={estilos.itemCorp}><Text>TESTE</Text></View>
      </ScrollView>

      <View id="View04" style={estilos.rodape}>
        <Image source={rodImg7} style={{ width: 50, height: 60, resizeMode: 'contain'}} />
        <Image source={rodImg8} style={{ width: 50, height: 60, resizeMode: 'contain'}} />
        <Image source={rodImg9} style={{ width: 60, height: 60, resizeMode: 'contain', borderRadius: 25 }} />
        <Image source={rodImg10} style={{ width: 50, height: 60, resizeMode: 'contain'}} />
        <Image source={rodImg11} style={{ width: 50, height: 60, resizeMode: 'contain'}} />

        <Text style={{ color: 'white', fontSize: 24 }}>☰</Text>
      </View>

      </View>
  );
}
export default App;