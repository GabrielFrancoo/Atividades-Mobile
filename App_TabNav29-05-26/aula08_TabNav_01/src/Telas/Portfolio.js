import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';

const academicos = [
  {
    curso: 'Engenharia Eletrônica',
    instituicao: 'UTFPR',
    nivel: 'Graduação',
    data: '10/03/2000',
  },
  {
    curso: 'Administração de TI',
    instituicao: 'FAE Business School',
    nivel: 'Especialização',
    data: '30/04/2005',
  },
  {
    curso: 'Educação e Novas Tecnologias',
    instituicao: 'UNINTER',
    nivel: 'Mestrado',
    data: '11/06/2016',
  },
];

const projetos = [
  {
    nome: 'Site Pessoal',
    descricao: 'Portfólio e blog pessoal responsivo',
    tecnologia: 'React / Next.js',
  },
  {
    nome: 'App React Native',
    descricao: 'Aplicativo mobile de portfólio',
    tecnologia: 'React Native / Expo',
  },
  {
    nome: 'Sistema de Gestão',
    descricao: 'Plataforma de gestão acadêmica',
    tecnologia: 'Node.js / PostgreSQL',
  },
];

export default function Portfolio() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Avatar e nome */}
      <View style={styles.header}>
        <View style={styles.avatarCircle}>
          <Text style={styles.avatarEmoji}>🧑‍💼</Text>
        </View>
        <Text style={styles.nome}>Meu Portfólio</Text>
      </View>

      {/* Acadêmicos */}
      <Text style={styles.secaoTitulo}>Acadêmicos</Text>
      {academicos.map((item, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.cardTitulo}>{item.curso}</Text>
          <Text style={styles.cardDetalhe}>- {item.instituicao} ({item.nivel})</Text>
          <Text style={styles.cardDetalhe}>- {item.data}</Text>
        </View>
      ))}

      {/* Projetos */}
      <Text style={styles.secaoTitulo}>Projetos Web</Text>
      {projetos.map((item, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.cardTitulo}>{item.nome}</Text>
          <Text style={styles.cardDetalhe}>- {item.descricao}</Text>
          <Text style={styles.cardTag}>{item.tecnologia}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6fb',
  },
  content: {
    padding: 16,
    paddingBottom: 32,
  },
  header: {
    alignItems: 'center',
    marginBottom: 16,
    paddingTop: 8,
  },
  avatarCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#dce8fc',
    borderWidth: 2,
    borderColor: '#b0c8f5',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  avatarEmoji: {
    fontSize: 36,
  },
  nome: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0a0a2e',
  },
  secaoTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1a3bbf',
    marginTop: 12,
    marginBottom: 8,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#e0e6f0',
    padding: 12,
    marginBottom: 10,
  },
  cardTitulo: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0a0a2e',
    marginBottom: 4,
  },
  cardDetalhe: {
    fontSize: 13,
    color: '#6b7280',
    lineHeight: 20,
  },
  cardTag: {
    marginTop: 6,
    alignSelf: 'flex-start',
    backgroundColor: '#eef2ff',
    color: '#1a3bbf',
    fontSize: 11,
    fontWeight: '600',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    overflow: 'hidden',
  },
});