import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

function Cabecalho() {
  return (
    <View>
      {/* Botão vermelho */}
      <View style={{
        backgroundColor: '#c0392b',
        alignItems: 'center',
        padding: 16,
      }}>
        <TouchableOpacity style={{
          backgroundColor: '#e74c3c',
          paddingHorizontal: 24,
          paddingVertical: 12,
          borderRadius: 6,
        }}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>
            VEJA MAIS NO PORTAL
          </Text>
        </TouchableOpacity>
        <Text style={{ color: '#ccc', fontSize: 12, marginTop: 6 }}>
          cadastre-se, comente, saiba mais
        </Text>
      </View>

      {/* Título da seção */}
      <View style={{
        borderLeftWidth: 5,
        borderLeftColor: '#c0392b',
        paddingLeft: 12,
        marginHorizontal: 16,
        marginTop: 16,
        marginBottom: 8,
      }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#222' }}>
          LEIA MAIS
        </Text>
      </View>
    </View>
  );
}

export default Cabecalho;