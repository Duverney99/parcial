import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';
import MapView from 'react-native-maps';
import Map from './components/Map';
import Modal from './components/Modal';
import Panel from './components/Panel';
import Input from './components/Input';
import Lista from './components/Lista';
import Index from './components/index';
export default function App() {

  const [puntos, setPuntos] = useState([])
  const [puntoTemp, setPuntoTemp] = useState({})
  const [nombre, setNombre] = useState('')
  const [visibilityFilter, setVisibilityFilter ] = useState('new_punto')
  const [visibility, setVisibility ] = useState(false)
  const [pointsFilter, setPointstFilter ] = useState(true)

  const togglePointsFilter = () => setPointstFilter(!pointsFilter)

  const handleLongPress = ({ nativeEvent }) => {
    setVisibilityFilter('new_punto')
    setPuntoTemp(nativeEvent.coordinate)
    setVisibility(true)
  }
  
  const handleChangeText = text => {
    setNombre(text)
  }

  const handleSubmit = () => {
    const newPunto = { coordinate: puntoTemp, name: nombre};
    setPuntos(puntos.concat(newPunto))
    setVisibility(false)
    setNombre('')
  }

  const handleUnsubmit = () => {
    setVisibility(false)
  }

  const handleLista = () => {
    setVisibilityFilter('all_puntos')
    setVisibility(true)
  }

  return (
    <View style={styles.container}>
      <Map onLongPress={handleLongPress} puntos={puntos} pointsFilter={pointsFilter}/>
      <Panel onPressLeft={handleLista} textLeft='Lista' togglePointsFilter={togglePointsFilter}/>
      <Modal visibility={visibility}>
        {visibilityFilter === 'new_punto'
        ?
        <View style={styles.form}>
          <Input title='Nombre' placeholder='Nombre del punto' onChangeText={handleChangeText}/>
          <Button title='Aceptar' onPress={handleSubmit} />  
          <Button title='Cancelar' onPress={handleUnsubmit} />
        </View>
        : <Lista puntos={puntos} closeModal={() => setVisibility(false) } />
      }
        
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  form:{
    padding: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});