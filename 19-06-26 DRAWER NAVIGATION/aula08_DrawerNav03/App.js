import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import TabsRoutes from "./src/routes/TabsRoutes";
import Home from "./src/Telas/Home";
import Sobre from "./src/Telas/Sobre";
import Contato from "./src/Telas/Contato";

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Início">
        <Drawer.Screen
          name="Início"
          component={TabsRoutes}
          options={{ title: "Início (com Tabs)" }}
        />
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Sobre" component={Sobre} />
        <Drawer.Screen name="Contato" component={Contato} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;