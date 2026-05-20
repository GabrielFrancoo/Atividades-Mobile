import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <Text>Componente View</Text>
      </View>
      <View style={styles.middle}>
        <Text>Conteúdo</Text>
      </View>
      <View style={styles.bottom}>
        <Text>Gabriel Ozório Franco</Text>
        <Text>18/12/1998</Text>
      </View>
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
    margin: 10,
  },
  top: {
    flex: 0.3,
    backgroundColor: 'red',
    borderWidth: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  middle: {
    flex: 0.3,
    backgroundColor: 'yellow',
    borderWidth: 5,
  },
  bottom: {
    flex: 0.3,
    backgroundColor: 'gray',
    borderWidth: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});

export default App;4