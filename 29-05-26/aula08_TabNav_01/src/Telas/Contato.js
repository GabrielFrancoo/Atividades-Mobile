import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
  Linking,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const contatos = [
  { icone: 'call-outline',      label: 'Celular',    valor: '(41) 99999-9999',            acao: 'tel:+5541999999999' },
  { icone: 'mail-outline',      label: 'Email',      valor: 'professor@email.com',         acao: 'mailto:professor@email.com' },
  { icone: 'logo-linkedin',     label: 'LinkedIn',   valor: 'linkedin.com/in/professor',   acao: 'https://linkedin.com/in/professor' },
  { icone: 'logo-instagram',    label: 'Instagram',  valor: '@professor.dev',              acao: 'https://instagram.com/professor.dev' },
  { icone: 'logo-youtube',      label: 'YouTube',    valor: 'youtube.com/@canaldev',       acao: 'https://youtube.com/@canaldev' },
  { icone: 'location-outline',  label: 'Cidade',     valor: 'Curitiba - PR',               acao: null },
];

export default function Contato() {
  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');

  function handleEnviar() {
    if (!nome.trim() || !mensagem.trim()) {
      Alert.alert('Atenção', 'Preencha seu nome e a mensagem antes de enviar.');
      return;
    }
    Alert.alert('Mensagem enviada!', `Obrigado, ${nome}! Responderei em breve.`);
    setNome('');
    setMensagem('');
  }

  function handleLink(url) {
    if (!url) return;
    Linking.openURL(url).catch(() =>
      Alert.alert('Erro', 'Não foi possível abrir o link.')
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
      <Text style={styles.titulo}>Entre em Contato</Text>

      {/* Informações */}
      <View style={styles.card}>
        <Text style={styles.cardTitulo}>Informações de Contato</Text>
        {contatos.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.contatoRow}
            onPress={() => handleLink(item.acao)}
            activeOpacity={item.acao ? 0.6 : 1}
          >
            <Ionicons name={item.icone} size={16} color="#1a3bbf" style={styles.icone} />
            <Text style={styles.contatoLabel}>{item.label}: </Text>
            <Text style={[styles.contatoValor, item.acao && styles.contatoLink]}>
              {item.valor}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Formulário */}
      <Text style={styles.formTitulo}>Enviar Mensagem</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        placeholderTextColor="#9ca3af"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={[styles.input, styles.textarea]}
        placeholder="Digite sua mensagem"
        placeholderTextColor="#9ca3af"
        value={mensagem}
        onChangeText={setMensagem}
        multiline
        numberOfLines={5}
        textAlignVertical="top"
      />

      <TouchableOpacity style={styles.botao} onPress={handleEnviar} activeOpacity={0.8}>
        <Text style={styles.botaoTexto}>Enviar</Text>
      </TouchableOpacity>
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
    paddingBottom: 40,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0a0a2e',
    textAlign: 'center',
    marginBottom: 16,
    marginTop: 4,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#e0e6f0',
    padding: 14,
    marginBottom: 20,
  },
  cardTitulo: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0a0a2e',
    marginBottom: 12,
  },
  contatoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  icone: {
    marginRight: 8,
  },
  contatoLabel: {
    fontSize: 13,
    color: '#374151',
    fontWeight: '600',
  },
  contatoValor: {
    fontSize: 13,
    color: '#374151',
    flex: 1,
    flexWrap: 'wrap',
  },
  contatoLink: {
    color: '#1a3bbf',
    textDecorationLine: 'underline',
  },
  formTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0a0a2e',
    textAlign: 'center',
    marginBottom: 14,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#d1d5db',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 14,
    color: '#374151',
    marginBottom: 12,
  },
  textarea: {
    height: 110,
    textAlignVertical: 'top',
  },
  botao: {
    backgroundColor: '#1a3bbf',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 4,
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
});