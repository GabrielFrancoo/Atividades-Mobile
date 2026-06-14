import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Principal() {
  const nav = useNavigation();

  function acessaTela(tela) {
    nav.navigate(tela);
  }

  return (
    <ScrollView style={styles.fundo}>
      <View style={styles.cabecalho}>
        <Text style={styles.emoji}>🎮</Text>
        <Text style={styles.titulo}>Game World</Text>
        <Text style={styles.subtitulo}>Stack Navigation</Text>
        <Text style={styles.disciplina}>Dsv Mobile</Text>
      </View>

      <View style={styles.corpo}>
        <Text style={styles.secao}>Explorar</Text>

        <TouchableOpacity style={[styles.botao, { backgroundColor: '#e94560' }]} onPress={() => acessaTela('Historia')}>
          <Text style={styles.botaoIcon}>📖</Text>
          <Text style={styles.botaoTexto}>História dos Games</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.botao, { backgroundColor: '#0f3460' }]} onPress={() => acessaTela('Consoles')}>
          <Text style={styles.botaoIcon}>🕹️</Text>
          <Text style={styles.botaoTexto}>Consoles Históricos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.botao, { backgroundColor: '#533483' }]} onPress={() => acessaTela('Curiosidades')}>
          <Text style={styles.botaoIcon}>💡</Text>
          <Text style={styles.botaoTexto}>Curiosidades</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.rodape}>
        <Text style={styles.rodapeTexto}>Gabriel Franco</Text>
        <Text style={styles.rodapeTexto}>29/05/2026</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fundo: { flex: 1, backgroundColor: '#0d0d1a' },
  cabecalho: {
    alignItems: 'center',
    backgroundColor: '#1a1a2e',
    paddingVertical: 40,
    paddingHorizontal: 20,
    marginBottom: 8,
  },
  emoji: { fontSize: 64, marginBottom: 12 },
  titulo: { fontSize: 32, fontWeight: 'bold', color: '#e94560', textAlign: 'center' },
  subtitulo: { fontSize: 18, color: '#aaaaaa', marginTop: 4 },
  disciplina: { fontSize: 14, color: '#666', marginTop: 4 },
  corpo: {
    backgroundColor: '#1a1a2e',
    margin: 12,
    borderRadius: 16,
    padding: 20,
  },
  secao: { fontSize: 20, fontWeight: 'bold', color: '#ffffff', marginBottom: 16 },
  botao: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  botaoIcon: { fontSize: 24, marginRight: 12 },
  botaoTexto: { fontSize: 16, fontWeight: 'bold', color: '#ffffff' },
  rodape: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#333',
    margin: 12,
  },
  rodapeTexto: { fontSize: 13, color: '#888' },
});
