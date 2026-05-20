import React from "react";
import { View } from "react-native";

function App() {
  return (
    <View style= {{backgroundColor: 'blue', height: '100%', width: 300}}>

      <View style= {{backgroundColor: 'orange', height:'20%', width: '100%'}}>
        <text>Componente View </text>
        <text>Gabriel Ozório Franco</text>
        <text>01/03/2025</text>
      </View>

      <View style= {{backgroundColor: 'yellow', height:'70%', width: '100px'}}>
        <text>Componente View </text>
        <text>Gabriel Ozório Franco</text>
        <text>01/03/2025</text>
      </View>
      <View style= {{backgroundColor: 'red', height:'10%', width: '200px'}}>
        <text>Componente View</text>
        <text>Gabriel Ozório Franco</text>
        <text>01/03/2025</text>
      </View>

    </View>
  );
}
export default App;