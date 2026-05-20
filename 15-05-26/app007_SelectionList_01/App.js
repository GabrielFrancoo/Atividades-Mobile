import React from 'react';
import {
  View,
  Text,
  SectionList,
  TouchableOpacity,
  Alert,
  Platform
} from 'react-native';

import dados_Alunos from './src/dados/dados_alunos.json';
import estilo1 from './src/styleSheet/estilos1';

function App() {

  function mostrarDetalhes(aluno) {

    const mensagem =
      `CPF: ${aluno.cpf}\n` +
      `Nascimento: ${aluno.nascimento}\n` +
      `Ano: ${aluno.ano}`;

    if (Platform.OS === 'web') {

      alert(aluno.nome + '\n\n' + mensagem);

    } else {

      Alert.alert(aluno.nome, mensagem);

    }
  }

  function mostrarItem({ item }) {

    return (
      <TouchableOpacity
        style={estilo1.item}
        onPress={() => mostrarDetalhes(item)}
        activeOpacity={0.2}
      >

        <Text style={estilo1.nome}>
          {item.nome}
        </Text>

      </TouchableOpacity>
    );
  }

  function mostrarCabecalhoLista({ section }) {

    return (
      <View style={estilo1.cabecalho}>
        <Text style={estilo1.cabTexto}>
          {section.title}
        </Text>
      </View>
    );
  }

  function extrairId(item) {
    return item.id.toString();
  }

  return (
    <View style={estilo1.fundo}>

      <Text style={estilo1.titulo}>
        Lista de Alunos por Curso
      </Text>

      <SectionList
        sections={dados_Alunos}
        keyExtractor={extrairId}
        renderItem={mostrarItem}
        renderSectionHeader={mostrarCabecalhoLista}
      />

    </View>
  );
}

export default App;