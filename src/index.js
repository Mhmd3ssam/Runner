import React from 'react';
import { Text, View, } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import HomeScreen from './screens/Home';
import HistoryScreen from './screens/History';



export const App = () => {
  const Tab = createMaterialTopTabNavigator();


  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarLabelStyle: { 
          fontWeight:"bold",
          color:"#040404"
        },
        tabBarStyle: { backgroundColor: 'powderblue' },
      }}>
        <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarLabel:"Run"
        }}/>
        <Tab.Screen name="History" component={HistoryScreen} />
      </Tab.Navigator>
    </NavigationContainer>

  );
};



