import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Tela02() {
  const nav = useNavigation();

  function proximaTela() {
    nav.navigate("Tela03");
  }

  function telaAnterior() {
    nav.goBack();
  }

  return (
    <ScrollView contentContainerStyle={estilos.fundo}>
      <Text style={estilos.titulo}>FC Barcelona</Text>
      <Text style={estilos.escudo}>🔵🔴</Text>
      <Text style={estilos.fundado}>Fundado em: 29 de novembro de 1899</Text>

      <View style={estilos.card}>
        <Text style={estilos.info}>🏆 O Barcelona é um dos clubes mais titulados da história do futebol europeu.</Text>
        <Text style={estilos.info}>🌍 Seu lema é "Més que un club" (Mais que um clube), refletindo sua identidade cultural catalã.</Text>
        <Text style={estilos.info}>🏟️ Joga no Estadi Olímpic Lluís Companys (em reforma no Camp Nou).</Text>
        <Text style={estilos.info}>👕 Suas cores são azul e grená (vermelho escuro).</Text>
        <Text style={estilos.info}>⭐ Revelou craques como Messi, Ronaldinho e Xavi.</Text>
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
    color: '#a0c4ff',
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  escudo: {
    fontSize: 80,
    marginBottom: 10,
  },
  fundado: {
    color: '#FFD700',
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
    borderLeftColor: '#a0c4ff',
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

export default Tela02;
