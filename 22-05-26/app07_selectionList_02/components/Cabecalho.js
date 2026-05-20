import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

export default function Cabecalho() {

  return (

    <View style={styles.container}>

      <Text style={styles.titulo}>
        SECTIONLIST
      </Text>

      <Image
        source={require('../assets/caderno.jpg')}
        style={styles.imagem}
      />

      <Text style={styles.titulo}>
        Lista de Tarefas
      </Text>

    </View>

  );

}

const styles = StyleSheet.create({

  container: {
    paddingTop: 40,
    paddingBottom: 20,
    backgroundColor: '#1f1f1f',
    alignItems: 'center'
  },

  imagem: {
    width: 140,
    height: 140,
    resizeMode: 'contain',
    marginBottom: 10
  },

  titulo: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold'
  }

});