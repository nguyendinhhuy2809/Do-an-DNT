import React, {components, useState, useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, {Marker}  from 'react-native-maps';
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

  const mapRef = useRef()

  const {pickupCords, destinationCords } = state

  return (
    <View style={styles.container}>
    <MapView
      ref={mapRef}
      style={StyleSheet.absoluteFill}
      initialRegion={pickupCords}
  >
    <Marker
      coordinate={pickupCords}
      />
      <Marker
      coordinate={destinationCords}
      />
    <MapViewDirections
      origin={pickupCords}
      destination={destinationCords}
      apikey={GOOGLE_MAP_KEY}
      strokeWidth={3}
      strokeColor="blue"
      optimizeWaypoints={true}
      onReady={result =>{
        mapRef.current.fitToCoordinates(result.coordinates,{
          edgePadding:{
            right: 30,
            bottom: 300,
            left: 30,
            top: 100
          }
        })
      }}
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