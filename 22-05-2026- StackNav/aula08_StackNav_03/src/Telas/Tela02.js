import React from "react";
import { View, Text, Image, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { estilos } from '../styleSheet/estilos';

function Tela02() {

    let img = require("../img/Venus.jpg");
    const nav = useNavigation();
    
    function voltar() {
        nav.goBack();
    }

    function proximo() {
        nav.navigate("Tela03");
    }

    return (

        <View style={estilos.tela_fundo}>

            <Text style={estilos.titulo}>
                Vênus
            </Text>

            <Image
                source={img}
                style={estilos.planeta_img}
            />

            <Text style={estilos.texto}>
                Vênus é o segundo planeta do Sistema Solar.
            </Text>

            <Text style={estilos.texto}>
                É conhecido como o planeta mais quente.
            </Text>

            <Text style={estilos.texto}>
                Sua atmosfera é composta principalmente por gás carbônico.
            </Text>

            <Text style={estilos.texto}>
                Um dia em Vênus é maior que um ano.
            </Text>

            <View style={estilos.area_botoes}>

                <Button
                    title="VOLTAR"
                    onPress={voltar}
                />

                <Button
                    title="PRÓXIMO PLANETA"
                    onPress={proximo}
                />

            </View>

        </View>

    );
}

export default Tela02;