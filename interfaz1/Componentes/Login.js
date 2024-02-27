import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";

const Inicio = () => {
  // Función auxiliar para la navegación
  const navigateTo = (screen) => {
    // Implementa tu lógica de navegación aquí
    console.log(`Navegando a ${screen}`);
  };

  return (
    <View style={styles.container}>
      
        <Image source={require("../assets/logo.png")} style={styles.logo} />
        <Text style={styles.loginTitle}>Log-IN</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Ingrese el nombre del usuario"
            placeholderTextColor="#4a4646"
          />
          <TextInput
            style={styles.input}
            placeholder="Ingrese su contraseña"
            secureTextEntry
            placeholderTextColor="#4a4646"
          />
          <TextInput
            style={styles.input}
            placeholder="Ingrese su correo electronico"
            
            placeholderTextColor="#4a4646"
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Acceder</Text>
          </TouchableOpacity>
        </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#d79527", // Color de fondo amarillo claro de la imagen
  },
  loginContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#d79527", // Color de fondo amarillo claro de la imagen
  },
  logo: {
    width: 200,  // Tamaño deseado para la imagen
    height: 200, // Tamaño deseado para la imagen
    resizeMode: "contain",
    marginBottom: 20,
    borderRadius: 100,
  },
  loginTitle: {
    fontSize: 40,
    color: "#d3282f",
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    backgroundColor: "#d79527",
    borderRadius: 5,
    padding: 20,
    shadowColor: "#FFF",
    shadowOffset: { width: 7, height: 13 },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    width: "90%",
  },
  input: {
    backgroundColor: "#FFF",
    color: "#4a4646",
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    fontSize: 18,
  },
  button: {
    backgroundColor: "#935351",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
  },
});

export default Inicio;
