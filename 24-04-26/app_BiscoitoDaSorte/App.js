import React, { useState } from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { estilos } from './styleSheet/estilos';

function App() {

  let ArrayFrases = [
    'Siga as boas pessoas e aprenda com elas',
    'O bom-senso vale mais do que muito conhecimento',
    'O riso é a maior distância entre duas pessoas',
    'Deixe de lado as preocupações e seja feliz',
    'Realize o óbvio, pense no improvável e conquiste o impossível',
    'Acredite em milagres, mas não dependa deles',
    'A maior barreira para o sucesso é o medo do fracasso'
  ];

  const [textoBotao, setTextoBotao] = useState('Quebrar Biscoito...');
  const [imgBiscoito, setImgBiscoito] = useState(
    require('./assets/BS02_biscoito.png')
  );
  const [textoFrase, setTextoFrase] = useState('Quebre seu biscoito e veja sua sorte...');

  function alteraStatusBiscoito() {
    let numFrase;

    if(textoBotao == 'Quebrar Biscoito...') {
      numFrase = Math.floor(Math.random() * ArrayFrases.length);
      setTextoFrase(ArrayFrases[numFrase]);

        setTextoBotao('Nova Tentativa');
        setImgBiscoito(require('./assets/BS01_biscoitoAberto.png'));
      } else {
        setTextoBotao('Quebrar Biscoito...');
        setImgBiscoito(require('./assets/BS02_biscoito.png'));
        setTextoFrase('Quebre seu biscoito e veja sua sorte...');
      }
    }

  return (
    <View style={estilos.areaFundo}>

      <View style={estilos.areaTitulo}>
        <Text style={estilos.titulo}>App Biscoito da Sorte</Text>
      </View>

      <View style={estilos.areaImg}>
        <Image
          source={imgBiscoito}
          style={estilos.img}
        />
      </View>

      <View style = {{alignItems: 'center'}}>
        <Text style={estilos.textoFrase}>{textoFrase}</Text>
        <TouchableOpacity
          style={estilos.botao}
          onPress={alteraStatusBiscoito}
        >
          <View style={estilos.areaBotao}>

            <Image
              source={require('./assets/BS03_Btn_icone_01.png')}
              style={{ marginRight: 20, width: 40, height: 40 }}
            />

            <Text style={estilos.textoBotao}>
              {textoBotao}
            </Text>

          </View>
        </TouchableOpacity>
      </View>

    </View>
  );
}

export default App;