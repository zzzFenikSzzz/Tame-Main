import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

import MainTabScreen from './screens/MainTabScreen';
import SupportScreen from './screens/SupportScreen';
import SettingScreen from './screens/SettingScreen';

import { AuthContext } from './components/context'

import RootStackScreen from "./screens/RootStackScreen";

import { DrawerContent } from './screens/DrawerContent'
import { useEffect } from 'react';


const Drawer = createDrawerNavigator();

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  

  const authContext = React.useMemo(() => ({
    signIn: () => {
      setUserToken('fdsf');
      setIsLoading(false)
    },
    signOut: () => {
      setUserToken(null);
      setIsLoading(false)
    },
    signUp: () => {
      setUserToken('fdsf');
      setIsLoading(false)
    },
  }), []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000)
  }, [])

  if( isLoading ) {
    return(
      <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    )
  }
  return(
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        { userToken != null ? (
          <Drawer.Navigator drawerContent={props => <DrawerContent {... props} />}>
            <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
            <Drawer.Screen name="SupportScreen" component={SupportScreen} />
            <Drawer.Screen name="SettingScreen" component={SettingScreen} />
          </Drawer.Navigator>
        )
      :
        <RootStackScreen />
    }       
      </NavigationContainer>
    </AuthContext.Provider>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
