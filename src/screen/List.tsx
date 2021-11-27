import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

const List = ({navigation}) => {
    return (
        <View>
            <Text>Hola bb UWU</Text>
            <Button  title="Regresar" onPress={() => navigation.goBack()} />
            <Button  title="Volver" onPress={() => navigation.goBack()} />

        </View>
    )
}

export default List

const styles = StyleSheet.create({})