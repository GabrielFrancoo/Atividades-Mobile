import React from "react";
import { View, StyleSheet } from "react-native";

import Cabecalho from "./componentes/Cabecalho";
import Conteudo from "./componentes/Conteudo";

export default function App() {

  return (
    <View style={styles.container}>

      <Cabecalho />

      <Conteudo />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#e5e1dc",
    alignItems: "center",
    justifyContent: "center",
  },

});