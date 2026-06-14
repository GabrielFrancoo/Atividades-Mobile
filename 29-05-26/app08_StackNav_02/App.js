import Principal from './src/Telas/Principal';
import Historia from './src/Telas/Historia';
import Consoles from './src/Telas/Consoles';
import Curiosidades from './src/Telas/Curiosidades';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Principal">
        <Stack.Screen
          name="Principal"
          component={Principal}
          options={{
            title: 'Game World',
            headerStyle: { backgroundColor: '#1a1a2e' },
            headerTintColor: '#e94560',
          }}
        />
        <Stack.Screen
          name="Historia"
          component={Historia}
          options={{
            title: 'História dos Games',
            headerStyle: { backgroundColor: '#16213e' },
            headerTintColor: '#ffffff',
          }}
        />
        <Stack.Screen
          name="Consoles"
          component={Consoles}
          options={{
            title: 'Consoles Históricos',
            headerStyle: { backgroundColor: '#0f3460' },
            headerTintColor: '#ffffff',
          }}
        />
        <Stack.Screen
          name="Curiosidades"
          component={Curiosidades}
          options={{
            title: 'Curiosidades',
            headerStyle: { backgroundColor: '#533483' },
            headerTintColor: '#ffffff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
