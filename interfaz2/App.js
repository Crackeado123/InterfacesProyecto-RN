import { StatusBar } from 'expo-status-bar';
import { Button,Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        
        <Text style={styles.text}>Productos</Text>
        <Button title="Filtrar" onPress={() => console.log("Button pressed")} color="#8B4513" />
        
      </View>
  
      {/* Container 1 */}
      <View style={styles.subContainer}>
      <Image
          source={require('./assets/Product_64b87f5d7d98e.jpg')} // Ajusta la ruta de la imagen
          style={styles.image}
        />
      <Button
          title="Editar"
          onPress={() => console.log("Button pressed")}
          color="#8B4513" // Color del botón
          style={styles.button} // Estilo adicional para el botón
        />
        <Text style={styles.text2}></Text>
        <Button
          title="Ver"
          onPress={() => console.log("Button pressed")}
          color="#8B4513" // Color del botón
          style={styles.button} // Estilo adicional para el botón
        />
        <Text style={styles.text2}></Text>
        <Button
          title="Eliminar"
          onPress={() => console.log("Button pressed")}
          color="#8B4513" // Color del botón
          style={styles.button} // Estilo adicional para el botón
        />
      </View>

      <View style={styles.subContainer}>
      <Image
          source={require('./assets/Product_64baa95ab8919.png')} // Ajusta la ruta de la imagen
          style={styles.image}
        />
      <Button
          title="Editar"
          onPress={() => console.log("Button pressed")}
          color="#8B4513" // Color del botón
         
        />
        <Text style={styles.text2}></Text>
        <Button
          title="Ver"
          onPress={() => console.log("Button pressed")}
          color="#8B4513" // Color del botón
          style={styles.button} // Estilo adicional para el botón
        />
        <Text style={styles.text2}></Text>
        <Button
          title="Eliminar"
          onPress={() => console.log("Button pressed")}
          color="#8B4513" // Color del botón
          style={styles.button} // Estilo adicional para el botón
        />
      </View>

      <StatusBar style="auto" />
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
  innerContainer: {
    flexDirection: 'row', // Alinea los elementos en la misma fila
    alignItems: 'center',
    margin: 20,

  },
  subContainer: {
    margin: 15,
    padding: 15,
    backgroundColor: 'lightblue',
    borderRadius: 10,
    alignItems: 'flex-end',
    flexDirection: 'row',
    height:300
    
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight:100
  },
  text2: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight:50
  },
  image: {
    width: 120,
    height: 120,
    position: 'absolute', // Posición absoluta
    top: 70, // Ajusta la posición vertical de la imagen
    left: 100, // Ajusta la posición horizontal de la imagen
  },
});
