import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';

const NicaAtributos = () => {

    const [producto, setProducto] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [precio, setPrecio] = useState('')
    const [descuento, setDescuento] = useState('')
    const [resultado, setResultado] = useState(0)

    const CalcularVenta = () => {

        let calculo = parseFloat(cantidad) * parseFloat(precio)
        let caldescuento = calculo * parseFloat(descuento) /100
        let result = calculo - caldescuento
        setResultado(result)
    }

    useEffect(CalcularVenta, [descuento, cantidad, precio] )

    return (
        <ScrollView>
        <View style={styles.container}>
            <Text style={styles.text}>Producto</Text>
            <TextInput
                style={styles.inputs}
                placeholder={'Ingresar producto'}
                onChangeText={setProducto}
            />

            <Text style={styles.text}> cantidad </Text>
            <TextInput
                style={styles.inputs}
                placeholder={'Ingresar cantidad'}
                onChangeText={setCantidad}
            />

            <Text style={styles.text}> precio </Text>
            <TextInput
                style={styles.inputs}
                placeholder={'Ingresar precio'}
                onChangeText={setPrecio}
            />

            <Text style={styles.text}> Descuento </Text>
            <TextInput
                style={styles.inputs}
                placeholder={'Descuento'}
                onChangeText={setDescuento}
            />

            <Text style={styles.text}>La compra de {producto} es de: {resultado}</Text>
            <TouchableOpacity
                onPress={CalcularVenta}
                style={styles.botonReset}
            >
                <Text style={styles.textbotonReset}>Calcular</Text>
            </TouchableOpacity>
            
        </View>
        </ScrollView>
    )
}

export default NicaAtributos

const styles = StyleSheet.create({

    inputs: {
        backgroundColor: '#F2F8FB',
        borderRadius: 8,
        padding: 10,
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        color: '#004445',
        marginTop: 5
    },
    text: {
        fontSize: 30,
        color: '#ffff',
        marginTop: 5
    },

    container: {
        flex: 1,
        backgroundColor: '#D17101',
        width: '95%',
        marginLeft: 10
    },

    botonReset: {
        backgroundColor: '#00C1AC',
        borderRadius: 8,
        width: '100%',
        paddingVertical: 7,
        marginTop: 350
    },

    textbotonReset: {
        color: '#00514E',
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
    }
})