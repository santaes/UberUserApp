/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-undef */
/* eslint-disable comma-dangle */
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
import { View, Text, Image, Pressable } from 'react-native';
import styles from './styles';
import  IonIcons  from 'react-native-vector-icons/Ionicons';


const UberTypeRow = (props) => {

    const {type, onPress, isSelected} = props;

    const getImage = () => {
        if (type.type === 'UberX') {
        return require('../../assets/images/UberX.jpeg');
        }
        if (type.type === 'Comfort') {
            return require('../../assets/images/Comfort.jpeg');
        }
        return require('../../assets/images/UberXL.jpeg');
    };

    return (
        <Pressable
         onPress={onPress} 
         style={[styles.container,{backgroundColor: isSelected ? '#efefefef' : '#ffffff',}]}
        >
          {/* image */}
          <Image
           resizeMode="contain"
           source={getImage()}
           style={styles.image} 
          />

          <View style={styles.middleContainer}>
            <Text style={styles.type}>
                {type.type} {' '}
                <IonIcons name="person" size={16} />
                3
            </Text>
            <Text style={styles.time}>
                8:03PM drop off
            </Text>
          </View>
          <View style={styles.rightContainer}>
          <IonIcons name="pricetag" size={20} color={'#42d742'} />
          
          <Text style={styles.price}>
              est. ${type.price}
          </Text>
          </View>

            
        </Pressable>
    );
};

export default UberTypeRow;
