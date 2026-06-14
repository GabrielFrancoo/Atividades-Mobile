import React from 'react';
import { StatusBar } from 'react-native';
import Home from './src/Telas/Home';
import Portfolio from './src/Telas/Portfolio';
import Contato from './src/Telas/Contato';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="darkblue" />

      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'black',
          tabBarLabelPosition: 'below-icon',
          tabBarLabelStyle: {
            fontSize: 12,
          },
          tabBarStyle: {
            height: 70,
            paddingBottom: 10,
            paddingTop: 4,
          },
        }}
      >

        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home',
            headerStyle: { backgroundColor: 'darkblue' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="home" size={20} color="blue" />
            ),
          }}
        />

        <Tab.Screen
          name="Portfolio"
          component={Portfolio}
          options={{
            title: 'Portfólio',
            headerStyle: { backgroundColor: 'darkblue' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="work" size={24} color="darkblue" />
            ),
          }}
        />

        <Tab.Screen
          name="Contato"
          component={Contato}
          options={{
            title: 'Contato',
            headerStyle: { backgroundColor: 'darkblue' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="email" size={28} color="green" />
            ),
          }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;