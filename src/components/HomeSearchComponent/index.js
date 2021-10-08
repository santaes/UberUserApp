/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import React from 'react';
import { View, Text } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './styles';

const HomeSearch = () => {
    return (
        <View>
            {/* input box */}
            <View style={styles.inputBox}>
                <Text style={styles.inputText}>Where to?</Text>
                <View style={styles.timeContainer}>
                <AntDesign name="clockcircle" size={20} color="#535353" />
                <Text style={{fontWeight:'bold',}}>Now</Text>
                <MaterialIcons name="keyboard-arrow-down" size={20} color ="black" />

                </View>

            </View>

            {/* previous destination */}
            <View style={styles.row}>
                <View style={styles.iconContainer}>
                    <AntDesign name="clockcircle" size={20} color="#ffffff" />
                </View>
                <Text style={styles.destinationText}> Spin NightClub </Text>

            </View>

            
            {/* Home destination */}
            <View style={styles.row}>
                <View style={[styles.iconContainer, {backgroundColor:'#218cff'}]}>
                    <Entypo name="home" size={20} color="#ffffff" />
                </View>
                <Text style={styles.destinationText}> Home </Text>

            </View>

        </View>
    )
}

export default HomeSearch;
