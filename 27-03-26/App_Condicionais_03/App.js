
import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity
} from 'react-native';

function App() {

  let OPCAO = 'Tela1';

  const corFundo = '#f4f7fb';
  const corPrimaria = '#5B61F6';
  const corSecundaria = '#00C897';
  const corCard = '#ffffff';
  const corTexto = '#2d3436';
  const corCinza = '#636e72';

  const descricao = 'Explore conteúdos modernos e aprenda novas habilidades todos os dias.';

  const avatar1 = 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e';
  const avatar2 = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330';
  const banner = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3';

  if (OPCAO === 'Tela1') {
    return (
      <View style={{ flex: 1, backgroundColor: corFundo }}>

        <ScrollView contentContainerStyle={{ padding: 20 }}>

          <Text style={{
            fontSize: 28,
            fontWeight: 'bold',
            color: corTexto,
            marginBottom: 5
          }}>
            Discover 🚀
          </Text>

          <Text style={{
            color: corCinza,
            marginBottom: 20
          }}>
            Find the best online courses and communities.
          </Text>

          <View style={{
            backgroundColor: corCard,
            borderRadius: 18,
            paddingHorizontal: 15,
            paddingVertical: 12,
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 20,
            elevation: 3
          }}>
            <Text style={{ fontSize: 18 }}>🔍</Text>

            <TextInput
              placeholder='Search courses...'
              style={{
                marginLeft: 10,
                flex: 1
              }}
            />
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginBottom: 20 }}
          >

            {['Technology', 'Design', 'Business', 'Gaming'].map((item, index) => (
              <TouchableOpacity
                key={index}
                style={{
                  backgroundColor: index === 0 ? corPrimaria : corCard,
                  paddingVertical: 12,
                  paddingHorizontal: 18,
                  borderRadius: 20,
                  marginRight: 10,
                  elevation: 2
                }}
              >
                <Text style={{
                  color: index === 0 ? '#fff' : corTexto,
                  fontWeight: 'bold'
                }}>
                  {item}
                </Text>
              </TouchableOpacity>
            ))}

          </ScrollView>

          <Text style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: corTexto,
            marginBottom: 15
          }}>
            Popular Courses ⭐
          </Text>

          {[1, 2].map((item, i) => (
            <View
              key={i}
              style={{
                backgroundColor: corCard,
                borderRadius: 25,
                padding: 15,
                marginBottom: 18,
                flexDirection: 'row',
                elevation: 4
              }}
            >

              <Image
                source={{ uri: i === 0 ? avatar1 : avatar2 }}
                style={{
                  width: 85,
                  height: 85,
                  borderRadius: 20
                }}
              />

              <View style={{
                flex: 1,
                marginLeft: 15,
                justifyContent: 'center'
              }}>

                <Text style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: corTexto,
                  marginBottom: 6
                }}>
                  UI/UX Masterclass
                </Text>

                <Text style={{
                  color: corCinza,
                  marginBottom: 10
                }}>
                  {descricao}
                </Text>

                <View style={{
                  height: 10,
                  backgroundColor: '#dfe6e9',
                  borderRadius: 10,
                  overflow: 'hidden'
                }}>

                  <View style={{
                    width: i === 0 ? '80%' : '55%',
                    height: 10,
                    backgroundColor: corSecundaria,
                    borderRadius: 10
                  }} />

                </View>

              </View>

            </View>
          ))}

          <View style={{
            backgroundColor: corCard,
            borderRadius: 30,
            overflow: 'hidden',
            elevation: 5,
            marginTop: 10
          }}>

            <Image
              source={{ uri: banner }}
              style={{
                width: '100%',
                height: 180
              }}
            />

            <View style={{ padding: 20 }}>

              <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: corTexto,
                marginBottom: 10
              }}>
                Join our Tech Community 💻
              </Text>

              <Text style={{
                color: corCinza,
                lineHeight: 22
              }}>
                Learn development, design and innovation with interactive content and practical projects.
              </Text>

            </View>

          </View>

        </ScrollView>

      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: corFundo }}>

      <View style={{
        backgroundColor: corPrimaria,
        height: 260,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 45,
        borderBottomRightRadius: 45
      }}>

        <Text style={{
          fontSize: 80
        }}>
          🎓
        </Text>

      </View>

      <View style={{
        flex: 1,
        backgroundColor: corCard,
        marginTop: -35,
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        padding: 25
      }}>

        <Text style={{
          fontSize: 28,
          fontWeight: 'bold',
          color: corTexto,
          textAlign: 'center'
        }}>
          Premium Access
        </Text>

        <Text style={{
          textAlign: 'center',
          color: corCinza,
          marginTop: 10,
          lineHeight: 22
        }}>
          Unlock all advanced courses, certificates and exclusive materials.
        </Text>

        <View style={{
          backgroundColor: '#eef2ff',
          padding: 25,
          borderRadius: 25,
          alignItems: 'center',
          marginVertical: 25
        }}>

          <Text style={{
            color: corPrimaria,
            fontSize: 36,
            fontWeight: 'bold'
          }}>
            $89.99
          </Text>

          <Text style={{
            color: corCinza,
            marginTop: 5
          }}>
            Lifetime access
          </Text>

        </View>

        <TextInput
          placeholder='Enter your email'
          style={{
            backgroundColor: '#f1f2f6',
            borderRadius: 18,
            padding: 15,
            marginBottom: 15
          }}
        />

        <TouchableOpacity
          style={{
            backgroundColor: corSecundaria,
            padding: 18,
            borderRadius: 20,
            alignItems: 'center',
            elevation: 4
          }}
        >

          <Text style={{
            color: '#fff',
            fontSize: 18,
            fontWeight: 'bold'
          }}>
            START NOW
          </Text>

        </TouchableOpacity>

      </View>

    </View>
  );
}

export default App;
