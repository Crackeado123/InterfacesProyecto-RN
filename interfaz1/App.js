import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Interfaz1 from './Componentes/interfaz1';

const App = () => {
  return (
    <View>
    <Interfaz1 />
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
