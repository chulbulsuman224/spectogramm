import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './navigations/DrawerNavigator';
import StackNavigator from '@react-navigation/stack'

export default function App() {
  return (
   <NavigationContainer>
     <DrawerNavigator/>
   </NavigationContainer>
  );
}
