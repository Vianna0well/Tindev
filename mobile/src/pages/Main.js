import React from 'react';
import { SafeAreaView, Image, StyleSheet, View, Text } from 'react-native';

import Logo from '../assets/logo.png';
import Dislike from "../assets/dislike.png";
import Like from "../assets/like.png";

import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Main() {
    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.logo} source={Logo} />

            <View style={styles.cardsContainer}>
                <View style={[styles.card, { zIndex: 1 }]}>
                    <Image style={styles.avatar} source={{ uri: "https://avatars2.githubusercontent.com/u/41162196?v=4" }} />
                    <View style={styles.footer}>
                        <Text style={styles.name}>Thiago Viana</Text>
                        <Text numberOfLines={3} style={styles.bio}>CTO na @Rocketseat. Apaixonado pelas melhores tecnologias de desenvolvimento web e mobile.</Text>
                    </View>
                </View>
            </View>

            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button}>
                    <Image source={Dislike} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Image source={Like} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    logo: {
        marginTop: 30,
    },

    cardsContainer: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        maxHeight: 500
    },

    card: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        margin: 30,
        overflow: 'hidden',
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
    },

    avatar: {
        flex: 1,
        height: 300
    },

    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333'
    },

    bio: {
        fontSize: 14,
        color: '#999',
        marginTop: 5,
        lineHeight: 18,
    },

    buttonsContainer: {
        flexDirection: 'row',
        marginBottom: 30,
    },  

    button: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 2,
        shadowOffset: {
            width: 0,
            height: 2,
        }
    }
})
