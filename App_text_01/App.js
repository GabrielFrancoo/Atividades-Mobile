import React from 'react';
import { View, Text } from 'react-native';

function App() {
  return (
    <View style={{
      flex: 1,
      padding: 30,
      backgroundColor: '#0F172A',
    }}>

      <Text style={{
        backgroundColor: '#1E293B',
        color: '#FACC15',
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 50
      }}>
        Poema
      </Text>

      <Text style={{ fontSize: 30, color: '#E2E8F0' }}>
        <Text>Ó mar salgado...{'\n'}quanto do teu sal </Text>

        <Text style={{ fontFamily: 'Bernard MT Condensed', color: '#38BDF8' }}>
          são lágrimas de Portugal!{'\n'}
        </Text>

        <Text style={{ fontSize: 25, fontWeight: "bold", color: '#F8FAFC' }}>
          Quantos filhos em vão rezaram!{'\n'}
        </Text>

        <Text style={{ fontSize: 20, fontStyle: 'italic', color: '#CBD5E1' }}>
          Quantas noivas ficaram por casar?{'\n'}
        </Text>

        <Text>Pra que fosses nosso, ó mar!{'\n'}</Text>
        <Text>...{'\n'}</Text>

        <Text>
          Valeu a pena? {'\n'}
          Tudo vale a pena{'\n'}
        </Text>

        <Text>Se a alma não é pequena!</Text>
      </Text>

      <Text style={{
        backgroundColor: '#1E293B',
        color: '#FACC15',
        fontSize: 30,
        textAlign: 'center',
        marginTop: 50,
        fontFamily: 'Brush Script MT'
      }}>
        Fernando Pessoa {'\n'}(1888-1935)
      </Text>

    </View>
  );
}

export default App;