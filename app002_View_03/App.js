//DESAFIO 06
import React from 'react';
import {View, Text} from 'react-native';
function App() {
  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <View style={{flex: 1, backgroundColor: 'red'}}></View>
      <View style={{flex: 2, backgroundColor: 'darkorange' }}></View>
      <View style={{flex: 3, backgroundColor: 'green'}}></View>
    </View>
  );
}

export default App;