import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native'

export const AnimalCard = ({
    name,
    description,
    image,
    time
}) => {

    return (
        <View style={styles.animalCard}>
            <Image style={styles.avatar} source={image} />
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.info}>{description}</Text>
            <Text style={styles.time}>{time}</Text>
        </View>
    )
}

const styles = StyleSheet.create ({
    animalCard: {
        flex: 1,
        alignItems: 'flex-start',
        flexDirection:'column',
        width: 160,
        backgroundColor: '#fff',
        marginVertical: 20,
        borderRadius: 10,
    },
    avatar:{
        width: 160,
        height: 190,
        borderRadius: 10,
    },
    name:{
        paddingTop: 10,
        fontWeight: 'bold',
        fontSize: 24,
        color: '#000'
    },
    info: {
        paddingTop: 5,
        fontSize: 14,
        fontWeight: 'bold',
        color: '#FF8577'
    },
    time: {
        paddingTop: 20,
        fontWeight: '500',
        fontSize: 12,
        color: '#B8B8B8'
    },
})