import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  fundo: {
    flex: 1,
    backgroundColor: '#e6e6e6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container:{
    width: '90%',
    flex: 1,
    backgroundColor: '#e6e6e6',
    borderRadius: 20,
    padding: 15,
  },

  cabecalho: {
    alignItems: 'center',
    marginBottom: 10,
   
  },

  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVerfical: 10,
  },

    lista: {
        flexGrow: 0,
  },

  card: { 
    backgroundColor: '#a9c7e5',
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
  },

  pais: { 
    fontSize: 16,
    fontWeight: 'bold',
  },

  capital: {
    fontSize: 14,
    opacity: 0.7,
  },

  rodape: {
    alignItems: 'center',
    marginTop: 10,
  },

  bandeiras: {
    width: 60,
    height: 20,
    resizeMode: 'contain',
    marginVertical: 10,
  },

});


export default styles;