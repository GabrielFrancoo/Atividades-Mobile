import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

function App() {

  let corFundo = '#5B61F6';
  let corCard = '#F7F9FC';
  let corTexto = '#333';
  let corTitulo = '#222';

  let descricao = 'Descubra comunidades, criadores e conteúdos em alta todos os dias 🚀';

  let img1 = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085';
  let img2 = 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f';
  let img3 = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3';

  return (

    <View style={{ flex: 1, backgroundColor: corFundo }}>

      <ScrollView>

        <View style={{ padding: 20 }}>

          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>

            <Ionicons
              name="person-circle-outline"
              size={55}
              color="white"
            />

            <View>

              <Ionicons
                name="notifications-outline"
                size={30}
                color="white"
              />

              <View style={{
                position: 'absolute',
                right: -5,
                top: -5,
                backgroundColor: '#FF3B30',
                borderRadius: 10,
                width: 18,
                height: 18,
                justifyContent: 'center',
                alignItems: 'center'
              }}>

                <Text style={{
                  color: 'white',
                  fontSize: 10
                }}>
                  5
                </Text>

              </View>

            </View>

          </View>

          <Text style={{
            color: 'white',
            marginTop: 20,
            fontSize: 16,
            lineHeight: 24
          }}>
            {descricao}
          </Text>

        </View>

        <View style={{
          backgroundColor: corCard,
          borderTopLeftRadius: 35,
          borderTopRightRadius: 35,
          padding: 20
        }}>

          <Text style={{
            fontSize: 22,
            fontWeight: 'bold',
            color: corTitulo
          }}>
            Comunidades 🔥
          </Text>

          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 20
          }}>

            <View style={{
              width: 80,
              height: 80,
              backgroundColor: '#FF914D',
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center'
            }}>

              <MaterialCommunityIcons
                name="laptop"
                size={35}
                color="white"
              />

            </View>

            <View style={{
              width: 80,
              height: 80,
              backgroundColor: '#845EF7',
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center'
            }}>

              <MaterialCommunityIcons
                name="camera"
                size={35}
                color="white"
              />

            </View>

            <View style={{
              width: 80,
              height: 80,
              backgroundColor: '#20C997',
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center'
            }}>

              <MaterialCommunityIcons
                name="gamepad-variant"
                size={35}
                color="white"
              />

            </View>

          </View>

          <Text style={{
            fontSize: 22,
            fontWeight: 'bold',
            color: corTitulo,
            marginBottom: 15
          }}>
            Em Alta 📈
          </Text>

          <View style={{
            flexDirection: 'row',
            marginBottom: 15
          }}>

            <Image
              source={{ uri: img1 }}
              style={{
                width: 90,
                height: 90,
                borderRadius: 20
              }}
            />

            <View style={{
              flex: 1,
              marginLeft: 12,
              justifyContent: 'center'
            }}>

              <Text style={{
                fontWeight: 'bold',
                fontSize: 16,
                marginBottom: 5
              }}>
                Desenvolvimento Mobile
              </Text>

              <Text style={{
                color: '#666',
                lineHeight: 20
              }}>
                Aprenda React Native e crie aplicativos modernos.
              </Text>

            </View>

          </View>

          <View style={{
            height: 10,
            backgroundColor: '#ddd',
            borderRadius: 10,
            marginBottom: 20
          }}>

            <View style={{
              width: '75%',
              height: 10,
              backgroundColor: '#5B61F6',
              borderRadius: 10
            }} />

          </View>

          <View style={{
            flexDirection: 'row',
            marginBottom: 15
          }}>

            <Image
              source={{ uri: img2 }}
              style={{
                width: 90,
                height: 90,
                borderRadius: 20
              }}
            />

            <View style={{
              flex: 1,
              marginLeft: 12,
              justifyContent: 'center'
            }}>

              <Text style={{
                fontWeight: 'bold',
                fontSize: 16,
                marginBottom: 5
              }}>
                Criadores Digitais
              </Text>

              <Text style={{
                color: '#666',
                lineHeight: 20
              }}>
                Compartilhe ideias e cresça sua comunidade online.
              </Text>

            </View>

          </View>

          <View style={{
            height: 10,
            backgroundColor: '#ddd',
            borderRadius: 10,
            marginBottom: 20
          }}>

            <View style={{
              width: '50%',
              height: 10,
              backgroundColor: '#20C997',
              borderRadius: 10
            }} />

          </View>

          <View style={{
            flexDirection: 'row',
            marginBottom: 15
          }}>

            <Image
              source={{ uri: img3 }}
              style={{
                width: 90,
                height: 90,
                borderRadius: 20
              }}
            />

            <View style={{
              flex: 1,
              marginLeft: 12,
              justifyContent: 'center'
            }}>

              <Text style={{
                fontWeight: 'bold',
                fontSize: 16,
                marginBottom: 5
              }}>
                Tecnologia & IA
              </Text>

              <Text style={{
                color: '#666',
                lineHeight: 20
              }}>
                Explore tendências de inteligência artificial e inovação.
              </Text>

            </View>

          </View>

          <View style={{
            height: 10,
            backgroundColor: '#ddd',
            borderRadius: 10
          }}>

            <View style={{
              width: '90%',
              height: 10,
              backgroundColor: '#FF914D',
              borderRadius: 10
            }} />

          </View>

        </View>

      </ScrollView>

    </View>

  );
}

export default App;