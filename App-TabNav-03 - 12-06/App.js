import { StatusBar } from 'react-native';
import Exercicios from './src/Telas/Exercicios';
import Dieta from './src/Telas/Dieta';
import Perfil from './src/Telas/Perfil';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#1a1a2e" />
      <Tab.Navigator
        screenOptions={{
          tabBarActiveBackgroundColor: '#e94560',
          tabBarInactiveBackgroundColor: '#1a1a2e',
          tabBarActiveTintColor: '#ffffff',
          tabBarInactiveTintColor: '#aaaaaa',
          tabBarLabelPosition: 'below-icon',
          tabBarStyle: { backgroundColor: '#1a1a2e', height: 70, paddingBottom: 10 },
          tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' },
          headerStyle: { backgroundColor: '#1a1a2e' },
          headerTintColor: '#ffffff',
        }}
      >
        <Tab.Screen
          name="Exercícios"
          component={Exercicios}
          options={{
            tabBarIcon: () => (
              <MaterialIcons name="fitness-center" size={24} color="#ffffff" />
            ),
          }}
        />
        <Tab.Screen
          name="Dieta"
          component={Dieta}
          options={{
            tabBarIcon: () => (
              <MaterialIcons name="restaurant" size={24} color="#ffffff" />
            ),
          }}
        />
        <Tab.Screen
          name="Perfil"
          component={Perfil}
          options={{
            tabBarIcon: () => (
              <MaterialIcons name="person" size={24} color="#ffffff" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
