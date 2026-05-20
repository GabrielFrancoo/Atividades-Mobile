import React from 'react';
import { ScrollView } from 'react-native';
import ItemNoticia from './ItemNoticia';

function ListaNoticias() {

  let ArrayTitulos = [
    "Brasileirão 2025: confira os favoritos ao título desta temporada",
    "NBA: time bate recorde histórico de pontos em uma única partida",
    "Roland Garros 2025: brasileiros avançam às oitavas de final",
    "Boliche entra no programa dos Jogos Pan-Americanos de 2027",
    "Seleção brasileira de vôlei de praia é ouro no Mundial",
  ];

  let ArrayManchetes = [
    "ESPORTES QUENTES",
    "ESPORTES QUENTES",
    "ESPORTES QUENTES",
    "ESPORTES QUENTES",
    "ESPORTES QUENTES",
  ];

  let ArrayDatas = [
    "20/4/2025",
    "15/4/2025",
    "10/4/2025",
    "5/4/2025",
    "1/4/2025",
  ];

  let ArrayImagens = [
    require('../img/noticia1.jpg'), // futebol
    require('../img/noticia2.jpg'), // basquete
    require('../img/noticia3.jpg'), // tênis
    require('../img/noticia4.jpg'), // boliche
    require('../img/noticia5.jpg'), // vôlei de praia
  ];

  let listaItens = null;

  for (let i = 0; i < ArrayTitulos.length; i++) {
    listaItens = (
      <>
        {listaItens}
        <ItemNoticia
          titulo={ArrayTitulos[i]}
          manchete={ArrayManchetes[i]}
          data={ArrayDatas[i]}
          imagem={ArrayImagens[i]}
        />
      </>
    );
  }

  return (
    <ScrollView style={{ flex: 1 }}>
      {listaItens}
    </ScrollView>
  );
}

export default ListaNoticias;