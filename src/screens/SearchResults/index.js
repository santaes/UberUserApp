/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import HomeMap from '../../components/HomeMap';
import RouteMap from '../../components/RouteMap';
import UberTypes from '../../components/UberTypes';
import { useRoute } from '@react-navigation/native';

const SearchResults = () => {

    const route = useRoute();

    console.log(route.params);

    return (
        <View style={{display:'flex', justifyContent:'space-between'}}>
            <View style={{height: Dimensions.get('window').height - 400}}>
               <RouteMap /> 
            </View>
            
            <View style={{height:400,backgroundColor:'#ffffff' }}>
                <UberTypes />
            </View>
            
        </View>
    );
};

export default SearchResults;
