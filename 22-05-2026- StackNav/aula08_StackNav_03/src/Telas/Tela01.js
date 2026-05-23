import React from "react";
import { View, Text, Image, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { estilos } from '../styleSheet/estilos';


function Tela01() {
    let img = require("../img/mercurio.jpg");
    const nav = useNavigation();
    function voltar() {
        nav.goBack();
    }
    
    function proximo() {
        nav.navigate("Tela02");
    }
    return (
        <View style={estilos.tela_fundo}>        
            <Text style={estilos.titulo}>
                Mercúrio
            </Text>

            <Image
                source={img}
                style={estilos.planeta_img}
                />

                <Text style={estilos.texto}>
                    Mércurio é o planeta mais próximo do Sol.
                </Text>

                <Text style={estilos.texto}>
                    É o menor planeta do sistema Solar.
                </Text>

                <Text style={estilos.texto}>
                    Um ano em Mercúrio dura apenas 88 dias terrestres.
                </Text>

                <Text style={estilos.texto}>
                    Durante o dia, a temperatura pode ultrapassar 400C.
                </Text>
                
                <View style = {estilos.area_botoes}>

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

export default Tela01;