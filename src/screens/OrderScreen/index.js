/* eslint-disable comma-dangle */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useState,useEffect } from "react";
import { View, Dimensions, Text} from "react-native";
import OrderMap from "../../components/OrderMap";
import {useRoute} from '@react-navigation/native';
import {API, graphqlOperation} from 'aws-amplify';
import { getOrder, getCar  } from "../../graphql/queries";
import { onCarUpdated, onOrderUpdated } from "./subscriptions";


const OrderScreen = (props) => {
    const [car, setCar] = useState(null);
    const [order, setOrder] = useState(null);

    const route = useRoute();
    console.log(route.params.id);
    
    useEffect(() => {
       const fetchOrder =  async () => {
        try {
            const orderData = await API.graphql(graphqlOperation(getOrder, {id:route.params.id}));
            setOrder(orderData.data.getOrder);

        } catch (e) {
            console.log(e);
        }
       };
       fetchOrder();
    }, []);

    useEffect(() => {
        const subscription = API.graphql(
          graphqlOperation(onOrderUpdated, { id: route.params.id })
        ).subscribe({
          next: ({ value }) => setOrder(value.data.onOrderUpdated),
          error: error => console.warn(error)
        });
    
        return () => subscription.unsubscribe();
      }, []);


    useEffect(() => {
        if (!order?.carId || order.carId === '1') {
            return;
        }
        const fetchCar =  async () => {
         try {
             const carData = await API.graphql(graphqlOperation(getCar, {id: order.carId }));
             console.log(carData);
             setCar(carData.data.getCar);
 
         } catch (e) {
             console.log(e);
         }
        };
        fetchCar();
     }, [order]);

     useEffect(() => {
        if (!order?.carId || order.carId === '1') {
            return;
        }
        const subscription = API.graphql(
          graphqlOperation(onCarUpdated, { id: order.carId })
        ).subscribe({
          next: ({ value }) => setCar(value.data.onCarUpdated),
          error: error => console.warn(error)
        });
    
        return () => subscription.unsubscribe();
      }, [order]);
   
    return (
        <View>
            <View style={{height: Dimensions.get('window').height - 400}}>
            <OrderMap car={car}/>
            </View>
            <View>
                <Text>Order Status:{order?.status}</Text>
            </View>

        </View>
    );
};

export default OrderScreen;