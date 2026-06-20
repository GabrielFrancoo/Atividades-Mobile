import React, { useState } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";

export default function Preferencias() {
  const [idadeMaxima, setIdadeMaxima] = useState(5);
  const [aceitaPequenoPorte, setAceitaPequenoPorte] = useState(true);
  const [aceitaGrandePorte, setAceitaGrandePorte] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>⚙️ Minhas Preferências</Text>

      <Text style={styles.label}>
        Idade máxima desejada: {idadeMaxima.toFixed(0)} anos
      </Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={15}
        step={1}
        value={idadeMaxima}
        onValueChange={setIdadeMaxima}
        minimumTrackTintColor="#5a8f3e"
        maximumTrackTintColor="#ccc"
      />

      <View style={styles.linha}>
        <Text style={styles.label}>Aceito porte pequeno</Text>
        <Switch
          value={aceitaPequenoPorte}
          onValueChange={setAceitaPequenoPorte}
        />
      </View>

      <View style={styles.linha}>
        <Text style={styles.label}>Aceito porte grande</Text>
        <Switch
          value={aceitaGrandePorte}
          onValueChange={setAceitaGrandePorte}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5fff0",
    padding: 20,
    paddingTop: 30,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#3e5a2b",
  },
  label: {
    fontSize: 16,
    color: "#333",
    marginBottom: 6,
  },
  slider: {
    width: "100%",
    height: 40,
    marginBottom: 20,
  },
  linha: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
