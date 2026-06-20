import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tela Home</Text>
      <Text style={styles.texto}>
        Bem-vindo ao app de exemplo do Drawer Navigation!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191970", 
    padding: 20,
  },
  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  texto: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },
});
