import React,{useState} from 'react'
import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';


const HomeNica = ( {navigation }) => {

    const [user, setUser] = useState('')
    const [password, setPasword] = useState('')

    const ValUser = () =>{
        if (user==='Gianca' && password==='123'){
            navigation.navigate('Lista')
        }
        else{
            alert('Datos erroneos')
        }
        
    }

    const Liqui = () => {
        navigation.navigate('Liquidacion')

    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Usuario</Text>
            <TextInput
            style={styles.inputs}
            placeholder={'Ingrese su usuario'}
            onChangeText={setUser}

            />
            <Text style={styles.text}>Contraseña</Text>
            <TextInput
            style={styles.inputs}
            placeholder={'Contraseña'}
            onChangeText={setPasword}
            />


            {/* <Button
            title="iniciar"
            onPress={ValUser}
            /> */}
            <TouchableOpacity
                onPress={ValUser}
                style={styles.botonReset}
            >
                <Text style={styles.textbotonReset}>Iniciar</Text>
            </TouchableOpacity>

            <Button
            title="Liquidacion"
            onPress={Liqui}
            />
         </View>

    )

}

export default HomeNica

const styles = StyleSheet.create({
    inputs: {
        backgroundColor: '#F2F8FB',
        borderRadius: 8,
        padding: 10,
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        color: '#004445',
        
    },
    text:{
        fontSize:30,
        color:'#05786A'
    },
   
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:'50%'
      },

      botonReset: {
        backgroundColor: '#00C1AC',
        borderRadius: 8,
        width: '30%',
        paddingVertical: 7,
        marginTop: 1
    },
    textbotonReset: {
        color: '#00514E',
        fontWeight: 'bold',
        fontSize: 35,
        textAlign: 'center'
    }

})