import React, { useState } from "react";
import { View, Text, TouchableHighlight, Image } from "react-native";

export default function App() {
  const imgAcesa = require("./assets/acesa.jpg");
  const imgQuebrada = require("./assets/quebrada.jpg");

  const [corFundo, setCorFundo] = useState("#efefef");
  const [texto, setTexto] = useState("Lâmpada Acesa");
  const [imagem, setImagem] = useState(imgAcesa);

  function alterar() {
    if (corFundo === "#efefef") {
      setCorFundo("gray");
      setTexto("Lâmpada Quebrada");
      setImagem(imgQuebrada);
    } else {
      setCorFundo("#efefef");
      setTexto("Lâmpada Acesa");
      setImagem(imgAcesa);
    }
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#e9e9e9",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: 360,
          height: 780,
          backgroundColor: corFundo,
          borderWidth: 3,
          borderColor: "#d8d3cf",
          padding: 20,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 18,
            marginTop: 90,
          }}
        >
          DSV - MOBILE
        </Text>

        <Image
          source={imagem}
          style={{
            width: 170,
            height: 200,
            marginTop: 25,
            resizeMode: "contain",
          }}
        />

        <Text
          style={{
            fontSize: 28,
            color: "darkred",
            marginTop: 50,
          }}
        >
          UseState
        </Text>

        <Text
          style={{
            marginTop: 15,
            fontSize: 22,
            fontWeight: "bold",
            textAlign: "center",
            width: 280,
          }}
        >
          {texto}
        </Text>

        <TouchableHighlight
          onPress={alterar}
          style={{
            marginTop: 40,
            backgroundColor: "#970000",
            paddingVertical: 18,
            paddingHorizontal: 35,
            borderRadius: 30,
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 16,
            }}
          >
            CLIQUE AQUI
          </Text>
        </TouchableHighlight>

        <View
          style={{
            marginTop: 140,
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 16 }}>
            Gabriel Ozório Franco
          </Text>

          <Text style={{ fontSize: 16 }}>
            25/04/2026
          </Text>
        </View>
      </View>
    </View>
  );
}