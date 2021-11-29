import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';

const List = ({ navigation }) => {

    const [tarea, setTarea] = useState<string>('')
    const [tareas, setTareas] = useState<string[]>([])


    const crearTarea = () => {
        setTareas([...tareas, tarea])
    }

    const getTareas = () => {
        setTareas([...tareas,])
    }


    const eliminarTarea = (id: number) => {
        tareas.splice(id, 1)
        getTareas()
    }

    return (
        <View style={styles.containerBase}>
            <ScrollView>

                <View style={styles.container}>
                    <TextInput
                        style={styles.inputs}
                        onChangeText={setTarea}
                    />
                    <Button
                        color="green"
                        title="Agregar"
                        onPress={crearTarea} />
                </View>
                {
                    tareas.map((lista, index) => (
                        <View style={styles.container} key={index} >
                            <Text style={styles.text}> {lista}</Text>
                            <Button
                                color="red"
                                title="Eliminar"
                                onPress={() => eliminarTarea(index)} />

                        </View>
                    ))
                }
                {/* <View style={{ marginHorizontal: '40%', paddingVertical: 30, }}
            >
                <Button
                    title="Ver Datos"
                    onPress={getUser} />
            </View> */}
            </ScrollView>
        </View>
    )
}

export default List

const styles = StyleSheet.create({

    container: {
        width: '95%',
        backgroundColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        paddingVertical: 10,
        paddingHorizontal: 8,
        borderRadius: 10,
        marginLeft: 10,
        borderWidth: 2,
        borderColor: 'white',
        marginTop: 10,

    },
    text: {
        fontSize: 20,
        color: 'yellow'
    },
    containerBase: {
        flex: 1,
        backgroundColor: 'gray',

    },
    inputs: {
        backgroundColor: 'pink',
        borderRadius: 3,
        padding: 5,
        fontSize: 20,
        color: 'black',
        width: '80%'

    }

})