import React, { useEffect } from  'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { useState } from 'react'

const Liquidacion = () => {
    const [nombre, setNombre] = useState ('');
    const [salario, setSalario] = useState ('');
     const [result, setResul] = useState <number>(0);
    const calcularSalario = () =>{
        const anio=12
        const total = anio * parseInt(salario)
        setResul (total);

    };

    useEffect(calcularSalario,[salario]);
    return (
        <View>
            <Text style={styles.text}>Ingrese su nombre</Text>
            <TextInput style={styles.inputs}
            onChangeText={setNombre}
            />
            <Text style={styles.text}>Ingrese su salario por mes</Text>
            <TextInput style={styles.inputs}
            onChangeText={setSalario}
            />
            <Text>{nombre} su salario anual es de:{result.toString()}</Text>

            </View>
    )
}

export default Liquidacion

const styles = StyleSheet.create({
    text:{
    marginTop:'20%'
    },

    inputs:{
        borderRadius:5,
        padding: 15,
        fontSize: 20,
        backgroundColor: 'pink',
    }

})