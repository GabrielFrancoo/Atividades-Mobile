// App.js

import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import CxTx from './components/CxTx';

export default function App() {

  const campos = [
    {
      placeholder: 'Digite seu nome',
      maxLength: 30,
      autoCapitalize: 'characters'
    },
    {
      placeholder: 'Qual a sua idade?',
      keyboardType: 'numeric',
      maxLength: 2
    },
    {
      placeholder: 'CPF:999.999.999-00',
      editable: false
    },
    {
      placeholder: 'Digite seu e-mail',
      keyboardType: 'email-address'
    },
    {
      placeholder: 'Digite seu número celular',
      keyboardType: 'numeric'
    },
    {
      placeholder: 'Observações:',
      multiline: true,
      maxLength: 200,
      altura: 100
    },
    {
      placeholder: 'Digite sua senha',
      secureTextEntry: true,
      maxLength: 5
    }
  ];

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.topo}>
        <Text style={styles.titulo}>Aula 06 - Desafio 02</Text>
        <Text style={styles.subtitulo}>Componente InputText</Text>
      </View>

      <Text style={styles.label}>Verifique o formulário abaixo:</Text>

      {campos.map((item, index) => (
        <CxTx key={index} dados={item} />
      ))}

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },

  topo: {
    backgroundColor: '#d9d9d9',
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 25
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold'
  },

  subtitulo: {
    fontSize: 22
  },

  label: {
    marginBottom: 15,
    fontSize: 16
  }
});