/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const CovidMessage = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Travel only if it necessary</Text>
            <Text style={styles.text}>Rules</Text>
            <Text style={styles.learnMore}>Learn More</Text>
        </View>
    );
};

export default CovidMessage;
