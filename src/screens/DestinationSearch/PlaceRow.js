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
import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';

const PlaceRow = ({data}) => {
    
    return (
        <View style={styles.row}>
            <View style={styles.iconContainer}>
                {data.description === 'Home' ? 
                <Entypo name='home' size={20} color={'#ffffff'} />
                 : 
                 <Entypo name='location-pin' size={20} color={'#ffffff'} />}
                
            </View>    
            <Text style={styles.locationText}>
                {data.description || data.vicinity}
            </Text>

            
        </View>
    );
};

export default PlaceRow;
