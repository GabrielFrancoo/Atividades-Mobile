import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function DetalheContato({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Detalhe do Contato</Text>
      <Text style={styles.texto}>
        Esta tela foi aberta através da Navegação por Pilha (Stack
        Navigation), a partir da tela Contato (que, por sua vez, é acessada
        pela Navegação por Guias / Tabs).
      </Text>
      <Text style={styles.texto}>
        Horário de atendimento: Seg a Sex, 9h às 18h
      </Text>

      <TouchableOpacity style={styles.botao} onPress={() => navigation.goBack()}>
        <Text style={styles.botaoTexto}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d8d8f0",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1a1a1a",
    marginBottom: 16,
    textAlign: "center",
  },
  texto: {
    fontSize: 15,
    color: "#333",
    textAlign: "center",
    marginBottom: 12,
    lineHeight: 21,
  },
  botao: {
    marginTop: 20,
    backgroundColor: "#191970",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  botaoTexto: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
