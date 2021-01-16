import React from 'react';
import { StyleSheet, View, Button, Text, TouchableOpacity } from 'react-native';


const SettingScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Setting</Text>
            <Button 
                title="click here"
                onPress={() => alert('Clicked ')}
            />
        </View>
    )
};

export default SettingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})