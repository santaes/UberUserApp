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
import cars from "../../assets/data/cars";

const HomeMap = () => {

    const getImage = (type) => {
      if (type === 'UberX') {
      return require('../../assets/images/top-UberX.png');
      }
      if (type === 'Comfort') {
          return require('../../assets/images/top-Comfort.png');
      }
      return require('../../assets/images/top-UberXL.png');
      };
    return (
      <MapView
        style={{height:"100%", width:"100%",}}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        showsCompass={true}
        initialRegion={{
          latitude: 28.450627,
          longitude: -16.263045,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>

          {cars.map((car) => (
            <Marker
            key={car.id}
            coordinate={{ latitude : car.latitude, longitude : car.longitude }}
            >
            <Image
              style={{
                width:50,
                height:50,
                resizeMode:"contain",
                transform: [{
                  rotate: `${car.heading}deg`,
                }]
              }} 
              source={getImage(car.type)}
              
            />
          </Marker>
          ))}
      </MapView>
      
        
    );
};
export default HomeMap; 
