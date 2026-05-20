import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
} from "react-native";

export default function Cabecalho() {

  return (

    <View style={styles.topo}>

      <Image
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/6062/6062646.png",
        }}
        style={styles.imagem}
      />

      <Text style={styles.titulo}>
        Componente Picker
      </Text>

    </View>

  );
}

const styles = StyleSheet.create({

  topo: {
    width: 320,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20,
  },

  imagem: {
    width: 100,
    height: 100,
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#8fd3f4",
    marginTop: 10,
  },

});