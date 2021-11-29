import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Menu = ({navigation}) => {
    return (
        <View style={styles.container}>
                
            <TouchableOpacity
                onPress={() => navigation.navigate('Listkey')}
                style={styles.botonReset}
            >
                <Text style={styles.textbotonReset}>Listkey</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate('Lista')}
                style={styles.botonReset}
            >
                <Text style={styles.textbotonReset}>List</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate('Atributo')}
                style={styles.botonReset}
            >
                <Text style={styles.textbotonReset}>NicaAtributos</Text>
            </TouchableOpacity>


            {/* <TouchableOpacity
                onPress={() => navigation.navigate('Home')}
                style={styles.botonReset}
                
            >
                <Text style={styles.textbotonReset}>Volver</Text>
            </TouchableOpacity> */}

        </View>
    )
}

export default Menu

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 1,
      },

      botonReset: {
        backgroundColor: 'greenyellow',
        borderRadius: 10,
        width: '50%',
        paddingVertical: 5,
        marginTop: 10
    },
    textbotonReset: {
        color: '#00514E',
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center'
    }

})

