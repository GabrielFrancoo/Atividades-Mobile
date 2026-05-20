import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  const TITULO = 'Inteligência Artificial';

  const PARAGRAFO =
    'A Inteligência Artificial (IA) é uma área da computação que desenvolve sistemas capazes de simular a inteligência humana. Esses sistemas podem aprender, reconhecer padrões, tomar decisões e resolver problemas. Hoje, a IA é usada em assistentes virtuais, recomendações de vídeos, carros autônomos e diversas outras tecnologias do dia a dia.';

  const RODAPE1 = 'Gabriel Ozório Franco';
  const RODAPE2 = '2026';

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#0F172A',
        paddingVertical: 30,
        paddingHorizontal: 20,
      }}
    >
      {/* HEADER */}
      <View
        style={{
          flex: 1.5,
          backgroundColor: '#1E293B',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 12,
          marginBottom: 10,
        }}
      >
        <Text
          style={{
            fontSize: 26,
            fontWeight: 'bold',
            color: '#38BDF8',
            textAlign: 'center',
          }}
        >
          {TITULO}
        </Text>
      </View>

      {/* CONTEÚDO */}
      <View
        style={{
          flex: 6,
          backgroundColor: '#111827',
          borderRadius: 12,
          padding: 15,
          justifyContent: 'center',
        }}
      >
        <Text
          style={{
            fontSize: 18,
            textAlign: 'justify',
            color: '#E5E7EB',
            lineHeight: 24,
          }}
        >
          {PARAGRAFO}
        </Text>
      </View>

      {/* RODAPÉ */}
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: '#1E293B',
          marginTop: 10,
          alignItems: 'center',
          paddingHorizontal: 15,
          borderRadius: 12,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: '#38BDF8',
          }}
        >
          {RODAPE1}
        </Text>

        <Text
          style={{
            fontSize: 20,
            fontStyle: 'italic',
            color: '#FFFFFF',
          }}
        >
          {RODAPE2}
        </Text>
      </View>
    </View>
  );
}