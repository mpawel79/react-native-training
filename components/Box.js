import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Box({ children, style }) {
    return (
        <View style={[styles.box, style]}>
            <Text style={styles.text}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
        // width: "100%",
        // height: 100,
        borderRadius: 10,
        margin: 2,

    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',

    },
})