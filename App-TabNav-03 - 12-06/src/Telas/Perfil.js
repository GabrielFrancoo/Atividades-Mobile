import { View, Text, ScrollView, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function Perfil() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <MaterialIcons name="person" size={60} color="#ffffff" />
        </View>
        <Text style={styles.nome}>Gabriel Silva</Text>
        <Text style={styles.objetivo}>🎯 Objetivo: Hipertrofia</Text>
      </View>

      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Text style={styles.statValor}>78 kg</Text>
          <Text style={styles.statLabel}>Peso</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statValor}>1,78 m</Text>
          <Text style={styles.statLabel}>Altura</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statValor}>14%</Text>
          <Text style={styles.statLabel}>% Gordura</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitulo}>📋 Informações</Text>
        <Text style={styles.cardInfo}>Idade: 22 anos</Text>
        <Text style={styles.cardInfo}>Nível: Intermediário</Text>
        <Text style={styles.cardInfo}>Treinos por semana: 5</Text>
        <Text style={styles.cardInfo}>Academia: FitLife Gym</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitulo}>🏆 Conquistas</Text>
        <Text style={styles.cardInfo}>✅ 30 dias consecutivos de treino</Text>
        <Text style={styles.cardInfo}>✅ Primeiro supino acima de 100kg</Text>
        <Text style={styles.cardInfo}>✅ Meta de peso atingida</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f0f1a', padding: 16, paddingTop: 40 },
  header: { alignItems: 'center', marginBottom: 24, marginTop: 8 },
  avatar: {
    width: 100, height: 100, borderRadius: 50,
    backgroundColor: '#e94560', justifyContent: 'center',
    alignItems: 'center', marginBottom: 12,
  },
  nome: { fontSize: 22, fontWeight: 'bold', color: '#ffffff' },
  objetivo: { fontSize: 14, color: '#aaaaaa', marginTop: 4 },
  statsRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 },
  statCard: {
    flex: 1, backgroundColor: '#1a1a2e', borderRadius: 12,
    padding: 12, alignItems: 'center', marginHorizontal: 4,
  },
  statValor: { fontSize: 18, fontWeight: 'bold', color: '#e94560' },
  statLabel: { fontSize: 12, color: '#aaaaaa', marginTop: 4 },
  card: {
    backgroundColor: '#1a1a2e', borderRadius: 12,
    padding: 16, marginBottom: 12,
  },
  cardTitulo: { fontSize: 16, fontWeight: 'bold', color: '#ffffff', marginBottom: 10 },
  cardInfo: { fontSize: 14, color: '#cccccc', marginBottom: 6 },
});
