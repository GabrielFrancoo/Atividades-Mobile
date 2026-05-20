import React from 'react';

import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet
} from 'react-native';

import carros from './data/carros.json';

const imagens = {
  skyline: require('./assets/Skyline.jpg'),
  audi: require('./assets/Audi.jpg'),
  bmw: require('./assets/Bmw.jpg'),
  camaro: require('./assets/Camaro.jpg'),
  civic: require('./assets/Civic.jpg'),
  ferrari: require('./assets/Ferrari.jpg'),
  lancer: require('./assets/Lancer.jpg'),
  mustang: require('./assets/Mustang.jpg'),
  porsche: require('./assets/Porsche.jpg'),
  supra: require('./assets/Supra.jpg')
};

export default function App() {

  const renderItem = ({ item }) => (

    <View style={styles.card}>

      <Image
        source={imagens[item.imagem]}
        style={styles.imagem}
      />

      <View style={styles.info}>

        <Text style={styles.nome}>
          {item.nome}
        </Text>

        <Text style={styles.texto}>
          Marca: {item.marca}
        </Text>

        <Text style={styles.texto}>
          Potência: {item.potencia}
        </Text>

      </View>

    </View>

  );

  return (

    <View style={styles.container}>

      <Text style={styles.titulo}>
        Lista de Carros
      </Text>

      <FlatList
        data={carros}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />

    </View>

  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#1b1b1b',
    paddingTop: 40,
    paddingHorizontal: 10
  },

  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20
  },

  card: {
    backgroundColor: '#2b2b2b',
    borderRadius: 20,
    marginBottom: 25,
    overflow: 'hidden',

    elevation: 8,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4
    },

    shadowOpacity: 0.3,
    shadowRadius: 5
  },

  imagem: {
    width: '100%',
    height: 260,
    resizeMode: 'contain',
    backgroundColor: '#000'
  },

  info: {
    padding: 15
  },

  nome: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10
  },

  texto: {
    fontSize: 17,
    color: '#ccc',
    marginBottom: 5
  }

});