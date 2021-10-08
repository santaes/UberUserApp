/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from "react";
import { View, Text,Dimensions } from "react-native";
import HomeMap from "../../components/HomeMap";
import CovidMessage from "../../components/CovidMessage";
import HomeSearch from "../../components/HomeSearchComponent";

const HomeScreen = () => {
    return (
        <View>
            <View style={{height: Dimensions.get('window').height - 400}}>
            <HomeMap />
            </View>

           {/*  Covid Message */}
           <CovidMessage />


           {/*  bottom component */}
           <HomeSearch />
            
        </View>
    );
};

export default HomeScreen;