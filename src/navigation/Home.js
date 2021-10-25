/* eslint-disable no-trailing-spaces */
/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */

import React from 'react';

import HomeScreen from '../screens/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import DestinationSearch from './../screens/DestinationSearch';
import SearchResults from './../screens/SearchResults';
import OrderScreen from '../screens/OrderScreen';


const Stack = createStackNavigator();

const HomeNavigator = () => {
    return (
            <Stack.Navigator initialRouteName={"Home"}
    
            >
                <Stack.Screen
                
                 name={"Home"} 
                 component={HomeScreen}
                 options={{
                    headerTransparent: true,
                    title:false,
                 }} 
                 />
                <Stack.Screen
                 name={"DestinationSearch"} 
                 component={DestinationSearch}
                 options={{
                    headerShown: true,
                    title:false, 
                    headerTransparent: true,    
                }} 
                 />
                <Stack.Screen
                 name={"SearchResults"} 
                 component={SearchResults}
                 options={{
                     headerTransparent: true,
                     title:false, 
                }}  
                 />
                  <Stack.Screen
                 name={"OrderPage"} 
                 component={OrderScreen}
                 options={{
                     headerTransparent: true,
                     title:false, 
                }}  
                 />
            </Stack.Navigator>
        
    );
};

export default HomeNavigator;
