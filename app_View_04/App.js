//DESAFIO 9
import React from 'react';
import {View, Text} from 'react-native';

function App() {
  return (
    <View style={{flex: 1, padding: 50, backgroundColor: 'orange', flexDirection: 'column',justifyContent: 'center'}}>
      <View style={{width: 70, height: 70,backgroundColor: 'powderblue'}}></View>
      <View style={{width: 70, height:70, backgroundColor: 'skyblue'}}></View>
      <View style={{width:70, height:70, backgroundColor: 'green'}}></View>
    </View>
  );
}
export default App;