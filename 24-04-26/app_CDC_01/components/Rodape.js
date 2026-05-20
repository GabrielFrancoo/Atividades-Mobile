import React from 'react';
import { View, Text } from 'react-native';

function Rodape(props) {
  let nome = props.nome;
  let data = props.data;

  return (
    <View style={{
      backgroundColor: 'darkred',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,
    }}>
      {/* ✅ nome e data recebidos por parâmetro */}
      <Text style={{ color: 'white', fontSize: 14 }}>{nome}</Text>
      <Text style={{ color: 'yellow', fontSize: 14 }}>{data}</Text>
    </View>
  );
}

export default Rodape;