import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';

export default function Conteudo() {
  const personagens = [
    { nome: 'aiolia', imagem: require('../../img/aiolia_leao.jpg') },
    { nome: 'aioros', imagem: require('../../img/aioros_sagitario.jpg') },
    { nome: 'aldebaran', imagem: require('../../img/aldebaran_touro.jpg') },
    { nome: 'aphrodite', imagem: require('../../img/aphrodite_peixes.jpg') },
    { nome: 'camus', imagem: require('../../img/camus_aquario.jpg') },
    { nome: 'mascara da morte', imagem: require('../../img/deathmask_cancer.jpg') },
    { nome: 'dohko', imagem: require('../../img/dohko_libra.jpg') },
    { nome: 'hyoga', imagem: require('../../img/hyoga_cisne.jpg') },
    { nome: 'ikki', imagem: require('../../img/ikki_fenix.jpg') },
    { nome: 'milo', imagem: require('../../img/milo_escorpiao.jpg') },
    { nome: 'mu', imagem: require('../../img/mu_aries.jpg') },
    { nome: 'saga', imagem: require('../../img/saga_gemeos.jpg') },
    { nome: 'shaka', imagem: require('../../img/shaka_virgem.jpg') },
    { nome: 'shura', imagem: require('../../img/shura_capricornio.jpg') },
    { nome: 'shun', imagem: require('../../img/shun_andromeda.jpg') },
    { nome: 'shiryu', imagem: require('../../img/shiryu_dragao.jpg') },
    { nome: 'seiya', imagem: require('../../img/seiya_pegaso.jpg') },
  ];

  const [indice, setIndice] = useState(
    Math.floor(Math.random() * personagens.length)
  );
  const [texto, setTexto] = useState('');
  const [mensagem, setMensagem] = useState('');

  function verificar() {
    if (
      texto.toLowerCase().trim() ===
      personagens[indice].nome.toLowerCase()
    ) {
      setMensagem('Parabéns, você acertou!');
    } else {
      setMensagem('Ops, tente novamente!');
    }
  }

  function proximo() {
    const novoIndice = Math.floor(Math.random() * personagens.length);
    setIndice(novoIndice);
    setTexto('');
    setMensagem('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Acerte o Personagem</Text>

     <View style={styles.card}>
      <Image source={personagens[indice].imagem} style={styles.img} />
    </View>

      <TextInput
        style={styles.input}
        placeholder="Digite o nome do personagem"
        value={texto}
        onChangeText={setTexto}
      />

      <TouchableHighlight style={styles.btnVerificar} onPress={verificar}>
        <Text style={styles.btnTexto}>Verificar</Text>
      </TouchableHighlight>

      <Text style={styles.mensagem}>{mensagem}</Text>

      <TouchableHighlight style={styles.btnProximo} onPress={proximo}>
        <Text style={styles.btnTexto}>Próximo</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
    padding: 20,
  },

  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  img: {
    width: 180,
    height: 260,
    resizeMode: 'contain',
  },

  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    elevation: 5, // sombra Android
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: 250,
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: '#fff',
  },

  btnVerificar: {
    backgroundColor: '#28a745',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginBottom: 10,
  },

  btnProximo: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
  },

  btnTexto: {
    color: '#fff',
    fontWeight: 'bold',
  },

  mensagem: {
    marginVertical: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  
});