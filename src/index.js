import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View,} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; 

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFill,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    height: 400,
    width: 400,
  },
 });
export const App = () => {
 

  return (
    <View style={styles.container}>
    <MapView
      style={styles.map}
      region={{
        latitude: 38.78825,
        longitude: -122.4324,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
    >
    </MapView>
    <Text>{'Runner App'}</Text>
  </View>
  );
};



