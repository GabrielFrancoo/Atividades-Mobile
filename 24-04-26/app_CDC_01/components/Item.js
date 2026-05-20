import React from 'react';
import { View, Text } from 'react-native';

function Item(props) {
  let nomePais   = props.nomePais;
  let corFundo   = props.corFundo;
  let corFonte   = props.corFonte;
  let bandeira   = props.bandeira;
  let habitantes = props.habitantes;
  let pib        = props.pib;

  return (
    <View style={{
      backgroundColor: corFundo,
      marginTop: 10,
      height: 100,
      width: '100%',
      padding: 8,
      justifyContent: 'center',
    }}>
      <Text style={{ color: corFonte, fontSize: 22, fontWeight: 'bold' }}>
        {bandeira} {nomePais}
      </Text>
      <Text style={{ color: corFonte, fontSize: 13 }}>
        👥 {habitantes}
      </Text>
      <Text style={{ color: corFonte, fontSize: 13 }}>
        💰 {pib}
      </Text>
    </View>
  );
}

export default Item;