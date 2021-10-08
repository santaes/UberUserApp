/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */

import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles';
import UberTypeRow from '../UberTypeRow';
import typesData from '../../assets/data/types';
import types from '../../assets/data/types';

const UberTypes = () => {

    const confirm = () =>{
        console.warn('confirm');
    };

    return (
        <View>
            {typesData.map(type => <UberTypeRow type={type} />)}


           <Pressable onPress={confirm} style={styles.button}>
               <Text style={styles.buttonText}>
                   Confirm Uber
               </Text>
           </Pressable>
            
        </View>
    );
};

export default UberTypes;
