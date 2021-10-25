/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createDrawerNavigator,DrawerItem } from '@react-navigation/drawer';

import HomeNavigator from './Home';
import { View ,Text} from 'react-native';
import CustomDrawer from './CustomDrawer';


const Drawer = createDrawerNavigator();

const Dummy = (props) => (
    <View style={{justifyContent:'center', alignItems:'center',}}>
        <Text>{props.name} </Text>
    </View>
);

const RootNavigator = () => {



    return (
        <NavigationContainer  >
           <Drawer.Navigator
           
           
            screenOptions={{headerShown:false,headerTitle:false,headerPressColorAndroid:'#00000020', }}
            drawerContent={(props) => (<CustomDrawer {... props}/>)}  >
               <Drawer.Screen  name="Home" component={HomeNavigator} />

               <Drawer.Screen name="Your Trips" >
                   {() => <Dummy name={'Your Trips'} />}
               </Drawer.Screen> 

               <Drawer.Screen name="Help" >
                   {() =><Dummy name={'Help'} />}
               </Drawer.Screen>

               <Drawer.Screen name="Settings" >
                  {() => <Dummy name={'Settings'} />}
               </Drawer.Screen> 

           </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigator;
