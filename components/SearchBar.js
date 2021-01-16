import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const SearchBar = () => {
    return (
        <TextInput 
            style={styles.placeholder}
            placeholder="Поиск"
        />
    )
}

export default SearchBar;

const styles = StyleSheet.create ({
    placeholder:{
        marginHorizontal: 15,
    },
})

