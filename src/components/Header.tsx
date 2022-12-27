import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import UserImg from '../assets/perfil.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';


export function Header() {
    return (
        <View style={styles.container}>
            <View>
                <Text
                    style={styles.greeting}>
                    Olá,
                </Text>
                <Text style={styles.userName}>Yogo</Text>
            </View>
            <Image source={UserImg} style={styles.profilePhoto} />
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        marginTop: getStatusBarHeight()
    },
    greeting: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.text,
    },
    userName: {
        fontSize: 32,
        fontFamily: fonts.heading,
        color: colors.heading,
        lineHeight: 40
    },
    profilePhoto: {
        width: 70,
        height: 70,
        borderRadius: 40
    },
})