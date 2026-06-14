import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Tela01() {
  const nav = useNavigation();

  function proximaTela() {
    nav.navigate("Tela02");
  }

  function telaAnterior() {
    nav.goBack();
  }

  return (
    <ScrollView contentContainerStyle={estilos.fundo}>
      <Text style={estilos.titulo}>Real Madrid</Text>
      <Text style={estilos.escudo}>⚽</Text>
      <Text style={estilos.fundado}>Fundado em: 6 de março de 1902</Text>

      <View style={estilos.card}>
        <Text style={estilos.info}>🏆 O Real Madrid é o clube com mais títulos da UEFA Champions League.</Text>
        <Text style={estilos.info}>🌍 É considerado o maior clube de futebol do mundo pelo jornal France Football.</Text>
        <Text style={estilos.info}>🏟️ Joga no estádio Santiago Bernabéu, em Madrid, Espanha.</Text>
        <Text style={estilos.info}>👕 Suas cores são o branco e o dourado.</Text>
        <Text style={estilos.info}>⭐ Conquistou mais de 35 títulos da La Liga espanhola.</Text>
      </View>

      <View style={estilos.botoesRow}>
        <TouchableOpacity style={estilos.botaoVoltar} onPress={telaAnterior}>
          <Text style={estilos.botaoTexto}>VOLTAR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilos.botaoProximo} onPress={proximaTela}>
          <Text style={estilos.botaoTexto}>PRÓXIMO TIME</Text>
        </TouchableOpacity>
      </View>
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
    color: '#FFD700',
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
    borderLeftColor: '#FFD700',
  },
  info: {
    color: '#ffffff',
    fontSize: 15,
    marginBottom: 14,
    lineHeight: 22,
  },
  botoesRow: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 20,
  },
  botaoVoltar: {
    backgroundColor: '#e74c3c',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  botaoProximo: {
    backgroundColor: '#27ae60',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  botaoTexto: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default Tela01;
