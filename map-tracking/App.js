import React, {components, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView  from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import  GOOGLE_MAP_KEY  from './googleMapKey';

export default function App () {
  const [state, setState] = useState({
    pickupCords: {
      latitude: 21.030653,
      longitude: 105.847130,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    destinationCords: {
      latitude: 20.865139,
      longitude: 106.683830,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }
  })

  const {pickupCords, destinationCords } = state

  return (
    <View style={styles.container}>
    <MapView
    style={StyleSheet.absoluteFill}
    initialRegion={pickupCords}
  >
    <MapViewDirections
      origin={pickupCords}
      destination={destinationCords}
      apikey={GOOGLE_MAP_KEY}
      strokeWidth={3}
      strokeColor="blue"
    />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});