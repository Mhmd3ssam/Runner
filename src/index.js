import React from 'react';
import { Pressable } from 'react-native';
import { COLORS } from './common/color';
import Fontisto from "react-native-vector-icons/Fontisto";

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/Home';
import HistoryScreen from './screens/History';
import DetailsScreen from './screens/Details';
import StartScreen from './screens/Start';
import Map from './components/Map';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from './store/reducer';

const store = createStore(reducer);


export const App = () => {
  const Tab = createMaterialTopTabNavigator();
  const Stack = createNativeStackNavigator();

  const MyStck = () => {
    return (

      <Stack.Navigator>
        <Stack.Screen name="Home" component={MyTaps} options={{ headerShown: false }} />
        <Stack.Screen name="TripDetails" component={DetailsScreen} options={{
          headerRight: () => {
            return (
              <Pressable onPress={() => { console.log("share") }}>
                <Fontisto name="share" size={20} style={{ marginRight: 15, color: "black" }} />
              </Pressable>
            )
          }
        }} />
        <Stack.Screen name="Start" component={StartScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Map" component={Map} options={{ headerShown: false }} />
      </Stack.Navigator>
    )
  }
  const MyTaps = () => {
    return (
      <Tab.Navigator screenOptions={{
        tabBarLabelStyle: {
          fontWeight: "bold",
          color: COLORS.oxfordBlue
        },
        tabBarStyle: { backgroundColor: COLORS.powderblue },
      }}>
        <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarLabel: "Run" }} />
        <Tab.Screen name="Trips" component={HistoryScreen} />
      </Tab.Navigator>
    )
  }
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyStck />
      </NavigationContainer>
    </Provider>


  );
};



