/* eslint-disable no-spaced-func */
/* eslint-disable no-undef */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import React, {useState,useEffect} from "react";
import { View, Text, Image, FlatList, Pressable,  } from "react-native";
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {API, graphqlOperation } from 'aws-amplify';
import {listCars} from '../../graphql/queries';
import Ionicons from "react-native-vector-icons/Ionicons";





const HomeMap = () => {

  

  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await API.graphql(
          graphqlOperation(
            listCars
          )
        );
        setCars(response.data.listCars.items);


      } catch (e) {
        console.error(e);
      }
    };
    fetchCars();
  },[]);


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
      <View>
        
        
         <MapView
        style={{height:"100%", width:"100%",}}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        showsCompass={false}
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
              
      </View>
     
        
    );
};
export default HomeMap; 
