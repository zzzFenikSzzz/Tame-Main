import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

export const ProfileCard = ({
    image,
    name,
    time
}) => {

    return(
        <View style={styles.infocard}>
            <Image style={styles.avatar} source={image} />
            <View style={styles.info}>
                <View>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.inform}>{time}</Text>
                </View>
                <TouchableOpacity style={styles.send}>
                    <Image 
                        source={require('../images/dialogIcon.png')}
                        style={styles.dialogIcon}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    infocard:{
        flex: 1,
        
    },
    info: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    avatar: {
        width: 75,
        height: 75,
        borderRadius: 50
    }, 
    dialogIcon: {

    },
    name: {
        fontWeight: 'bold',
        fontSize: 24,
        color: '#000',
        paddingTop: 15
    },
    inform: {
        fontWeight: '500',
        fontSize: 14,
        color: '#B8B8B8'
    }
})