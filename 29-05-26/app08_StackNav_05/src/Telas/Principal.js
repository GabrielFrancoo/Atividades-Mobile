import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Principal() {
  const nav = useNavigation();

  function proximaTela() {
    nav.navigate("Tela01");
  }

  return (
    <View style={estilos.fundo}>
      <Text style={estilos.subtitulo}>Stack Navigation - parte 2</Text>
      <Text style={estilos.emoji}>🏆</Text>
      <Text style={estilos.titulo}>ESPORTES</Text>
      <Text style={estilos.descricao}>Conheça os maiores times do mundo!</Text>

      <TouchableOpacity style={estilos.botao} onPress={proximaTela}>
        <Text style={estilos.botaoTexto}>INICIAR TOUR</Text>
      </TouchableOpacity>

      <Text style={estilos.rodape}>DSV MOBILE</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: '#0a3d62',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  subtitulo: {
    color: '#a0c4ff',
    fontSize: 16,
    marginBottom: 20,
  },
  emoji: {
    fontSize: 100,
    marginBottom: 10,
  },
  titulo: {
    color: '#FFD700',
    fontSize: 42,
    fontWeight: 'bold',
    letterSpacing: 4,
    marginBottom: 10,
  },
  descricao: {
    color: '#ffffff',
    fontSize: 16,
    marginBottom: 40,
    textAlign: 'center',
  },
  botao: {
    backgroundColor: '#FFD700',
    paddingHorizontal: 40,
    paddingVertical: 14,
    borderRadius: 8,
    marginBottom: 40,
  },
  botaoTexto: {
    color: '#0a3d62',
    fontSize: 16,
    fontWeight: 'bold',
  },
  rodape: {
    color: '#a0c4ff',
    fontSize: 14,
    letterSpacing: 2,
  },
});

export default Principal;
