import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack'

import { MaterialCommunityIcons } from '@expo/vector-icons/MaterialCommunityIcons'
import Icon from '@expo/vector-icons/Ionicons'

import HomeScreen from './HomeScreen';
import ChatScreen from './ChatScreen';
import ProfileScreen from './ProfileScreen'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const HomeStack = createStackNavigator();
const ChatStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () =>{
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor='#fff'
        >
            <Tab.Screen 
                name="Chat"
                component={ChatStackScreen}
                options={{
                    tabBarLabel: '',
                    tabBarColor: '#FF8577',
                    tabBarIcon: ({ color }) => (
                        <Icon name="ios-chatbox" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen 
                name="Home"
                component={HomeStackScreen}
                options={{
                    tabBarLabel: '',
                    tabBarColor: '#FF8577',
                    tabBarIcon: ({ color }) => (
                        <Icon name="ios-home" color={color} size={26} />
                    )
                }}
            />
            <Tab.Screen 
                name="Profile"
                component={ProfileStackScreen}
                options={{
                    tabBarLabel: '',
                    tabBarColor: '#FF8577',
                    tabBarIcon: ({ color }) => (
                        <Icon name="ios-person" color={color} size={26} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default MainTabScreen;


const HomeStackScreen = ({navigation}) => {
    return(
      <HomeStack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#FF8577',
        },
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}>
        <HomeStack.Screen name="Home" component={HomeScreen} options={{
          title: 'Main',
          headerLeft: () => (
            <Icon.Button name="ios-menu" size={25}
            backgroundColor='#FF8577' onPress={() => navigation.
            openDrawer()}/>
          )
        }}/>
      </HomeStack.Navigator>
    )
  };
  
  const ChatStackScreen = ({navigation}) => {
    return(
      <ChatStack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#FF8577',
        },
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}>
        <ChatStack.Screen name="Chat" component={ChatScreen} options={{
          headerLeft: () => (
            <Icon.Button name="ios-menu" size={25}
            backgroundColor='#FF8577' onPress={() => navigation.
            openDrawer()}/>
          )
        }}/>
      </ChatStack.Navigator>
    )
  };

  const ProfileStackScreen = ({navigation}) => {
    return(
      <ProfileStack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#FF8577',
        },
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}>
        <ProfileStack.Screen name="Profile" component={ProfileScreen} options={{
          headerLeft: () => (
            <Icon.Button name="ios-menu" size={25}
            backgroundColor='#FF8577' onPress={() => navigation.
            openDrawer()}/>
          )
        }}/>
      </ProfileStack.Navigator>
    )
  };