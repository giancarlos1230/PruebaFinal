import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native';

const ListKey = () => {

    const [usuarios, setUsuarios] = useState([])

    const getUsuarios = async () => {
        const peticion = await fetch('https://jsonplaceholder.typicode.com/users')
        const datos = await peticion.json()
        setUsuarios(datos)
    }

    useEffect(() => { getUsuarios()}, [])

    return (
        <View style={styles.containerBase}>
            <ScrollView>
            {
                usuarios.map(lista => (
                    <View style={styles.container}>
                        <Text style={styles.text}> {lista.id}</Text>
                        <Text style={styles.text}> {lista.name}</Text>
                        <Text style={styles.text}> {lista.address.street}</Text>
                    </View>
                ))
            }

            </ScrollView>
        </View>
    )
}

export default ListKey

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


})
