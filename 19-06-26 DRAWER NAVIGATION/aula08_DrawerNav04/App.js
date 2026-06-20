import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import TabsRoutes from "./src/routes/TabsRoutes";
import Home from "./src/Telas/Home";
import Sobre from "./src/Telas/Sobre";
import ContatoStackRoutes from "./src/routes/ContatoStackRoutes";


const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Início">
        <Drawer.Screen
          name="Início"
          component={TabsRoutes}
          options={{ title: "Início (Tabs + Stack)" }}
        />
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Sobre" component={Sobre} />
        <Drawer.Screen
          name="Contato"
          component={ContatoStackRoutes}
          options={{ title: "Contato (Stack)" }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
