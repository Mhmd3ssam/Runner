import React from 'react';
import { Text, View, } from 'react-native';
import { COLORS } from './common/color';
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
          color:COLORS.oxfordBlue
        },
        tabBarStyle: { backgroundColor: COLORS.powderblue },
      }}>
        <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarLabel:"Run"
        }}/>
        <Tab.Screen name="Trips" component={HistoryScreen} />
      </Tab.Navigator>
    </NavigationContainer>

  );
};



