import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native'

export const HomeCard = ({
    name,
    image,
    description,
    time
}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.avatar} source={image}/>
            <View style={styles.card}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.description}>{description}</Text>
                <Text style={styles.time}>{time}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    avatar: {
        borderRadius: 30,
        width: 125,
        height: 100
    },
    card: {
        marginHorizontal: 20
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000'
    },
    description: {
        marginVertical: 15,
        color: '#FF8577',
        fontWeight: '500',
        fontSize: 12
    },
    time: {
        color: '#B8B8B8',
        fontSize: 12,
        fontWeight: '500'
    }
})