import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Cabecalho() {
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>
                TouchableHighlight || TextInput
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#b30000',
        padding: 15,
        alignItems: 'center',
    },
    texto: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});