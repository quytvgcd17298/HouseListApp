import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Screen/Home';
import Detail from './Screen/Detail';
import Setting from './Screen/Setting';


const Tab = createBottomTabNavigator();
const App= () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
        name = "Home"
        component = {Home}
        ></Tab.Screen>
        <Tab.Screen
        name = "Detail"
        component = {Detail}
        ></Tab.Screen>
        <Tab.Screen
        name = "Setting"
        component = {Setting}
        ></Tab.Screen>
    </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;

