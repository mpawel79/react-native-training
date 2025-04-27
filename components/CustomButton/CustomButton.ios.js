import React from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';

const CustomButton = ({onPress, text}) => {
    return (
        <Pressable onPress={onPress} 
        style={{
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            borderRadius: 10,
            backgroundColor: 'lightblue',
            borderRadius: 5,
            padding: 10,
        }}  
        >
            <Text style={{color: 'white', fontSize: 16}}>{text}</Text>
        </Pressable>
    )
}

export default CustomButton;

