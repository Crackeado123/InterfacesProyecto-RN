
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const ApartadoIoT = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.text3}>Apartado IoT</Text>
      </View>

      {/* Container 1 */}
      <View style={styles.subContainer}>
        <Text style={styles.text}>Nombre del Prototipo</Text>
        <Image
          source={require('./pro5.jpg')}
          style={styles.image}
        />
        <Text style={styles.text}>Estado: Activo</Text>

        {/* Contenedor para los botones */}
        <View style={styles.buttonContainer}>
          <Button
            title="Activar"
            onPress={() => console.log("Activar presionado")}
            color="#8B4513"
            style={styles.button}
          />
          <Text style={styles.text2}></Text>
          <Button
            title="Desactivar"
            onPress={() => console.log("Desactivar presionado")}
            color="#8B4513"
            style={styles.button}
          />
        </View>
        <Text style={styles.text}>Ver más:</Text>

        <StatusBar style="auto" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow',
        alignItems: 'left',
        marginTop: 10,
      },
      innerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 20,
      },
      subContainer: {
        padding: 15,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'center',
        height: 250,
        width: 360,
        flex: 1,
      },
      text: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 30,
      },
      text2: {
        fontSize: 20,
        fontWeight: 'bold',
        marginRight:50
      },
      text3: {
        fontSize: 20,
        fontWeight: 'bold',
      },
      image: {
        width: 200,
        height: 200,
        margin: 50,
        position: 'center',
      },
      buttonContainer: {
        marginTop: 30, // Ajusta la posición vertical del contenedor de botones
        flexDirection: 'row',
        
      },
      button: {
        marginRight: 10,
      },
});

export default ApartadoIoT;
