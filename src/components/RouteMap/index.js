/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const GOOGLE_MAPS_APIKEY = 'AIzaSyD7tN5XgP0qpd3-iD8Nwaa7XaMtG8XUe5E';

const RouteMap = () => {

  const origin = {
    latitude: 28.450627,
    longitude: -16.263045,
  };
  const destination = {
    latitude: 28.460127,
    longitude: -16.269045,
  };

    
    return (
      <MapView
        style={{height:"100%", width:"100%",}}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 28.450627,
          longitude: -16.263045,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}> 
        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={4}
          strokeColor="#0578f2"
        />
        <Marker
          title={'Origin'}
          coordinate={origin}
        />
        <Marker
         title={'Destination'}
         coordinate={destination}
        />
      </MapView>
      
        
    );
};
export default RouteMap; 
