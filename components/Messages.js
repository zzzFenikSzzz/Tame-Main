import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';


export const Messages = ({
    name,
    message,
    image,
    time
}) => { 
    
    return(
        <View style={styles.messages}>
            <View style={styles.image}>
                <Image 
                    source={image}
                    style={styles.avatar}
                />
            </View>

            <View style={styles.text}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.send}>{message}</Text>
            </View>

            <View style={styles.number}>
                <Text style={styles.number1}>3</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    messages:{
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderBottomWidth: 0.5,
        borderBottomColor: '#C4C4C4'
    },
    image:{

    },
    avatar:{
        width: 30,
        height: 30,
        borderRadius: 30
    },
    text: {
        flexDirection: 'column',
        maxWidth: 300,
        maxHeight: 56,
        
    }, 
    name:{
        color: '#FF8577',
        fontWeight:'500',
        fontSize: 14,
        paddingBottom: 5
    },
    send:{
        fontWeight: '500',
        fontSize: 14,
        color: '#000',
        flexWrap: 'wrap',

    }
})