import React from 'react';
import {
  View,
  Text,
  ImageBackground
} from 'react-native';

function App() {

  let fundo = require('./img/game.png');

  return (

    <View style={{ flex: 1 }}>

      <ImageBackground
        source={fundo}
        resizeMode="stretch"
        style={{
          flex: 1,
          width: '100%',
          height: '100%'
        }}
      >

        <View style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.45)',
          justifyContent: 'center',
          alignItems: 'center'
        }}>

          <Text style={{
            color: 'white',
            fontSize: 48,
            fontWeight: 'bold',
            marginBottom: 70,
            textShadowColor: '#000',
            textShadowOffset: { width: 2, height: 2 },
            textShadowRadius: 10
          }}>
            GAME ZONE 🎮
          </Text>

          <View style={{
            width: 280,
            backgroundColor: 'rgba(255,255,255,0.15)',
            padding: 18,
            borderRadius: 20,
            marginBottom: 25,
            borderWidth: 1.5,
            borderColor: 'rgba(255,255,255,0.4)',
            alignItems: 'center'
          }}>

            <Text style={{
              color: 'white',
              fontSize: 30,
              fontWeight: 'bold'
            }}>
              ▶ JOGAR
            </Text>

          </View>

          <View style={{
            width: 280,
            backgroundColor: 'rgba(255,255,255,0.15)',
            padding: 18,
            borderRadius: 20,
            marginBottom: 25,
            borderWidth: 1.5,
            borderColor: 'rgba(255,255,255,0.4)',
            alignItems: 'center'
          }}>

            <Text style={{
              color: 'white',
              fontSize: 30,
              fontWeight: 'bold'
            }}>
              🏆 RANKING
            </Text>

          </View>

          <View style={{
            width: 280,
            backgroundColor: 'rgba(255,255,255,0.15)',
            padding: 18,
            borderRadius: 20,
            borderWidth: 1.5,
            borderColor: 'rgba(255,255,255,0.4)',
            alignItems: 'center'
          }}>

            <Text style={{
              color: 'white',
              fontSize: 30,
              fontWeight: 'bold'
            }}>
              ❌ SAIR
            </Text>

          </View>

        </View>

      </ImageBackground>

    </View>

  );
}

export default App;