import React from 'react';
import {View, 
        Text, 
        StyleSheet,
        TouchableOpacity,
        ScrollView
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import {CommonActions} from '@react-navigation/native';

import {Messages} from '../components/Messages';
import Demo from '../data/demo';

const ChatScreen = props => {
  console.warn(props)
  return (
      <ScrollView style={styles.container}>
          <View style={styles.menu}>
              <Text style={styles.menu1}>
                  Сообщения
              </Text>
          </View>
          <FlatList 
              data={ Demo }
              keyExtractor={(item, index) => item.id}
              contentContainerStyle = {styles.message}
              renderItem={
                  ({item}) => (
                          <TouchableOpacity onPress={() => navigation.dispatch(
                              CommonActions.navigate({
                                  name: 'Dialog',
                              })
                          )} >
                                  <Messages 
                                      image={item.image}
                                      name={item.name}
                                      message={item.message}
                                  />
                          </TouchableOpacity>    
                  )
              }
          />
      </ScrollView>
  )
}

export default ChatScreen;

const styles = StyleSheet.create({
  menu:{
      paddingVertical: 30,
      paddingLeft: 20,
      borderBottomWidth: 0.5,
      borderBottomColor: '#C4C4C4',
      
  },
  menu1:{
      color: '#000',
      fontWeight: 'normal',
      fontSize: 24,
  },
  message: {
      
      
  },
  container: {
      backgroundColor: '#fff'
  }
})