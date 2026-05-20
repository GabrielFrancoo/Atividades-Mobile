import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';

function App() {

  const menu = [
    {
      nome: 'Início',
      icone: 'https://img.icons8.com/ios-filled/100/home.png'
    },
    {
      nome: 'Mensagens',
      icone: 'https://img.icons8.com/ios-filled/100/chat.png'
    },
    {
      nome: 'Amigos',
      icone: 'https://img.icons8.com/ios-filled/100/group.png'
    },
    {
      nome: 'Vídeos',
      icone: 'https://img.icons8.com/ios-filled/100/video.png'
    }
  ];

  const posts = [
    {
      nome: 'Ana Souza',
      tempo: '2 min atrás',
      foto: 'https://randomuser.me/api/portraits/women/44.jpg',
      imagem: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',
      descricao: 'Estudando React Native e criando aplicativos incríveis 🚀'
    },

    {
      nome: 'Lucas Martins',
      tempo: '15 min atrás',
      foto: 'https://randomuser.me/api/portraits/men/32.jpg',
      imagem: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
      descricao: 'Programando a madrugada inteira com café ☕💻'
    },

    {
      nome: 'Mariana Lima',
      tempo: '1 hora atrás',
      foto: 'https://randomuser.me/api/portraits/women/65.jpg',
      imagem: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
      descricao: 'Trabalhar com pessoas criativas é muito bom ✨'
    }
  ];

  return (

    <View style={{
      flex: 1,
      backgroundColor: '#f4f6fb'
    }}>

      <View style={{
        backgroundColor: '#fff',
        paddingTop: 50,
        paddingBottom: 20,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        elevation: 5
      }}>

        <Text style={{
          fontSize: 28,
          fontWeight: 'bold',
          color: '#4A6CF7'
        }}>
          Conecta+
        </Text>

        <Text style={{ fontSize: 24 }}>
          🔔
        </Text>

      </View>

      <ScrollView>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{
            paddingVertical: 15,
            paddingLeft: 15
          }}
        >

          {menu.map((item, index) => (

            <TouchableOpacity
              key={index}
              style={{
                backgroundColor: '#fff',
                paddingVertical: 12,
                paddingHorizontal: 20,
                borderRadius: 20,
                marginRight: 10,
                flexDirection: 'row',
                alignItems: 'center',
                elevation: 3
              }}
            >

              <Image
                source={{ uri: item.icone }}
                style={{
                  width: 18,
                  height: 18,
                  marginRight: 8
                }}
              />

              <Text style={{
                fontWeight: 'bold',
                color: '#333'
              }}>
                {item.nome}
              </Text>

            </TouchableOpacity>

          ))}

        </ScrollView>

        {posts.map((post, index) => (

          <View
            key={index}
            style={{
              backgroundColor: '#fff',
              marginHorizontal: 15,
              marginBottom: 20,
              borderRadius: 25,
              overflow: 'hidden',
              elevation: 4
            }}
          >

            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              padding: 15
            }}>

              <Image
                source={{ uri: post.foto }}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25
                }}
              />

              <View style={{
                marginLeft: 12,
                flex: 1
              }}>

                <Text style={{
                  fontWeight: 'bold',
                  fontSize: 16,
                  color: '#222'
                }}>
                  {post.nome}
                </Text>

                <Text style={{
                  color: 'gray',
                  fontSize: 12
                }}>
                  {post.tempo}
                </Text>

              </View>

              <Text style={{
                fontSize: 20
              }}>
                ⋮
              </Text>

            </View>

            <Text style={{
              paddingHorizontal: 15,
              paddingBottom: 15,
              color: '#444',
              lineHeight: 22
            }}>
              {post.descricao}
            </Text>

            <Image
              source={{ uri: post.imagem }}
              style={{
                width: '100%',
                height: 220
              }}
            />

            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              padding: 15
            }}>

              <Text>❤️ Curtir</Text>
              <Text>💬 Comentar</Text>
              <Text>📤 Compartilhar</Text>

            </View>

          </View>

        ))}

      </ScrollView>

      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingVertical: 15,
        borderTopWidth: 1,
        borderColor: '#ddd'
      }}>

        <Text style={{ fontSize: 24 }}>🏠</Text>
        <Text style={{ fontSize: 24 }}>🔍</Text>
        <Text style={{ fontSize: 24 }}>➕</Text>
        <Text style={{ fontSize: 24 }}>❤️</Text>
        <Text style={{ fontSize: 24 }}>👤</Text>

      </View>

    </View>

  );
}

export default App;