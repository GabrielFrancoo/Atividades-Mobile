import React from 'react';
import { View, Text, Image } from 'react-native';

function ItemNoticia(props) {
  let titulo   = props.titulo;
  let manchete = props.manchete;
  let data     = props.data;
  let imagem   = props.imagem;

  return (
    <View style={{
      backgroundColor: 'white',
      marginHorizontal: 16,
      marginBottom: 12,
      borderRadius: 6,
      padding: 12,
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: '#eee',
    }}>

      {/* Textos à esquerda */}
      <View style={{ flex: 1, paddingRight: 10 }}>
        <Text style={{
          color: '#c0392b', fontSize: 11,
          fontWeight: 'bold', marginBottom: 4,
        }}>
          {manchete}
        </Text>

        <Text style={{
          color: '#111', fontSize: 15,
          fontWeight: 'bold', marginBottom: 8,
          lineHeight: 21,
        }}>
          {titulo}
        </Text>

        <Text style={{ color: '#999', fontSize: 12 }}>
          {data}
        </Text>
      </View>

      {/* Imagem pequena à direita */}
      <Image
        source={imagem}
        style={{
          width: 70, height: 70,
          borderRadius: 6,
        }}
      />

    </View>
  );
}

export default ItemNoticia;