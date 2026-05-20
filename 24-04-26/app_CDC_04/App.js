import React from 'react';
import { View, StatusBar } from 'react-native';
import Cabecalho from './components/Cabecalho';
import ListaNoticias from './components/ListaNoticias';

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
      <StatusBar backgroundColor="#c0392b" barStyle="light-content" />
      <Cabecalho />
      <ListaNoticias />
    </View>
  );
}