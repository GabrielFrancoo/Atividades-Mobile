import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import paises from '../dados/paises.json';

import styles from '../styles/styles';

function Conteudo() {
    function keyExtractor(item) {
        return item.id;
    }

    function renderItem({ item }) {
        return (
            <View style={styles.card}>
                <Text style={styles.pais}>{item.pais}</Text>
                <Text style={styles.capital}>Capital: {item.capital}</Text>
            </View>
        );
}

    return (
        <View style={styles.container}>
            <View style={styles.cabecalho}>
                <Image source={require('../assets/bandeiras.png')}
                style={styles.bandeira} 
                />
                <Text style={styles.titulo}>
                    Países
                </Text>
            </View>

            <FlatList
                data={paises}
                keyExtractor={keyExtractor}
                renderItem={renderItem}
                contentContainerStyle={styles.lista}
            />

            <View style={styles.rodape}>
                <Image
                    source={require('../assets/bandeiras.png')}
                    style={styles.bandeira}
                />
            </View>
        </View>
    )
}

export default Conteudo;