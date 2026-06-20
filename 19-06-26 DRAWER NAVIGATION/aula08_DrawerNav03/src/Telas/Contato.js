import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Contato() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tela Contato</Text>
      <Text style={styles.texto}>E-mail: contato@exemplo.com</Text>
      <Text style={styles.texto}>Telefone: (00) 0000-0000</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eeeeee", 
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#1a1a1a",
    marginBottom: 10,
  },
  texto: {
    fontSize: 16,
    color: "#1a1a1a",
    marginTop: 4,
  },
});
