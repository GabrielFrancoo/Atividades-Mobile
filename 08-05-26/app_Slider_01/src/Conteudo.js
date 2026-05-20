import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import Slider from "@react-native-community/slider";

export default function Conteudo() {

  const [nome, setNome] = useState("");

  const [corSlider1, setCorSlider1] = useState("red");

  const [corSlider2, setCorSlider2] = useState("blue");

  function gerarCorAleatoria() {

    let letras = "0123456789ABCDEF";

    let cor = "#";

    for (let i = 0; i < 6; i++) {
      cor += letras[Math.floor(Math.random() * 16)];
    }

    return cor;
  }

  function deslizaSlider1() {
    setCorSlider1(gerarCorAleatoria());
  }

  function deslizaSlider2() {
    setCorSlider2(gerarCorAleatoria());
  }

  return (

    <View style={styles.container}>

      <Text style={styles.textoDescricao}>
        O componente Slider permite que o usuário escolha um valor de um
        intervalo predefinido de valores.
      </Text>

      <Text style={styles.label}>
        Digite seu nome:
      </Text>

      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.label}>
        Deslize o slider 1:
      </Text>

      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={100}
        step={5}
        minimumTrackTintColor={corSlider1}
        maximumTrackTintColor={corSlider1}
        thumbTintColor="#2b9df4"
        onValueChange={deslizaSlider1}
      />

      <Text style={styles.label}>
        Deslize o slider 2:
      </Text>

      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={100}
        step={10}
        minimumTrackTintColor={corSlider2}
        maximumTrackTintColor={corSlider2}
        thumbTintColor="#2b9df4"
        onValueChange={deslizaSlider2}
      />

      <TouchableOpacity style={styles.botao}>

        <Text style={styles.textoBotao}>
          CLIQUE {"\n"}AQUI
        </Text>

      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    width: 300,
    backgroundColor: "yellow",
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
  },

  textoDescricao: {
    fontSize: 16,
    textAlign: "justify",
    marginBottom: 20,
  },

  label: {
    alignSelf: "flex-start",
    marginBottom: 5,
    fontSize: 16,
  },

  input: {
    width: "100%",
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 10,
  },

  slider: {
    width: 220,
    height: 40,
    marginBottom: 20,
  },

  botao: {
    width: 80,
    height: 80,
    backgroundColor: "#8b0000",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },

  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 12,
  },

});