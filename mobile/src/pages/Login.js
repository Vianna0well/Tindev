import React from 'react';
import { KeyboardAvoidingView, Platform,Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

import Logo from '../assets/logo.png';

export default function Login() {
    return (
        <KeyboardAvoidingView 
            style={styles.container}
            behavior='padding'
            enabled={Platform.OS === 'ios'}
        >
            <Image source={Logo} />

            <TextInput
            autoCapitalize='none'
            autoCorrect={false}
            placeholder='Digite seu usúario do Github'
            placeholderTextColor='#999'
            style={styles.input}
            />

            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>Entrar</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        height: 50,
        alignSelf: 'stretch',
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#ddd',
        marginTop: 20,
        paddingHorizontal: 15
    },
    button: {
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#DF4723',
        borderRadius: 4,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16
    },
})