import React,{useState} from 'react'
import { Button, StyleSheet, Text, View, TextInput } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';


const HomeNica = ( {navigation }) => {

    const [user, setUser] = useState('')
    const [password, setPasword] = useState('')

    const ValUser = () =>{
        if (user==='Giancarlos' && password==='123'){
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
            <View style={styles.button}>
            <Button
            title="iniciar"
            onPress={ValUser}
            />

            <Button
            title="Liquidacion"
            onPress={Liqui}
            />
         </View>

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
        fontSize:26,
        color:'#05786A'
    },
    button:{
        
    },
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:'50%'
      },

})