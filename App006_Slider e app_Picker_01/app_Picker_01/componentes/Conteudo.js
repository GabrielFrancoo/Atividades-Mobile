import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { Picker } from "@react-native-picker/picker";

export default function Conteudo() {

  const [nome, setNome] = useState("");
  const [linguagem, setLinguagem] = useState("Python");
  const [mensagem, setMensagem] = useState("");

  const [corInput, setCorInput] = useState("#fff");

  function confirmar() {

    if (nome === "") {
      setMensagem("Por favor, Digite seu nome!");
    } else {

      setMensagem(
        `Olá ${nome}, sua linguagem favorita é ${linguagem}`
      );
    }
  }

  function corDeFoco(cor) {
    setCorInput(cor);
  }

  return (

    <View style={styles.container}>

      <Text style={styles.label}>
        Escolha Linguagem Favorita
      </Text>

      <TextInput
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}

        onFocus={() => corDeFoco("orange")}

        onBlur={() => corDeFoco("#fff")}

        style={[
          styles.input,
          { backgroundColor: corInput }
        ]}
      />

      <Text style={styles.labelPicker}>
        Escolha uma linguagem:
      </Text>

      <Picker
        selectedValue={linguagem}
        onValueChange={(itemValue) =>
          setLinguagem(itemValue)
        }
        style={styles.picker}
      >
        <Picker.Item
          label="Python"
          value="Python"
        />

        <Picker.Item
          label="Java"
          value="Java"
        />

        <Picker.Item
          label="JavaScript"
          value="JavaScript"
        />

        <Picker.Item
          label="C#"
          value="C#"
        />

      </Picker>

      <TouchableOpacity
        style={styles.botao}
        onPress={confirmar}
      >
        <Text style={styles.textoBotao}>
          Confirmar
        </Text>
      </TouchableOpacity>

      <Text style={styles.resultado}>
        {mensagem}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    width: 320,
    height: 420,
    backgroundColor: "#86c8e3",
    alignItems: "center",
    paddingTop: 20,
  },

  label: {
    fontSize: 20,
    marginBottom: 15,
  },

  input: {
    width: 250,
    height: 40,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },

  labelPicker: {
    fontSize: 18,
    marginBottom: 10,
  },

  picker: {
    width: 250,
    height: 50,
    backgroundColor: "#fff",
    marginBottom: 20,
  },

  botao: {
    width: 250,
    height: 45,
    backgroundColor: "#4CAF50",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 20,
  },

  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },

  resultado: {
    textAlign: "center",
    fontSize: 16,
    paddingHorizontal: 15,
  },

});