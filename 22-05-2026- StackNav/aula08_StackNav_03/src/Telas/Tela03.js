import React from "react";
import { View, Text, Image, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { estilos } from '../styleSheet/estilos';

function Tela03() {

    let img = require("../img/Marte.jpg");
    const nav = useNavigation();
    function voltar() {
        nav.goBack();
    }

    return (

        <View style={estilos.tela_fundo}>

            <Text style={estilos.titulo}>
                Marte
            </Text>

            <Image
                source={img}
                style={estilos.planeta_img}
            />

            <Text style={estilos.texto}>
                Marte é conhecido como o planeta vermelho.
            </Text>

            <Text style={estilos.texto}>
                A coloração vermelha é causada por óxido de ferro.
            </Text>

            <Text style={estilos.texto}>
                Cientistas estudam a possibilidade de vida antiga no planeta.
            </Text>

            <Text style={estilos.texto}>
                Missões espaciais investigam Marte constantemente.
            </Text>

            <View style={estilos.area_botoes}>

                <Button
                    title="VOLTAR"
                    onPress={voltar}
                />

            </View>

        </View>

    );
}

export default Tela03;