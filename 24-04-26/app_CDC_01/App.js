import React from 'react';
import { View } from 'react-native';
import Cabecalho from './components/Cabecalho';
import Rodape from './components/Rodape';
import Conteudo from './components/Conteudo';

export default function App() {
  return (
    <View style={{ flex: 1 }}>

      
      <Cabecalho
        imagem={require('./img/logo2.jpg')}
        titulo="FUNDAMENTOS II"
        subtitulo="DSV MOBILE"
      />

      <Conteudo />

      
      <Rodape
        nome="Gabriel Ozório Franco"
        data="24/04/2025"
      />

    </View>
  );
}