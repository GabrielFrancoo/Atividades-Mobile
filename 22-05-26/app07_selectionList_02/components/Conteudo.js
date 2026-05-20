import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SectionList,
  StyleSheet,
  Alert,
  Modal
} from 'react-native';

export default function Conteudo() {

  const [tarefa, setTarefa] = useState('');
  const [data, setData] = useState('');

  const [tarefas, setTarefas] = useState([]);

  const [modalVisible, setModalVisible] = useState(false);

  const [tarefaSelecionada, setTarefaSelecionada] = useState(null);

  const [secaoSelecionada, setSecaoSelecionada] = useState(null);

  function adicionarTarefa() {

    if (tarefa === '' || data === '') {

      Alert.alert(
        'Erro',
        'Preencha a tarefa e a data'
      );

      return;

    }

    const novaLista = [...tarefas];

    const secaoExistente = novaLista.find(
      (item) => item.title === data
    );

    if (secaoExistente) {

      secaoExistente.data.push(tarefa);

    } else {

      novaLista.push({
        title: data,
        data: [tarefa]
      });

      novaLista.sort((a, b) =>
        a.title.localeCompare(b.title)
      );

    }

    setTarefas(novaLista);

    setTarefa('');
    setData('');

  }

  function removerTarefa(secao, tarefa) {

    setSecaoSelecionada(secao);

    setTarefaSelecionada(tarefa);

    setModalVisible(true);

  }

  function confirmarRemocao() {

    const novaLista = tarefas

      .map((item) => {

        if (item.title === secaoSelecionada.title) {

          return {

            ...item,

            data: item.data.filter(
              (t) => t !== tarefaSelecionada
            )

          };

        }

        return item;

      })

      .filter((item) =>
        item.data.length > 0
      );

    setTarefas(novaLista);

    setModalVisible(false);

  }

  return (

    <View style={styles.container}>

      <TextInput
        style={styles.input}
        placeholder="Digite a tarefa"
        placeholderTextColor="#888"
        value={tarefa}
        onChangeText={setTarefa}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite a data"
        placeholderTextColor="#888"
        value={data}
        onChangeText={setData}
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={adicionarTarefa}
      >

        <Text style={styles.textoBotao}>
          Adicionar
        </Text>

      </TouchableOpacity>

      <SectionList

        sections={tarefas}

        keyExtractor={(item, index) =>
          item + index
        }

        renderSectionHeader={({ section }) => (

          <Text style={styles.data}>
            {section.title}
          </Text>

        )}

        renderItem={({ item, section }) => (

          <TouchableOpacity
            style={styles.item}
            onPress={() =>
              removerTarefa(section, item)
            }
          >

            <Text style={styles.textoItem}>
              {item}
            </Text>

          </TouchableOpacity>

        )}

        showsVerticalScrollIndicator={false}

      />

      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="fade"
      >

        <View style={styles.modalFundo}>

          <View style={styles.modalBox}>

            <Text style={styles.modalTitulo}>
              Remover tarefa?
            </Text>

            <Text style={styles.modalTexto}>
              Deseja excluir esta tarefa?
            </Text>

            <View style={styles.modalBotoes}>

              <TouchableOpacity
                style={styles.botaoCancelar}
                onPress={() =>
                  setModalVisible(false)
                }
              >

                <Text style={styles.textoBotaoModal}>
                  Cancelar
                </Text>

              </TouchableOpacity>

              <TouchableOpacity
                style={styles.botaoExcluir}
                onPress={confirmarRemocao}
              >

                <Text style={styles.textoBotaoModal}>
                  Excluir
                </Text>

              </TouchableOpacity>

            </View>

          </View>

        </View>

      </Modal>

    </View>

  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 18
  },

  input: {
    backgroundColor: '#242424',
    color: '#fff',

    paddingVertical: 16,
    paddingHorizontal: 18,

    borderRadius: 15,

    marginBottom: 14,

    fontSize: 16,

    borderWidth: 1,
    borderColor: '#333'
  },

  botao: {
    backgroundColor: '#00b894',

    paddingVertical: 16,

    borderRadius: 15,

    alignItems: 'center',

    marginBottom: 25
  },

  textoBotao: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },

  data: {
    fontSize: 20,
    color: '#00cec9',
    fontWeight: 'bold',

    marginBottom: 12,
    marginTop: 15
  },

  item: {
    backgroundColor: '#242424',

    padding: 18,

    borderRadius: 15,

    marginBottom: 12,

    borderLeftWidth: 5,
    borderLeftColor: '#00b894'
  },

  textoItem: {
    color: '#fff',
    fontSize: 16
  },

  modalFundo: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center'
  },

  modalBox: {
    width: '85%',
    backgroundColor: '#1f1f1f',
    padding: 25,
    borderRadius: 20
  },

  modalTitulo: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10
  },

  modalTexto: {
    color: '#ccc',
    fontSize: 16,
    marginBottom: 20
  },

  modalBotoes: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  botaoCancelar: {
    backgroundColor: '#636e72',
    padding: 12,
    borderRadius: 10,
    width: '45%',
    alignItems: 'center'
  },

  botaoExcluir: {
    backgroundColor: '#d63031',
    padding: 12,
    borderRadius: 10,
    width: '45%',
    alignItems: 'center'
  },

  textoBotaoModal: {
    color: '#fff',
    fontWeight: 'bold'
  }

});