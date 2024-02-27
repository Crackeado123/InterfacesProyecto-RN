import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const Inicio = () => {
  // Placeholder para la función de navegación
  const navigateTo = (screen) => {
    // Aquí iría la lógica de navegación, por ejemplo utilizando React Navigation
    console.log(`Navigating to ${screen}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Interfaz</Text>
      </View>
      
      <ScrollView style={styles.scrollView}>
        <View style={styles.mobileScreen}>
          <View style={styles.todo}>
            <Image source={require("../assets/interfaz1.png")} style={styles.image} />
            <Text style={styles.loginTitle}>Interfaz 2</Text>
          </View>
          
        </View>
        <View style={styles.mobileScreen}>
          <View style={styles.todo}>
            <Image source={require("../assets/interfaz1.png")} style={styles.image} />
            <Text style={styles.loginTitle}>Interfaz 3</Text>
          </View>
          
        </View>
        
      </ScrollView>
      
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c56d16e0",
  },
  scrollView: {
    backgroundColor: "transparent",
  },
  mobileScreen: {
    marginHorizontal: 2,
    backgroundColor: "#800080",
    borderRadius: 40,
    marginBottom: 20,
    overflow: "hidden",
    
  },
  loginTitle: {
    fontSize: 40,
    color: "#eee",
    fontWeight: "bold",
    marginBottom: 20,
  },
  header: {
    backgroundColor: "#c56d16e0",
    alignItems: "center",
    height: 100,
  },
  headerText: {
    color: "#fff",
    fontSize: 22,
    padding: 30,
    borderColor: "#fff",
  },
  navBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "rgb(37, 40, 37)",
    paddingVertical: 20,
  },
  navText: {
    color: "#fff",
    fontSize: 16,
  },
  todo: {
    padding: 20,
    height: 540,
    marginTop: 40,
    alignItems: "center",
  },
  box: {
    backgroundColor: "#eee",
    padding: 20,
  },
  boxTitle: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10,
  },
  boxText: {
    fontSize: 14,
  },
  footer: {
    backgroundColor: "#4a4646",
    padding: 10,
    alignItems: "center",
  },
  footerText: {
    color: "#fff",
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: "cover",
    marginBottom: 20,
    borderRadius: 150,
  },
});

export default Inicio;
