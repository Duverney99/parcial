import React from 'react';
import { StyleSheet, Button, View } from 'react-native';

export default ({onPressLeft, textLeft, togglePointsFilter}) => {
    return (
        <View style={styles.panel}>
            <Button onPress={onPressLeft} title={textLeft} />
            <Button title='Mostrar/ocultar' onPress={togglePointsFilter} />
        </View>
    )
}

const styles = StyleSheet.create({
    panel: {
        flex: 1,
        flexDirection: 'row',    
        justifyContent: 'center',
        borderRadius: 4,
        alignItems: 'center',
    },
})