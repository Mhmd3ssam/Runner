import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View, } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import HomeScreen from './screens/Home';
import HistoryScreen from './screens/History';



export const App = () => {
  const Tab = createMaterialTopTabNavigator();


  return (
    <NavigationContainer>
      <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="History" component={HistoryScreen} />
        </Tab.Navigator>
    </NavigationContainer>

  );
};



