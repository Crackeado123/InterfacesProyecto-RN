import { StatusBar } from 'expo-status-bar';
import { Button,Image, StyleSheet, Text, View } from 'react-native';
import Interfaz2 from './Componentes/interfaz2';

export default function App() {
  return (
    <View style={styles.container}>
     <Interfaz2 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    marginTop:40,
  },
  
});
