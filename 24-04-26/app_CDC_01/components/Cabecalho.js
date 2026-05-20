import React from 'react';
import { View, Text, Image } from 'react-native';

function Cabecalho(props) {
  let imagem   = props.imagem;
  let titulo   = props.titulo;
  let subtitulo = props.subtitulo;

  return (
    <View style={{
      backgroundColor: 'darkred',
      alignItems: 'center',
      padding: 20,
    }}>
      <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold' }}>
        {titulo}
      </Text>

      {/* ✅ imagem recebida por parâmetro */}
      <Image
        source={imagem}
        style={{ width: 80, height: 80, marginVertical: 10, borderRadius: 40 }}
      />

      <Text style={{ color: 'white', fontSize: 16 }}>
        {subtitulo}
      </Text>
    </View>
  );
}

export default Cabecalho;