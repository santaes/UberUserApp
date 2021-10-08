/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        
        alignItems:'center',
        padding:20,
        },
    image:{
        height:70,
        width:80,
    },
    middleContainer:{
        flex:1,
        marginHorizontal:10,
       
    },
    type:{
        fontWeight:'bold',
        fontSize:18,
        marginBottom:5,
        color:'#000000'
    },
    time:{
        color:'#5d5d5d',

    },
    rightContainer:{
        width:100,
        justifyContent:'flex-end',
        flexDirection:'row',
    },
    price:{
        color:'#000000',
        fontWeight:'bold',
        fontSize:18,
        marginLeft:5,
    },

    
});
export default styles;
