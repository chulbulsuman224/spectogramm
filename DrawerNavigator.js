import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  {createDrawerNavigator} from '@react-navigation/drawer';
import TabNavigator from "./TabNavigator"
import Profile  from '../Screens/Profile';
import StackNavigator from './StackNavigator';

const Drawer=createDrawerNavigator()

const DrawerNavigator=()=>{
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={StackNavigator}/>
            <Drawer.Screen name="Profile" component={Profile}/>
        </Drawer.Navigator>
    )
}
export default DrawerNavigator;



