import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Contato({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tela Contato</Text>
      <Text style={styles.texto}>E-mail: contato@exemplo.com</Text>
      <Text style={styles.texto}>Telefone: (00) 0000-0000</Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate("DetalheContato")}
      >
        <Text style={styles.botaoTexto}>Ver mais detalhes</Text>
      </TouchableOpacity>
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
  botao: {
    marginTop: 24,
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
