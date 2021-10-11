import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Screen/Home';
import { Entypo, Ionicons, MaterialIcons  } from '@expo/vector-icons'; 
import Detail from './Screen/Detail';
import Setting from './Screen/Setting';


const Tab = createBottomTabNavigator();
const App= () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions = {({route}) => 
      ({tabBarIcon:({focused}) => {
        if(route.name === "Home")
        {
        return (
        <Entypo name="home" size={24} color={focused? "blue":"black"} />
        );
        }
        else if(route.name === "Setting")
        {
        return(
        <Ionicons name="settings" size={24} color={focused? "blue":"black"} />
        );
        }
        else 
        {
          return(
        <MaterialIcons  name="details" size={24} color={focused? "blue":"black"} />
        );
        }
      }})}
      >
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

