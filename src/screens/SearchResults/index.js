/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import { View, Text, Dimensions, Alert } from 'react-native';

import RouteMap from '../../components/RouteMap';
import UberTypes from '../../components/UberTypes';
import { useRoute , useNavigation} from '@react-navigation/native';
import { API, graphqlOperation, Auth} from 'aws-amplify';
import {createOrder} from '../../graphql/mutations';

const SearchResults = () => {
    const typeState = useState(null);

    const route = useRoute();
    const navigation = useNavigation();

    const {originPlace, destinationPlace} = route.params;
    const onSubmit = async () => {
        const [type] = typeState;
        if (!type) {
            return;
        }
        try {
            const userInfo = await Auth.currentAuthenticatedUser();
            const date = new Date();
            
            const input = {
                createdAt: date.toISOString(),
                type,
                originLatitude: originPlace.details.geometry.location.lat,
                originLongitude: originPlace.details.geometry.location.lng,
                destinationLatitude: destinationPlace.details.geometry.location.lat,
                destinationLongitude: destinationPlace.details.geometry.location.lng,
                userId: userInfo.attributes.sub,
                carId: "1",
                status: "NEW",
            };
            const response = await API.graphql(
                graphqlOperation(
                    createOrder, {
                        input: input,
                    }
                )
            );
            console.log(response);
            
                navigation.navigate('OrderPage', {id: response.data.createOrder.id});
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <View style={{display:'flex', justifyContent:'space-between'}}>
            <View style={{height: Dimensions.get('window').height - 400}}>
               <RouteMap origin={originPlace} destination={destinationPlace}/> 
            </View>
            
            <View style={{height:400,backgroundColor:'#ffffff' }}>
                <UberTypes typeState={typeState} onSubmit={onSubmit}/>
            </View>
            
        </View>
    );
};

export default SearchResults;
