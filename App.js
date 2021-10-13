/* eslint-disable no-trailing-spaces */
/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */


import React, {useEffect} from 'react';
import {PermissionsAndroid, Platform} from 'react-native';

import Geolocation from '@react-native-community/geolocation';



import 'react-native-gesture-handler';
import Router from './src/navigation/Root';
import { withAuthenticator } from 'aws-amplify-react-native';
import Amplify from 'aws-amplify';
import config from './src/aws-exports';
Amplify.configure(config);




navigator.geolocation = require('@react-native-community/geolocation');


const App = () => {

  const androidPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Uber  App Location Permission",
          message:
            "Uber App needs access to your location  ",
            
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK",
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the location");
      } else {
        console.log("Location permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    if (Platform.OS === 'android') {
      androidPermission();
    } else {
      Geolocation.requestAuthorization();
    }
    
  }, []);
  

  return (
    <>
    <Router/>
    </>

);
};

export default withAuthenticator(App);
