import React from 'react';
import { ScrollView } from 'react-native';
import Item from './Item';

function Conteudo() {
  let itemConteudo = null;

  let ArrayPaises = [
    "Brasil", "China", "Japão", "Portugal", "Itália",
    "Alemanha", "Egito", "Síria", "Africa do Sul", "Paquistão"
  ];
  let ArrayCoresFundo = [
    "blue", "yellow", "green", "blue", "darkred",
    "gray", "blue", "yellow", "green", "black"
  ];
  let ArrayCoresFonte = [
    "white", "black", "yellow", "black", "yellow",
    "green", "white", "green", "yellow", "black"
  ];
  {/* ✅ DESAFIO 03 — 3 novos parâmetros */}
  let ArrayBandeiras = [
    "🇧🇷", "🇨🇳", "🇯🇵", "🇵🇹", "🇮🇹",
    "🇩🇪", "🇪🇬", "🇸🇾", "🇿🇦", "🇵🇰"
  ];
  let ArrayHabitantes = [
    "215 milhões", "1,4 bilhão", "125 milhões", "10 milhões", "60 milhões",
    "84 milhões", "104 milhões", "22 milhões", "60 milhões", "231 milhões"
  ];
  let ArrayPIB = [
    "R$ 10,1 tri", "US$ 17,7 tri", "US$ 4,2 tri", "US$ 255 bi", "US$ 2,1 tri",
    "US$ 4,3 tri", "US$ 387 bi", "US$ 60 bi", "US$ 405 bi", "US$ 387 bi"
  ];

  for (let i = 0; i < ArrayPaises.length; i++) {
    itemConteudo = (
      <>
        {itemConteudo}
        <Item
          nomePais={ArrayPaises[i]}
          corFundo={ArrayCoresFundo[i]}
          corFonte={ArrayCoresFonte[i]}
          bandeira={ArrayBandeiras[i]}
          habitantes={ArrayHabitantes[i]}
          pib={ArrayPIB[i]}
        />
      </>
    )
  }

  return (
    <ScrollView style={{ flex: 1 }}>
      {itemConteudo}
    </ScrollView>
  );
}

export default Conteudo;