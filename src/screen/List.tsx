import React, { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import { ScreenContainer } from 'react-native-screens';

const List = ({ navigation }) => {

    const [usuarios, setUsuarios] = useState([
        {
            "id": 1,
            "name": "Leanne Graham",
        },
        {
            "id": 1,
            "name": "Leanne Graham",
        },
        {
            "id": 1,
            "name": "Leanne Graham",
        },
        {
            "id": 1,
            "name": "Leanne Graham",
        },
        {
            "id": 1,
            "name": "Leanne Graham",
        }

    ])

    const eliminarLista = () => {
        alert("Seguro que quieres eliminar la lista")
    }

    const editarLista = () => {
        alert("Jelouda")
    }
    return (
        <View>
            {
                usuarios.map(lista => (
                    <View style={styles.container}>
                    <Text style={styles.text} key={lista.id}>{lista.name}</Text>

                    <Button color="#B52222" title="Eliminar" onPress={eliminarLista} />

                    {/* <Button title="Editar" onPress={editarLista} /> */}

                    </View>
                ))
            }
        </View>
    )
}

export default List

const styles = StyleSheet.create({

    container: {

        width: '90%',
        left: '5%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF',
        marginBottom:10,
        paddingVertical: 10,
        paddingHorizontal: 5,
        borderRadius: 10,

        borderWidth: 3,
        borderColor: '#05786A'
    },
    text: {
        fontSize: 20,
        color: '#22B5A3'
    }
})

