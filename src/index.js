import React from 'react';
import { Text, View, } from 'react-native';
import { COLORS } from './common/color';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/Home';
import HistoryScreen from './screens/History';
import DetailsScreen from './screens/Details';
import StartScreen from './screens/Start';

export const App = () => {
  const Tab = createMaterialTopTabNavigator();
  const Stack = createNativeStackNavigator();

  const MyStck = ()=>{
    return(
      <Stack.Navigator>   
          <Stack.Screen name="Home" component={MyTaps}  options={{headerShown: false}}/>
          <Stack.Screen name="TripDetails" component={DetailsScreen}  />
          <Stack.Screen name="Start" component={StartScreen}  />
      </Stack.Navigator>
    )
  }
  const MyTaps = ()=>{
    return(
      <Tab.Navigator screenOptions={{
        tabBarLabelStyle: {
          fontWeight: "bold",
          color: COLORS.oxfordBlue
        },
        tabBarStyle: { backgroundColor: COLORS.powderblue },
      }}>
        <Tab.Screen name="Home" component={HomeScreen} options={{tabBarLabel: "Run"}}/>
        <Tab.Screen name="Trips" component={HistoryScreen} />
      </Tab.Navigator>
    )
  }
  return (
    <NavigationContainer>
      <MyStck/>
    </NavigationContainer>

  );
};



