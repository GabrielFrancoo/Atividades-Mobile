import { View, Text, ScrollView, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const refeicoes = [
  { id: '1', horario: '07:00', nome: 'Café da Manhã', itens: 'Ovos mexidos, aveia com banana, café sem açúcar' },
  { id: '2', horario: '10:00', nome: 'Lanche da Manhã', itens: 'Iogurte grego, castanhas, maçã' },
  { id: '3', horario: '13:00', nome: 'Almoço', itens: 'Frango grelhado, arroz integral, brócolis, salada' },
  { id: '4', horario: '16:00', nome: 'Pré-treino', itens: 'Batata doce, peito de frango, whey protein' },
  { id: '5', horario: '20:00', nome: 'Jantar', itens: 'Tilápia, legumes no vapor, quinoa' },
];

export default function Dieta() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>🥗 Plano Alimentar</Text>
      <Text style={styles.subtitulo}>Meta: 2.800 kcal | Proteína: 180g</Text>

      {refeicoes.map((item) => (
        <View key={item.id} style={styles.card}>
          <View style={styles.cardHeader}>
            <MaterialIcons name="restaurant" size={20} color="#4caf50" />
            <Text style={styles.horario}>{item.horario}</Text>
            <Text style={styles.cardNome}>{item.nome}</Text>
          </View>
          <Text style={styles.itens}>{item.itens}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f0f1a', padding: 16, paddingTop: 40 },
  titulo: { fontSize: 26, fontWeight: 'bold', color: '#4caf50', marginBottom: 4 },
  subtitulo: { fontSize: 14, color: '#aaaaaa', marginBottom: 20 },
  card: {
    backgroundColor: '#1a1a2e',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#4caf50',
  },
  cardHeader: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 6 },
  horario: { fontSize: 13, color: '#4caf50', fontWeight: 'bold' },
  cardNome: { fontSize: 15, fontWeight: 'bold', color: '#ffffff' },
  itens: { fontSize: 13, color: '#cccccc', lineHeight: 20 },
});
