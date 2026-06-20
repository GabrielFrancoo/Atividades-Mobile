import React from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";


const animais = [
  {
    id: "1",
    nome: "Golden Retriever",
    tipo: "Cachorro",
    imagem: "https://images.unsplash.com/photo-1633722715463-d30f4f325e24?w=300",
  },
  {
    id: "2",
    nome: "Gato Siamês",
    tipo: "Gato",
    imagem: "https://images.unsplash.com/photo-1573865526739-10c1d3a1c2eb?w=300",
  },
  {
    id: "3",
    nome: "Papagaio",
    tipo: "Ave",
    imagem: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=300",
  },
  {
    id: "4",
    nome: "Cavalo Árabe",
    tipo: "Cavalo",
    imagem: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=300",
  },
  {
    id: "5",
    nome: "Coelho Anão",
    tipo: "Coelho",
    imagem: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=300",
  },
];

export default function Animais() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🐾 Meus Animais Favoritos</Text>
      <FlatList
        data={animais}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.imagem }} style={styles.imagem} />
            <View style={styles.infoContainer}>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.tipo}>{item.tipo}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff8f0",
    paddingTop: 20,
    paddingHorizontal: 16,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#5a3e2b",
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 12,
    padding: 10,
    alignItems: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  imagem: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 14,
  },
  infoContainer: {
    flex: 1,
  },
  nome: {
    fontSize: 17,
    fontWeight: "600",
    color: "#333",
  },
  tipo: {
    fontSize: 14,
    color: "#888",
    marginTop: 2,
  },
});
