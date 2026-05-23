import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView
} from "react-native";

import { estilos } from "../styleSheet/estilos";

function Halloween() {

  let img1 = require("../Img/halloween.png");

  let autor = "Luiz Corcini";
  let data = "dd/mm/aaaa";

  return (

    <View style={estilos.Tela_Halloween_Fundo}>

      {/* CABEÇALHO */}
      <View style={estilos.Tela_Halloween_Cab}>

        <Image
          source={img1}
          style={{ width: 180, height: 180 }}
        />

        <Text style={estilos.Tela_Halloween_Titulo}>
          Halloween
        </Text>

        <Text style={estilos.Tela_Halloween_SubTitulo}>
          Mistérios e Tradições
        </Text>

      </View>

      {/* CORPO */}
      <View style={estilos.Tela_Halloween_Corpo}>

        <ScrollView>

          <Text style={estilos.Tela_Halloween_TextoTitulo}>
            Origem do Halloween
          </Text>

          <Text style={estilos.Tela_Halloween_Texto}>
            O Halloween surgiu a partir de antigos festivais celtas
            realizados há mais de dois mil anos. A celebração marcava
            o fim do verão e acreditava-se que, nessa data, os espíritos
            retornavam ao mundo dos vivos.
          </Text>

          <Text style={estilos.Tela_Halloween_TextoTitulo}>
            Curiosidades
          </Text>

          <Text style={estilos.Tela_Halloween_Texto}>
            O Halloween é comemorado principalmente em países de língua
            inglesa. As fantasias assustadoras, abóboras iluminadas e
            brincadeiras de “doces ou travessuras” fazem parte da tradição.
          </Text>

          <Text style={estilos.Tela_Halloween_TextoTitulo}>
            Histórias e Tradições
          </Text>

          <Text style={estilos.Tela_Halloween_Texto}>
            A tradição das lanternas de abóbora surgiu de uma antiga
            lenda irlandesa sobre Jack O’Lantern. Atualmente, o Halloween
            também é celebrado em diversos países com festas temáticas,
            decoração assustadora e concursos de fantasia.
          </Text>

        </ScrollView>

      </View>

      {/* RODAPÉ */}
      <View style={estilos.Tela_Halloween_Rodape}>

        <Text style={estilos.Tela_Halloween_RodapeTexto}>
          {autor}
        </Text>

        <Text style={estilos.Tela_Halloween_RodapeTexto}>
          {data}
        </Text>

      </View>

    </View>

  );
}

export default Halloween;