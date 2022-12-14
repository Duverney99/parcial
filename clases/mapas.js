import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView from 'react-native-maps';

//IMPORTAR MAPA
export default function App(){
  return(
    <View style={styles.container}>
      <MapView style={styles.map} />
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});