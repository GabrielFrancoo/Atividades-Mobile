import React from 'react';
import { View } from 'react-native';

import Cabecalho from './components/Cabecalho';
import Conteudo from './components/Conteudo';
import Rodape from './components/Rodape';

import styles from './styles/styles';

function App() {

  const autor = "Gabriel Franco";
  const data = "15/05/2026";

  return (
    <View style={styles.fundo}>

      <Cabecalho />

      <Conteudo />

      <Rodape autor={autor} data={data} />

    </View>
  );
}

export default App;