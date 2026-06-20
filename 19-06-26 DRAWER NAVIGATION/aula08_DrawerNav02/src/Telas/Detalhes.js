import React, { useState } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function Detalhes() {
  const [animalEscolhido, setAnimalEscolhido] = useState("cachorro");
  const [vacinado, setVacinado] = useState(false);
  const [castrado, setCastrado] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>📋 Detalhes do Animal</Text>

      <Text style={styles.label}>Escolha o tipo de animal:</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={animalEscolhido}
          onValueChange={(valor) => setAnimalEscolhido(valor)}
        >
          <Picker.Item label="Cachorro" value="cachorro" />
          <Picker.Item label="Gato" value="gato" />
          <Picker.Item label="Ave" value="ave" />
          <Picker.Item label="Cavalo" value="cavalo" />
          <Picker.Item label="Coelho" value="coelho" />
        </Picker>
      </View>

      <Text style={styles.resultado}>
        Animal selecionado: {animalEscolhido}
      </Text>

      <View style={styles.linha}>
        <Text style={styles.label}>Vacinado?</Text>
        <Switch value={vacinado} onValueChange={setVacinado} />
      </View>

      <View style={styles.linha}>
        <Text style={styles.label}>Castrado?</Text>
        <Switch value={castrado} onValueChange={setCastrado} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f8ff",
    padding: 20,
    paddingTop: 30,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#2b3e5a",
  },
  label: {
    fontSize: 16,
    color: "#333",
    marginBottom: 6,
  },
  pickerContainer: {
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  resultado: {
    fontSize: 15,
    fontStyle: "italic",
    color: "#555",
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
