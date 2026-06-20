import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Contato from "../Telas/Contato";
import DetalheContato from "../Telas/DetalheContato";


const Stack = createNativeStackNavigator();

export default function ContatoStackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ContatoPrincipal" component={Contato} />
      <Stack.Screen name="DetalheContato" component={DetalheContato} />
    </Stack.Navigator>
  );
}
