import { View, Text, FlatList, StyleSheet } from 'react-native';

const consoles = [
  { id: '1', nome: 'Atari 2600', ano: '1977', empresa: 'Atari', destaque: 'Primeiro console de sucesso em massa' },
  { id: '2', nome: 'NES / Famicom', ano: '1983', empresa: 'Nintendo', destaque: 'Salvou a indústria após o crash de 1983' },
  { id: '3', nome: 'Mega Drive', ano: '1988', empresa: 'Sega', destaque: 'Console do Sonic the Hedgehog' },
  { id: '4', nome: 'Super Nintendo', ano: '1990', empresa: 'Nintendo', destaque: 'Um dos melhores catálogos da história' },
  { id: '5', nome: 'PlayStation', ano: '1994', empresa: 'Sony', destaque: 'Revolucionou os games em 3D' },
  { id: '6', nome: 'Nintendo 64', ano: '1996', empresa: 'Nintendo', destaque: 'Lar do Super Mario 64 e Zelda OOT' },
  { id: '7', nome: 'PlayStation 2', ano: '2000', empresa: 'Sony', destaque: 'Console mais vendido da história' },
  { id: '8', nome: 'Xbox 360', ano: '2005', empresa: 'Microsoft', destaque: 'Popularizou o multiplayer online' },
  { id: '9', nome: 'Nintendo Wii', ano: '2006', empresa: 'Nintendo', destaque: 'Trouxe os controles de movimento' },
  { id: '10', nome: 'PlayStation 4', ano: '2013', empresa: 'Sony', destaque: 'Mais de 117 milhões de unidades vendidas' },
  { id: '11', nome: 'Nintendo Switch', ano: '2017', empresa: 'Nintendo', destaque: 'Console híbrido portátil/doméstico' },
  { id: '12', nome: 'PlayStation 5', ano: '2020', empresa: 'Sony', destaque: 'SSD ultrarrápido e controle DualSense' },
];

const cores = {
  'Atari': '#e94560',
  'Nintendo': '#cc0000',
  'Sega': '#003087',
  'Sony': '#003791',
  'Microsoft': '#107c10',
};

function ItemConsole({ item }) {
  const cor = cores[item.empresa] || '#333';
  return (
    <View style={[styles.card, { borderLeftColor: cor }]}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardNome}>{item.nome}</Text>
        <View style={[styles.badge, { backgroundColor: cor }]}>
          <Text style={styles.badgeTexto}>{item.ano}</Text>
        </View>
      </View>
      <Text style={styles.cardEmpresa}>{item.empresa}</Text>
      <Text style={styles.cardDestaque}>{item.destaque}</Text>
    </View>
  );
}

export default function Consoles() {
  return (
    <View style={styles.fundo}>
      <View style={styles.cabecalho}>
        <Text style={styles.cabecalhoTitulo}>🕹️ Consoles Históricos</Text>
        <Text style={styles.cabecalhoSub}>{consoles.length} consoles listados</Text>
      </View>
      <FlatList
        data={consoles}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ItemConsole item={item} />}
        contentContainerStyle={styles.lista}
      />
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
    backgroundColor: '#16213e',
    padding: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#0f3460',
  },
  cabecalhoTitulo: { fontSize: 22, fontWeight: 'bold', color: '#ffffff' },
  cabecalhoSub: { fontSize: 13, color: '#888', marginTop: 4 },
  lista: { padding: 12 },
  card: {
    backgroundColor: '#1a1a2e',
    borderRadius: 12,
    padding: 16,
    marginBottom: 10,
    borderLeftWidth: 5,
  },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 },
  cardNome: { fontSize: 16, fontWeight: 'bold', color: '#ffffff', flex: 1 },
  badge: { paddingHorizontal: 8, paddingVertical: 3, borderRadius: 8, marginLeft: 8 },
  badgeTexto: { fontSize: 12, color: '#ffffff', fontWeight: 'bold' },
  cardEmpresa: { fontSize: 12, color: '#aaa', marginBottom: 6 },
  cardDestaque: { fontSize: 13, color: '#cccccc', lineHeight: 18 },
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
