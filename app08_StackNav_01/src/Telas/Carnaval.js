import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
} from "react-native";

import { estilos } from "../styleSheet/estilos";

function Carnaval() {

  let img1 = require("../Img/carnaval.png");

  return (
    <View style={estilos.Tela_Carnaval_Fundo}>

      {/* CABEÇALHO */}
      <View style={estilos.Tela_Carnaval_Cab}>

        <Image
          source={img1}
          style={{ width: 200, height: 200 }}
        />

        <Text style={estilos.Tela_Carnaval_Titulo}>
          Carnaval
        </Text>

        <Text style={estilos.Tela_Carnaval_SubTitulo}>
          Cultura, História e Tradições
        </Text>

      </View>

      {/* CORPO */}
      <View style={estilos.Tela_Carnaval_Corpo}>

        <ScrollView
          contentContainerStyle={estilos.Tela_Carnaval_Scroll}
        >

          <Text style={estilos.Tela_Carnaval_TextoTitulo}>
            Origem
          </Text>

          <Text style={estilos.Tela_Carnaval_Texto}>
            O Carnaval possui origem em antigas festas populares da Europa.
            A celebração chegou ao Brasil durante o período colonial e,
            ao longo do tempo, ganhou características próprias com muita
            música, dança e alegria.
          </Text>

          <Text style={estilos.Tela_Carnaval_TextoTitulo}>
            Histórias e Curiosidades
          </Text>

          <Text style={estilos.Tela_Carnaval_Texto}>
            O Carnaval brasileiro é conhecido mundialmente pelos desfiles
            das escolas de samba, blocos de rua e fantasias coloridas.
            Cada região do Brasil possui tradições diferentes, tornando
            a festa uma das maiores manifestações culturais do país.
          </Text>

        </ScrollView>

      </View>

      {/* RODAPÉ */}
      <View style={estilos.Tela_Carnaval_Rodape}>

        <Text style={estilos.Tela_Carnaval_RodapeTexto}>
          Gabriel Franco
        </Text>

        <Text style={estilos.Tela_Carnaval_RodapeTexto}>
          22/05/26
        </Text>

      </View>

    </View>
  );
}

export default Carnaval;