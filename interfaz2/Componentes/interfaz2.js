import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

const Interfaz2 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.text}>Productos</Text>
        <Button title="Filtrar" onPress={() => console.log("Button pressed")} color="#8B4513" />
      </View>

      {/* Container 1 */}
      <View style={styles.subContainer}>
        <Image
          source={require('./Product_64b87f5d7d98e.jpg')} 
          style={styles.image}
        />
        <Button
          title="Editar"
          onPress={() => console.log("Button pressed")}
          color="#8B4513" 
          style={styles.button} 
        />
        <Text style={styles.text2}></Text>
        <Button
          title="Ver"
          onPress={() => console.log("Button pressed")}
          color="#8B4513" 
          style={styles.button} 
        />
        <Text style={styles.text2}></Text>
        <Button
          title="Eliminar"
          onPress={() => console.log("Button pressed")}
          color="#8B4513"
          style={styles.button} 
        />
      </View>

      <View style={styles.subContainer}>
        <Image
          source={require('./Product_64baa95ab8919.png')} 
          style={styles.image}
        />
        <Button
          title="Editar"
          onPress={() => console.log("Button pressed")}
          color="#8B4513" 
        />
        <Text style={styles.text2}></Text>
        <Button
          title="Ver"
          onPress={() => console.log("Button pressed")}
          color="#8B4513" 
          style={styles.button} 
        />
        <Text style={styles.text2}></Text>
        <Button
          title="Eliminar"
          onPress={() => console.log("Button pressed")}
          color="#8B4513" 
          style={styles.button} 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    marginTop: 20,
  },
  innerContainer: {
    flexDirection: 'row', 
    alignItems: 'center',
    margin: 10,
  },
  subContainer: {
    margin: 15,
    padding: 15,
    backgroundColor: 'lightblue',
    borderRadius: 10,
    alignItems: 'flex-end',
    flexDirection: 'row',
    height: 300,
    
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 100,
    
  },
  text2: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 50,
  },
  image: {
    width: 120,
    height: 120,
    position: 'absolute', 
    top: 70,
    left: 100, 
  },
  button: {
    marginRight: 10,
  },
});

export default Interfaz2;
