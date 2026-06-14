import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

export default function Home() {
  const hoje = new Date().toLocaleDateString('pt-BR');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.titulo}>Página Home</Text>
        <Text style={styles.subtitulo}>Bem-vindo(a)</Text>

        <View style={styles.badge}>
          <Text style={styles.badgeLabel}>COMPONENTE</Text>
          <Text style={styles.badgeTexto}>Tab Navigation</Text>
        </View>
      </View>

      <View style={styles.rodape}>
        <Text style={styles.rodapeTexto}>Gabriel Ozório Franco · {hoje}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkblue',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitulo: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.65)',
    textAlign: 'center',
    marginBottom: 32,
  },
  badge: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderWidth: 0.5,
    borderColor: 'rgba(255,255,255,0.25)',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 28,
    alignItems: 'center',
  },
  badgeLabel: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 10,
    letterSpacing: 2,
    fontWeight: '600',
    marginBottom: 4,
  },
  badgeTexto: {
    color: '#7eb3ff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  rodape: {
    backgroundColor: 'rgba(255,255,255,0.08)',
    paddingVertical: 12,
    alignItems: 'center',
  },
  rodapeTexto: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 12,
  },
});