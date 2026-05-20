import React from "react";
import { View, StyleSheet } from "react-native";
import Cabecalho from "./src/components/Cabecalho";
import Conteudo from "./src/components/Conteudo";
import Rodape from "./src/components/Rodape";

export default function App() {
  return (
    <View style={styles.container}>
      <Cabecalho />
      <Conteudo />
      <Rodape />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});