import React from "react";
import Animais from "./src/Telas/Animais";
import Detalhes from "./src/Telas/Detalhes";
import Preferencias from "./src/Telas/Preferencias";
import Sobre from "./src/Telas/Sobre";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

function App() {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Animais">
        <Drawer.Screen
          name="Animais"
          component={Animais}
          options={{ title: "Lista de Animais" }}
        />
        <Drawer.Screen
          name="Detalhes"
          component={Detalhes}
          options={{ title: "Detalhes" }}
        />
        <Drawer.Screen
          name="Preferencias"
          component={Preferencias}
          options={{ title: "Preferências" }}
        />
        <Drawer.Screen
          name="Sobre"
          component={Sobre}
          options={{ title: "Sobre o App" }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default App;
