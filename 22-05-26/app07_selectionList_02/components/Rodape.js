import React from 'react';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default function Rodape() {

  return (

    <View style={styles.container}>

      <Text style={styles.texto}>
        Gabriel Ozório Franco
      </Text>

      <Text style={styles.texto}>
        19/05/2026
      </Text>

    </View>

  );

}

const styles = StyleSheet.create({

  container: {
    padding: 15,
    backgroundColor: '#1f1f1f',
    alignItems: 'center'
  },

  texto: {
    color: '#aaa',
    fontSize: 16
  }

});