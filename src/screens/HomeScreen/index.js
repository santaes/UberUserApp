/* eslint-disable no-undef */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from "react";
import { View, Dimensions, Pressable,TouchableOpacity } from "react-native";
import HomeMap from "../../components/HomeMap";
import CovidMessage from "../../components/CovidMessage";
import HomeSearch from "../../components/HomeSearchComponent";




import Ionicons  from 'react-native-vector-icons/Ionicons';




    
const HomeScreen = () => {
    
    
    
    
    return (
        <View>
             
            <View style={{height: Dimensions.get('window').height - 400}}>
            <HomeMap />
            <View style={{position:'absolute', top:12,left:20,height:35,width:35,backgroundColor:'#ffffff90',justifyContent:'center',alignItems:'center',}}>
            {/* <Pressable onPressIn={() => console.warn('pressed')}> */}
                <Ionicons name="ios-menu-outline" size={24} color="#000000" />
            {/* </Pressable> */}
            </View>
            </View>


           {/*  Covid Message */}
           <CovidMessage />


           {/*  bottom component */}
           <HomeSearch />
           
        </View>
    );
};

export default HomeScreen;