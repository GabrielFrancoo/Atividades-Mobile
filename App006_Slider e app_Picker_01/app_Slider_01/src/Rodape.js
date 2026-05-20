import React from "react";

import { View, Text } from "react-native";

import { estilos } from "./styleSheet/estilos";

function Rodape() {

  return (

    <View style={estilos.area_rodape}>

      <Text style={estilos.texto_rodape}>
        Luiz Corcini
      </Text>

      <Text style={estilos.texto_rodape}>
        dd/mm/aaaa
      </Text>

    </View>
  );
}

export default Rodape;