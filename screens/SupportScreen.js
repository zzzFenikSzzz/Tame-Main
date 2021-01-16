import React from 'react';
import { StyleSheet, View, Button, Text, TouchableOpacity } from 'react-native';


const SupportScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Support</Text>
            <Button 
                title="click here"
                onPress={() => alert('Clicked ')}
            />
        </View>
    )
};

export default SupportScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})