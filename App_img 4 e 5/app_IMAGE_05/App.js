import React from 'react';
import { View, Text, Image } from 'react-native';

function App() {
  return (
    <View style={{ flex: 1 }}>

      {/* Barra superior */}
      <View style={{
        backgroundColor: '#3b3b98',
        padding: 20,
        alignItems: 'center'
      }}>
        <Text style={{ color: 'white', fontSize: 20 }}>
          Immediato PARA MOTOBOY
        </Text>
      </View>

      <View style={{
        backgroundColor: '#6c6ccf',
        height: 20
      }} />

      {/* Conteúdo */}
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
      }}>

        <Image
          source={require('./img/moto.jpg')}
          style={{ width: 120, height: 120, marginBottom: 30, borderRadius: 60,borderColor: 'black', borderWidth: 3 }}
        />

        <Text style={{
          textAlign: 'center',
          fontSize: 20,
          fontWeight: 'bold',
          lineHeight: 28
        }}>
          Seja independente,{"\n"}
          trabalhe menos e{"\n"}
          ganhe bem mais.{"\n"}
          Dê um adeus ao seu chefe!
        </Text>

      </View>

      {/* Barra inferior */}
      <View style={{
        backgroundColor: '#3b3b98',
        height: 40
      }} />

    </View>
  );
}

export default App;