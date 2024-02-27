import React, { useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";

const Producto = () => {
  const [selectedCategory, setSelectedCategory] = useState();
  const [pickerPosition, setPickerPosition] = useState("flex-end");

  const navigateTo = (screen) => {
    console.log(`Navigating to ${screen}`);
  };

  const handlePickerChange = (itemValue, itemIndex) => {
    setSelectedCategory(itemValue);
    setPickerPosition(itemValue === "none" ? "flex-end" : "flex-start");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Filtrar</Text>
        <View
          style={[
            styles.pickerContainer,
            { justifyContent: pickerPosition },
          ]}
        >
          <Picker
            selectedValue={selectedCategory}
            onValueChange={handlePickerChange}
            style={styles.picker}
          >
            <Picker.Item label="Selecciona la categoría" value="none" />
            <Picker.Item label="Categoría 1" value="cat1" />
            <Picker.Item label="Categoría 2" value="cat2" />
          </Picker>
        </View>
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.mobileScreen}>
          <View style={styles.todo}>
            <Image
              source={require("../assets/interfaz1.png")}
              style={styles.image}
            />
            <View style={{ marginLeft: 2 }}>
              <Text style={styles.loginTitle}>Cajeta de mango nayarit</Text>
            </View>
          </View>
        </View>
        <View style={styles.mobileScreen}>
          <View style={styles.todo}>
            <Image
              source={require("../assets/interfaz2.jpg")}
              style={styles.image}
            />
            <View style={{ marginLeft: 2 }}>
              <Text style={styles.loginTitle}>Cajeta de mango nayarit</Text>
            </View>
          </View>
        </View>
        <View style={styles.mobileScreen}>
          <View style={styles.todo}>
            <Image
              source={require("../assets/interfaz3.jpg")}
              style={styles.image}
            />
            <View style={{ marginLeft: 2 }}>
              <Text style={styles.loginTitle}>Cajeta de mango nayarit</Text>
            </View>
          </View>
        </View>
        <View style={styles.mobileScreen}>
          <View style={styles.todo}>
            <Image
              source={require("../assets/interfaz4.jpg")}
              style={styles.image}
            />
            <View style={{ marginLeft: 2 }}>
              <Text style={styles.loginTitle}>Cajeta de mango nayarit</Text>
            </View>
          </View>
        </View>
        <View style={styles.mobileScreen}>
          <View style={styles.todo}>
            <Image
              source={require("../assets/interfaz5.jpg")}
              style={styles.image}
            />
            <View style={{ marginLeft: 2 }}>
              <Text style={styles.loginTitle}>Cajeta de mango nayarit</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(5, 7, 12, 0.75)",
  },
  scrollView: {
    backgroundColor: "transparent",
  },
  mobileScreen: {
    marginHorizontal: 2,
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
  },
  header: {
    backgroundColor: "#c56d16e0",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 150, // Ajusta la altura del encabezado según sea necesario
  },
  headerText: {
    color: "#fff",
    fontSize: 22,
    padding: 10,
    borderColor: "#fff",
  },
  pickerContainer: {
    flexDirection: "column",
    alignItems: "center",
    width: "80%",
  },
  picker: {
    height: 50,
    width: "100%",
    backgroundColor: "#fff", // Cambia el color de fondo del Picker
    borderRadius: 5, // Añade bordes redondeados
    paddingHorizontal: 10, // Añade relleno horizontal
    marginBottom: 10, // Ajusta el margen inferior del Picker
  },
  todo: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    height: 150,
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
    width: 100,
    height: 100,
    resizeMode: "cover",
  },
  loginTitle: {
    fontSize: 16,
  },
});

export default Producto;
