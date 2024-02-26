
import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import ApartadoIoT from './Componentes/apartadoiot';  // Ajusta la ruta correcta

export default function App() {
  return (
    <View style={styles.container}>
    
      <ApartadoIoT />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'left',
    marginTop: 40,
  },
  
});
