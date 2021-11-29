import React, { useState } from 'react'
import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const logo = {
    uri: "https://yt3.ggpht.com/ytc/AKedOLSYvgmOToFUEK_D_0oNLY7E83b4-bqzLzZXev_70Q=s900-c-k-c0x00ffffff-no-rj",
};

const HomeNica = ({ navigation }) => {
    const [user, setUser] = useState('')
    const [password, setPasword] = useState('')

    const ValUser = () => {
        if (user === 'Gianca' && password === '123') {
            navigation.navigate('Menu')
        }
        else {
            alert('Datos erroneos')
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.logoheader}>
                <Image style={styles.logo} source={logo} />
            </View>
            <ScrollView>
                <Text>Usuario</Text>
                <TextInput
                    style={styles.inputs}
                    placeholder={'Ingrese su usuario'}
                    onChangeText={setUser}

                />
                <Text>Contraseña</Text>
                <TextInput
                    style={styles.inputs}
                    placeholder={'Contraseña'}
                    onChangeText={setPasword}
                />

                <TouchableOpacity
                    onPress={ValUser}
                    style={styles.botonReset}
                >
                    <Text style={styles.textbotonReset}>Iniciar</Text>
                </TouchableOpacity>
            </ScrollView>
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

      botonReset: {
        marginHorizontal: '35%',
        backgroundColor: '#00C1AC',
        borderRadius: 30,
        width: '30%',
        paddingVertical: 7,
        marginTop: 20
    },

    textbotonReset: {
        color: '#00514E',
        fontWeight: 'bold',
        fontSize: 35,
        textAlign: 'center'
    },


    container: {
        flex: 1,
        justifyContent: "center",
        marginHorizontal: 20,
        marginTop: "20%",
    },


    logo:{ 
        borderRadius: 100,
        width: 200,
        height: 200, 
      },

        logoheader:{
        justifyContent: 'center',
        alignItems: 'center',
      },
});