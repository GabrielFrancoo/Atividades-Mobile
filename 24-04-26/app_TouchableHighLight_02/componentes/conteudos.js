import React, { useState } from "react";
import { View, Text, TouchableHighlight, Image } from "react-native";
import { estilos } from "../styleSheet/estilo";

function Conteudo() {
  const imgAcesa = require("../assets/acesa.png");
  const imgQuebrada = require("../assets/quebrada.png");

  const [ligada, setLigada] = useState(true);

  function alteraState() {
    setLigada(!ligada);
  }

  return (
    <View
      style={[
        estilos.conteudo,
        { backgroundColor: ligada ? "white" : "gray" }
      ]}
    >
      <Text style={estilos.titulo}>UseState</Text>

      <Text style={{ fontSize: 22, fontWeight: "bold" }}>
        {ligada ? "Lâmpada Acesa" : "Lâmpada Quebrada"}
      </Text>

      <Image
        source={ligada ? imgAcesa : imgQuebrada}
        style={{
          width: 170,
          height: 85,
          marginTop: 20,
          resizeMode: "contain"
        }}
      />

      <Text>
        {ligada
          ? "Clique no Botão para trocar a cor do fundo da tela!"
          : "A cor do fundo foi trocada para cinza."}
      </Text>

      <TouchableHighlight
        onPress={alteraState}
        style={{
          backgroundColor: "darkred",
          padding: 20,
          borderRadius: 25,
          marginTop: 20
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>
          CLIQUE AQUI
        </Text>
      </TouchableHighlight>
    </View>
  );
}

export default Conteudo;