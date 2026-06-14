import { View, Text, Switch, ScrollView, StyleSheet } from 'react-native';
import { useState } from 'react';

const todasCuriosidades = [
  { id: '1', categoria: 'historia', titulo: 'Primeiro Easter Egg', texto: 'O primeiro Easter Egg da história dos games foi encontrado no Atari 2600, no jogo Adventure (1980). O programador Warren Robinett escondeu uma sala secreta com seu nome.' },
  { id: '2', categoria: 'records', titulo: 'Jogo mais vendido', texto: 'Minecraft é o jogo mais vendido da história com mais de 238 milhões de cópias. Foi criado por Markus "Notch" Persson e lançado em 2011.' },
  { id: '3', categoria: 'historia', titulo: 'Origem do Pac-Man', texto: 'Pac-Man foi inspirado numa pizza com uma fatia faltando. O criador Toru Iwatani queria um jogo que as mulheres também pudessem jogar.' },
  { id: '4', categoria: 'records', titulo: 'Game mais longo', texto: 'Dwarf Fortress é considerado o jogo em desenvolvimento ativo há mais tempo, com início em 2002 e atualizações constantes até hoje.' },
  { id: '5', categoria: 'historia', titulo: 'Super Mario', texto: 'Mario se chamava originalmente "Jumpman" e apareceu primeiro em Donkey Kong (1981). O nome Mario veio do senhorio italiano do escritório da Nintendo América.' },
  { id: '6', categoria: 'records', titulo: 'eSports', texto: 'O maior prêmio de um torneio de games foi o The International de Dota 2 em 2021, com um prize pool de mais de 40 milhões de dólares.' },
  { id: '7', categoria: 'historia', titulo: 'Doom e o Pentágono', texto: 'O jogo Doom (1993) foi tão popular que o Pentágono precisou emitir um memorando pedindo que os funcionários não o jogassem durante o expediente.' },
  { id: '8', categoria: 'records', titulo: 'Partida mais longa', texto: 'A maior partida de Civilization já registrada durou mais de 10 anos, de forma colaborativa, com jogadores se revezando online.' },
];

export default function Curiosidades() {
  const [mostrarHistoria, setMostrarHistoria] = useState(true);
  const [mostrarRecords, setMostrarRecords] = useState(true);

  const filtradas = todasCuriosidades.filter((item) => {
    if (item.categoria === 'historia') return mostrarHistoria;
    if (item.categoria === 'records') return mostrarRecords;
    return true;
  });

  return (
    <View style={styles.fundo}>
      <View style={styles.cabecalho}>
        <Text style={styles.cabecalhoTitulo}>💡 Curiosidades sobre Games</Text>
      </View>

      <View style={styles.filtros}>
        <Text style={styles.filtrosTitulo}>Filtrar por categoria:</Text>
        <View style={styles.filtroRow}>
          <Text style={styles.filtroLabel}>📖 História</Text>
          <Switch
            value={mostrarHistoria}
            onValueChange={setMostrarHistoria}
            trackColor={{ false: '#333', true: '#e94560' }}
            thumbColor={mostrarHistoria ? '#ffffff' : '#888'}
          />
        </View>
        <View style={styles.filtroRow}>
          <Text style={styles.filtroLabel}>🏆 Recordes</Text>
          <Switch
            value={mostrarRecords}
            onValueChange={setMostrarRecords}
            trackColor={{ false: '#333', true: '#533483' }}
            thumbColor={mostrarRecords ? '#ffffff' : '#888'}
          />
        </View>
        <Text style={styles.filtroContagem}>{filtradas.length} curiosidades exibidas</Text>
      </View>

      <ScrollView style={styles.corpo}>
        {filtradas.map((item) => (
          <View key={item.id} style={[styles.card, { borderLeftColor: item.categoria === 'historia' ? '#e94560' : '#533483' }]}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitulo}>{item.titulo}</Text>
              <View style={[styles.badge, { backgroundColor: item.categoria === 'historia' ? '#e94560' : '#533483' }]}>
                <Text style={styles.badgeTexto}>{item.categoria === 'historia' ? 'História' : 'Recorde'}</Text>
              </View>
            </View>
            <Text style={styles.cardTexto}>{item.texto}</Text>
          </View>
        ))}
        <View style={{ height: 40 }} />
      </ScrollView>

      <View style={styles.rodape}>
        <Text style={styles.rodapeTexto}>Gabriel Franco</Text>
        <Text style={styles.rodapeTexto}>29/05/2026</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fundo: { flex: 1, backgroundColor: '#0d0d1a' },
  cabecalho: {
    backgroundColor: '#2d1b69',
    padding: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#533483',
  },
  cabecalhoTitulo: { fontSize: 20, fontWeight: 'bold', color: '#ffffff' },
  filtros: {
    backgroundColor: '#1a1a2e',
    padding: 16,
    margin: 12,
    borderRadius: 12,
  },
  filtrosTitulo: { fontSize: 14, color: '#aaa', marginBottom: 12, fontWeight: 'bold' },
  filtroRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  filtroLabel: { fontSize: 15, color: '#ffffff' },
  filtroContagem: { fontSize: 12, color: '#888', marginTop: 8, textAlign: 'right' },
  corpo: { flex: 1, paddingHorizontal: 12 },
  card: {
    backgroundColor: '#1a1a2e',
    borderRadius: 12,
    padding: 16,
    marginBottom: 10,
    borderLeftWidth: 5,
  },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 },
  cardTitulo: { fontSize: 15, fontWeight: 'bold', color: '#ffffff', flex: 1, marginRight: 8 },
  badge: { paddingHorizontal: 8, paddingVertical: 3, borderRadius: 8 },
  badgeTexto: { fontSize: 11, color: '#ffffff', fontWeight: 'bold' },
  cardTexto: { fontSize: 13, color: '#cccccc', lineHeight: 20 },
  rodape: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#1a1a2e',
    borderTopWidth: 1,
    borderTopColor: '#333',
  },
  rodapeTexto: { fontSize: 13, color: '#888' },
});
