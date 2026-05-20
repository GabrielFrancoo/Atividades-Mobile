import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

function App() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
      
      <Image
        source={require('./img/Welcome.jpg')}
        style={{ width: 600, height: 600 }}
        resizeMode="contain"
      />

      <Text style={{ fontWeight: 'bold', width: 600, textAlign: 'left', fontSize: 40, marginTop: 20 }}>
        Bem-vindo(a) ao aplicativo{"\n"}Barilife!
      </Text>

      <Text style={{ width: 600, textAlign: 'left', fontSize: 20, marginTop: 10 }}>
        A Sociedade Brasileira de Cirurgia Bariátrica{"\n"}
        Metabólico (SBCBM) desenvolveu o aplicativo{"\n"}
        pensado em você, paciente bariátrico. É um{"\n"}
        aplicativo inovador e gratuito.
      </Text>

      {/* BOTÕES */}
      <View style={{ flexDirection: 'row', marginTop: 30 }}>
        
        <TouchableOpacity
          style={{
            backgroundColor: '#ccc',
            paddingVertical: 20,
            paddingHorizontal: 40,
            marginRight: 20,
            borderRadius: 10
          }}
        >
          <Text>Pular</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: '#007AFF',
            paddingVertical: 20,
            paddingHorizontal: 40,
            borderRadius: 10
          }}
        >
          <Text style={{ color: 'white' }}>Próximo</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

export default App;