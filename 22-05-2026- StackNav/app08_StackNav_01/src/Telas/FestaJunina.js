import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView
} from "react-native";

import { estilos } from "../styleSheet/estilos";

function FestaJunina() {

  let img1 = require("../Img/festajunina.png");

  let autor = "Luiz Corcini";
  let data = "dd/mm/aaaa";

  return (

    <View style={estilos.Tela_FestaJunina_Fundo}>

      {/* CABEÇALHO */}
      <View style={estilos.Tela_FestaJunina_Cab}>

        <Image
          source={img1}
          style={{ width: 180, height: 180 }}
        />

        <Text style={estilos.Tela_FestaJunina_Titulo}>
          Festa Junina
        </Text>

        <Text style={estilos.Tela_FestaJunina_SubTitulo}>
          Cultura e Tradição Brasileira
        </Text>

      </View>

      {/* CORPO */}
      <View style={estilos.Tela_FestaJunina_Corpo}>

        <ScrollView>

          <Text style={estilos.Tela_FestaJunina_TextoTitulo}>
            Origem da Festa Junina
          </Text>

          <Text style={estilos.Tela_FestaJunina_Texto}>
            A Festa Junina surgiu na Europa durante a Idade Média e foi
            trazida para o Brasil pelos portugueses. A comemoração é
            realizada durante o mês de junho em homenagem a santos
            populares como São João, Santo Antônio e São Pedro.
          </Text>

          <Text style={estilos.Tela_FestaJunina_TextoTitulo}>
            Curiosidades
          </Text>

          <Text style={estilos.Tela_FestaJunina_Texto}>
            As festas juninas possuem comidas típicas feitas de milho,
            danças como a quadrilha e roupas caipiras coloridas. Em
            muitas cidades brasileiras acontecem grandes celebrações
            com fogueiras, músicas e brincadeiras tradicionais.
          </Text>

          <Text style={estilos.Tela_FestaJunina_TextoTitulo}>
            Histórias e Tradições
          </Text>

          <Text style={estilos.Tela_FestaJunina_Texto}>
            A quadrilha é uma das tradições mais conhecidas da Festa
            Junina. Ela representa um casamento caipira cheio de humor
            e animação. Além disso, as bandeirinhas coloridas decoram
            os ambientes e deixam a festa ainda mais alegre.
          </Text>

        </ScrollView>

      </View>

      {/* RODAPÉ */}
      <View style={estilos.Tela_FestaJunina_Rodape}>

        <Text style={estilos.Tela_FestaJunina_RodapeTexto}>
          {autor}
        </Text>

        <Text style={estilos.Tela_FestaJunina_RodapeTexto}>
          {data}
        </Text>

      </View>

    </View>

  );
}

export default FestaJunina;