import { View, Text, ScrollView, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const treinos = [
  { id: '1', nome: 'Supino Reto', series: '4x12', grupo: 'Peito' },
  { id: '2', nome: 'Agachamento Livre', series: '4x10', grupo: 'Pernas' },
  { id: '3', nome: 'Remada Curvada', series: '3x12', grupo: 'Costas' },
  { id: '4', nome: 'Desenvolvimento', series: '3x10', grupo: 'Ombro' },
  { id: '5', nome: 'Rosca Direta', series: '3x15', grupo: 'Bíceps' },
  { id: '6', nome: 'Tríceps Testa', series: '3x15', grupo: 'Tríceps' },
];

export default function Exercicios() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>💪 Treino de Hoje</Text>
      <Text style={styles.subtitulo}>Segunda-feira — Musculação Full Body</Text>

      {treinos.map((item) => (
        <View key={item.id} style={styles.card}>
          <View style={styles.cardHeader}>
            <MaterialIcons name="fitness-center" size={20} color="#e94560" />
            <Text style={styles.cardNome}>{item.nome}</Text>
          </View>
          <Text style={styles.cardInfo}>Grupo: {item.grupo}</Text>
          <Text style={styles.cardInfo}>Séries: {item.series}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f0f1a', padding: 16, paddingTop: 40 },
  titulo: { fontSize: 26, fontWeight: 'bold', color: '#e94560', marginBottom: 4 },
  subtitulo: { fontSize: 14, color: '#aaaaaa', marginBottom: 20 },
  card: {
    backgroundColor: '#1a1a2e',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#e94560',
  },
  cardHeader: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 6 },
  cardNome: { fontSize: 16, fontWeight: 'bold', color: '#ffffff' },
  cardInfo: { fontSize: 13, color: '#cccccc', marginTop: 2 },
});
