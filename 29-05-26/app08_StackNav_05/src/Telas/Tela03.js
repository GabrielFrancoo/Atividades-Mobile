import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Tela03() {
  const nav = useNavigation();

  function telaAnterior() {
    nav.goBack();
  }

  return (
    <ScrollView contentContainerStyle={estilos.fundo}>
      <Text style={estilos.titulo}>Manchester City</Text>
      <Text style={estilos.escudo}>🩵</Text>
      <Text style={estilos.fundado}>Fundado em: 16 de abril de 1880</Text>

      <View style={estilos.card}>
        <Text style={estilos.info}>🏆 O Manchester City é o atual dominador da Premier League inglesa.</Text>
        <Text style={estilos.info}>🌍 Conquistou a tríplice coroa europeia na temporada 2022/23.</Text>
        <Text style={estilos.info}>🏟️ Joga no Etihad Stadium, em Manchester, Inglaterra.</Text>
        <Text style={estilos.info}>👕 Suas cores são azul celeste e branco.</Text>
        <Text style={estilos.info}>⭐ Treinado por Pep Guardiola, um dos maiores treinadores da história.</Text>
      </View>

      <TouchableOpacity style={estilos.botaoVoltar} onPress={telaAnterior}>
        <Text style={estilos.botaoTexto}>VOLTAR</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  fundo: {
    flexGrow: 1,
    backgroundColor: '#1a1a2e',
    alignItems: 'center',
    padding: 20,
    paddingTop: 30,
  },
  titulo: {
    color: '#74c0fc',
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  escudo: {
    fontSize: 80,
    marginBottom: 10,
  },
  fundado: {
    color: '#a0c4ff',
    fontSize: 14,
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#16213e',
    borderRadius: 12,
    padding: 20,
    width: '100%',
    marginBottom: 30,
    borderLeftWidth: 4,
    borderLeftColor: '#74c0fc',
  },
  info: {
    color: '#ffffff',
    fontSize: 15,
    marginBottom: 14,
    lineHeight: 22,
  },
  botaoVoltar: {
    backgroundColor: '#e74c3c',
    paddingHorizontal: 40,
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 20,
  },
  botaoTexto: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default Tela03;
