/* eslint-disable jsx-quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */

import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, SafeAreaView } from 'react-native';
import styles from './styles';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import PlaceRow from './PlaceRow';



const DestinationSearch = () => {



    const [originPlace, setOriginPlace] = useState(null);
    const [destinationPlace, setDestinationPlace] = useState(null);

    useEffect(() => {
        if (originPlace && destinationPlace) {
            
        }
    }, [originPlace, destinationPlace]);

    return (
        <SafeAreaView>
            <View style={styles.container}>

                <GooglePlacesAutocomplete
                    enablePoweredByContainer={false}
                    placeholder='From'
                    styles={{
                        container: styles.autoCompleteContainer,
                        listView:  styles.listView,
                        separator: styles.separator,
                        textInput: styles.textInput,
                    }}
                    onPress={(data, details = null) => {
                        setOriginPlace({data, details});
                        
                    }}
                    fetchDetails={true}
                    query={{
                        key: 'AIzaSyD7tN5XgP0qpd3-iD8Nwaa7XaMtG8XUe5E',
                        language: 'en',
                    }}
                    renderRow={(data) => <PlaceRow data={data}/>}
                    
                />
                 <GooglePlacesAutocomplete
                    enablePoweredByContainer={false}
                    placeholder='Where to?'
                    styles={{
                        container: {
                            ...styles.autoCompleteContainer,
                            top: 55,
                        },
                        separator: styles.separator,
                        textInput: styles.textInput,   
                    }}

                    onPress={(data, details = null) => {
                        setDestinationPlace({data, details});
                        
                    }}
                    fetchDetails={true}
                    query={{
                        key: 'AIzaSyD7tN5XgP0qpd3-iD8Nwaa7XaMtG8XUe5E',
                        language: 'en',
                    }}
                    renderRow={(data) => <PlaceRow data={data}/>}
                />
                {/* Circle near the FROMINPUT */}
                <View style={styles.circle} />

                {/* Line between dots */}
                <View style={styles.line} />

                {/* Square near destinationInput */}
                <View style={styles.square} />
            </View>
        </SafeAreaView>
    );
};

export default DestinationSearch;
