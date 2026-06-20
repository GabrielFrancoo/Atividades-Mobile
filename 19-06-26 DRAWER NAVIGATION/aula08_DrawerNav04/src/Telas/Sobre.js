import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Sobre() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tela Sobre</Text>
      <Text style={styles.texto}>
        Este app foi desenvolvido como exemplo do Desafio 01, demonstrando o
        funcionamento do Drawer Navigation no React Native.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5ee69a", 
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
    textAlign: "center",
  },
});
