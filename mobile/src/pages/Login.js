import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, AsyncStorage, Platform,Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

import Logo from '../assets/logo.png';
import Api from '../services/api'

export default function Login({ navigation }) {
    const [user, setUser] = useState('');

    useEffect(() => {
        AsyncStorage.getItem('user').then(user => {
            if( user ){
                navigation.navigate('Main', { user })
            }
        })
    }, [])

    async function handleLogin() {
        const response = await Api.post('/devs', { username: user })

        const { _id } = response.data
        await AsyncStorage.setItem('user', _id)

        navigation.navigate('Main', { user: _id })
    }

    return (
        <KeyboardAvoidingView 
            style={styles.container}
            behavior='padding'
            enabled={Platform.OS === 'ios'}>
            <Image source={Logo} />

            <TextInput
            autoCapitalize='none'
            autoCorrect={false}
            placeholder='Digite seu usúario do Github'
            placeholderTextColor='#999'
            style={styles.input}
            value={user}
            onChangeText={setUser}
            />

            <TouchableOpacity onPress={handleLogin} style={styles.button}>
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