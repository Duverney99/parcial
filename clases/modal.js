import React from 'react';
import { StyleSheet, Text, View, Dimensions, Modal } from 'react-native';
import MapView from 'react-native-maps';

//IMPORTAR Modal
export default function App(){
  return(
    <View style={styles.container}>
      <MapView style={styles.map} />
      <Modal 
        animationType='slide'
        transparent ={true}
        visible = {true}
      >
      <View style={styles.center}>
       <View style={styles.modalView}>
        <Text>A llorar a lo Olivos</Text>
       </View>
      </View>
        </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  center:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView:{
    backgroundColor: '#fff',
    borderRadius: 4,
    padding: 20,
    shadowColor: '#000',
    shadowOffset:{
      width: 0,
      height: 3,
    }
  },
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