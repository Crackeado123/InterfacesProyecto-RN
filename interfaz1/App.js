import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>

      <View style={styles.cn1}>
        <Text style={styles.ti}>Interfaz 1</Text>

        <View style={styles.cn2}>
          <Image
            source={require('./assets/Product_64bbed3795fcb.jpg')}
            style={styles.image}
          />
          <Text style={styles.ti2}>Interfaz 2</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ti: {
    color: 'black',
    textAlign: 'center',
    marginTop: 28
  },
  ti2: {
    color: 'black',
    marginTop: 100,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cn2: {
    width: 346,
    height: 399,
    borderColor: 'black',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    marginTop: 24,
    backgroundColor: 'violet',
  },
  cn1: {
    height: 474,
    width: 350,
    backgroundColor: 'yellow',
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderLeftWidth: 2,
    borderBottomWidth: 2
    
  },
  image: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 150,
    height: 150,
    borderRadius: 120,
    borderWidth: 2,
    borderColor: '#ff0000',
    marginTop: 50
  },
});

export default App;
