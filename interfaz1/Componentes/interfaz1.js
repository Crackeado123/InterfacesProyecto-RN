import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Interfaz1 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cn1}>
        <Text style={styles.ti}>TROPICAL WORLD</Text>

        <View style={styles.cn2}>
          <Image
            source={require('./Product_64bbed3795fcb.jpg')}
            style={styles.image}
          />
          <Text style={styles.ti2}>CAJETA DE MANGO</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ti: {
    color: 'black',
    textAlign: 'center',
    marginTop: 28,
    fontSize:25

  },
  ti2: {
    color: 'black',
    marginTop: 200,
    textAlign: 'center',
    fontSize:25
  },
  container: {
    marginTop:50,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent:'center'
  },
  cn2: {
    width: 346,
    height: 650,
    borderColor: 'black',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    marginTop: 24,
    backgroundColor: 'violet',
  },
  cn1: {
    height: 740,
    width: 350,
    backgroundColor: 'yellow',
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderLeftWidth: 2,
    borderBottomWidth: 2,
  },
  image: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 200,
    height: 200,
    borderRadius: 120,
    borderWidth: 2,
    borderColor: '#ff0000',
    marginTop: 50
  },
});

export default Interfaz1;
