/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */

import React from 'react';
import { View, Text, Pressable } from 'react-native';
import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {Auth} from 'aws-amplify';

const CustomDrawer = (props) => {
    return (
        <DrawerContentScrollView {...props} style={{flex:1,bottom:5,}}>
            <View style={{backgroundColor:'#121212',padding:15,}}>
                {/* user row */}
                <View style={{flexDirection:'row',alignItems:'center',paddingVertical:15,}}>
                    <View style={{backgroundColor:'#cacacaca',width:50,height:50,borderRadius:25,marginRight:10,}} />
                    <View>
                        <Text style={{color:'#ffffff', fontSize:24,}}>Name Surname</Text>
                        <Text style={{color:'#ffffff', }}>5.00 *</Text>
                    </View>
                </View>


                {/* Messages row */}

                <View style={{borderTopWidth: 0.5, borderBottomWidth: 0.5, borderTopColor:'#565656',borderBottomColor:'#565656', paddingVertical:5,}}>
                    <Pressable onPress={() => {console.warn('messages')}}>
                        <View style={{flexDirection:'row',alignItems:'center',}}>
                            <Text style={{color:'white',paddingVertical:5,marginVertical:5,}}>Messages</Text>
                            <View style={{width:10,height:10,borderRadius:5, backgroundColor:'blue',marginHorizontal:20,}} />
                            <MaterialIcons name='chevron-right' size={20} color="#ffffff" style={{marginHorizontal:100,}}/>
                        </View>
                        

                    </Pressable>
                </View>



                {/* do more row */}

                <Pressable 
                onPress={() => {console.warn('do more')}}>
                    <Text style={{color:'#dddddd', paddingVertical:10,}}>Do more with your account </Text>
                </Pressable>

                {/* make money row  */}
                <Pressable onPress={() => {console.warn('make money')}}>
                    <Text style={{color:'white',paddingVertical:10,}}>Make Money Driving</Text>
                </Pressable>

                

            </View>

            <DrawerItemList {...props} />
            <Pressable onPress={() => {Auth.signOut() }} style={{flexDirection:'row',alignItems:'center', top:10,}}>
                    <SimpleLineIcons name="logout" size={20} color={"#f5424b"} style={{marginHorizontal:15}}/>
                    <Text style={{color:'#000000',margin:10,right:10}}>Logout</Text>
                </Pressable>
            
        </DrawerContentScrollView>
    );
};

export default CustomDrawer;
