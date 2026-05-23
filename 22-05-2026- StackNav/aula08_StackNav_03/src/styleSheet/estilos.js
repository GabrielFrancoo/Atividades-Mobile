import { StyleSheet } from 'react-native';

export const estilos = StyleSheet.create({

    //Principal
    Principal_fundo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#efefef'
    },

    Principal_SubTit: {
        fontSize: 18,
        marginBottom: 20
    },

    Principal_img: {
        width: 220,
        height: 220,
        resizeMode: 'contain'
    },

    Principal_Tit: {
        fontSize: 22,
        marginTop: 15,
        marginBottom: 20
    },

    Principal_SubTit2: {
        marginTop: 30,
        color: 'blue',
        fontSize: 16
    },

//Tela01 , //Tela 02  e //Tela 03

tela_fundo: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 20
},

titulo: { 
    color: '#fff',
    fontSize: 40, 
    fontWeight: 'bold',
    marginBottom: 20
},

planeta_img: {
    width: 180,
    height: 180,
    resizeMode: 'contain',
    marginBottom: 20 
}, 

texto: {
    color: '#fff',
    fontSizer: 16,
    marginBottom: 15,
    textAlign: 'left'
},

area_botoes: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 40
},


planeta_img2: {
    width: 180,
    height: 180,
    resizeMode: 'contain',
    marginBottom: 20 
}, 

});