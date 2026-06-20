import React from "react";
import Home from "./src/Telas/Home";
import Sobre from "./src/Telas/Sobre";
import Contato from "./src/Telas/Contato";
import { NavigationContainer }
  from "@react-navigation/native";
import { createDrawerNavigator }
  from "@react-navigation/drawer";

function App() {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Contato" component={Contato} />
        <Drawer.Screen name="Sobre" component={Sobre} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default App;
