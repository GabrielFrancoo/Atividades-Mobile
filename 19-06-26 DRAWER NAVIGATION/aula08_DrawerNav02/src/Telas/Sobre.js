import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

export default function Sobre() {
  const [nome, setNome] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>ℹ️ Sobre o App</Text>
      <Text style={styles.texto}>
        Este aplicativo foi criado para o Desafio 02, sobre o tema "Meus
        Animais Favoritos". Aqui você pode ver uma lista de animais, conferir
        detalhes e definir suas preferências de adoção.
      </Text>

      <Text style={styles.label}>Qual é o seu nome?</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome aqui..."
        value={nome}
        onChangeText={setNome}
      />

      {nome.length > 0 && (
        <Text style={styles.saudacao}>Olá, {nome}! 🐶🐱</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff0f5",
    padding: 20,
    paddingTop: 30,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#5a2b3e",
  },
  texto: {
    fontSize: 15,
    color: "#444",
    marginBottom: 24,
    lineHeight: 22,
  },
  label: {
    fontSize: 16,
    color: "#333",
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
  },
  saudacao: {
    marginTop: 16,
    fontSize: 17,
    fontWeight: "600",
    color: "#5a2b3e",
  },
});
