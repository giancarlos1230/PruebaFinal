import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native';

interface Props {
    title: string;
    placeholder: string;
    onChangeText: (text: string) => void;
}

const FormInput = ({ title, placeholder, onChangeText }: Props) => {
    return (
        <View>
            <Text style={styles.text}>{title}</Text>
            <TextInput
                style={styles.inputs}
                placeholder={placeholder}
                onChangeText={text => onChangeText(text)}
            />
        </View>
    )
}

export default FormInput

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

})
