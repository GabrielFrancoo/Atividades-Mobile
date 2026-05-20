import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';

const txtTitulo = 'PROFESSORES';
const txtSubtitulo = 'UNIVERSIDADE';
const txtLabelNome = 'Professor:';
const txtLabelDisciplina = 'Disciplina:';
const txtLabelSala = 'Sala:';
const txtRodapeAutor = 'Gabriel Franco';
const txtRodapeData = '05/2026';

const professores = [
  {
    id: '1',
    nome: 'Carlos Silva',
    disciplina: 'Programação',
    sala: 'Lab 01',
    foto: {
      uri: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=80&q=80'
    },
  },
  {
    id: '2',
    nome: 'Fernanda Lima',
    disciplina: 'Banco de Dados',
    sala: 'Sala 10',
    foto: {
      uri: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=80&q=80'
    },
  },
  {
    id: '3',
    nome: 'Ricardo Souza',
    disciplina: 'Redes',
    sala: 'Sala 05',
    foto: {
      uri: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80'
    },
  },
  {
    id: '4',
    nome: 'Amanda Costa',
    disciplina: 'UX Design',
    sala: 'Sala 08',
    foto: {
      uri: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&q=80'
    },
  },
  {
    id: '5',
    nome: 'Juliana Rocha',
    disciplina: 'Java',
    sala: 'Lab 03',
    foto: {
      uri: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=80&q=80'
    },
  },
];

const CardProfessor = ({ item }) => (
  <View style={styles.card}>

    <Image source={item.foto} style={styles.imagem} />

    <View style={styles.info}>

      <View style={styles.linha}>
        <Text style={styles.label}>{txtLabelNome}</Text>
        <Text style={styles.nome}>{item.nome}</Text>
      </View>

      <View style={styles.linha}>
        <Text style={styles.label}>{txtLabelDisciplina}</Text>
        <Text style={styles.valor}>{item.disciplina}</Text>
      </View>

      <View style={styles.linha}>
        <Text style={styles.label}>{txtLabelSala}</Text>
        <Text style={styles.valor}>{item.sala}</Text>
      </View>

    </View>

  </View>
);

export default function App() {
  return (
    <SafeAreaView style={styles.container}>

      <StatusBar backgroundColor="#1E3A8A" barStyle="light-content" />

      <View style={styles.header}>
        <Text style={styles.emoji}>👨‍🏫</Text>
        <Text style={styles.titulo}>{txtTitulo}</Text>
        <Text style={styles.subtitulo}>{txtSubtitulo}</Text>
      </View>

      <FlatList
        data={professores}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CardProfessor item={item} />}
        contentContainerStyle={styles.lista}
      />

      <View style={styles.rodape}>
        <Text style={styles.rodapeTexto}>{txtRodapeAutor}</Text>
        <Text style={styles.rodapeTexto}>{txtRodapeData}</Text>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: { flex: 1, backgroundColor: '#F1F5F9' },

  header: {
    backgroundColor: '#1E3A8A',
    alignItems: 'center',
    paddingVertical: 20,
  },

  emoji: { fontSize: 45, marginBottom: 5 },

  titulo: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },

  subtitulo: {
    color: '#BFDBFE',
    fontSize: 14,
    marginTop: 4,
  },

  lista: { padding: 10 },

  card: {
    flexDirection: 'row',
    backgroundColor: '#DBEAFE',
    marginBottom: 10,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },

  imagem: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 12,
  },

  info: { flex: 1 },

  linha: {
    flexDirection: 'row',
    marginBottom: 5,
    flexWrap: 'wrap',
  },

  label: {
    fontWeight: 'bold',
    marginRight: 5,
    color: '#334155',
  },

  nome: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  valor: {
    color: '#1E293B',
    fontWeight: '500',
  },

  rodape: {
    backgroundColor: '#0F172A',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
  },

  rodapeTexto: {
    color: '#fff',
    fontWeight: 'bold',
  },
});