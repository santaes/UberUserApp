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
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        height:'100%',
        padding:10,
        top: 40,
    },
    row:{
        flexDirection:'row',
        alignItems:'center',
        marginVertical:5,
    },
    iconContainer:{
        backgroundColor:'#a2a2a2',
        padding:5,
        borderRadius:50,
        marginRight:15,
    },
    locationText:{
       

    },
    separator:{
        backgroundColor:'#efefef',
        height:1,
    },
    listView:{
        position:'absolute',
        top:100,
        
    },
    autoCompleteContainer:{
        position:'absolute',
        top:5,
        left:10,
        right:10,
    },
    textInput:{
        padding:10,
        backgroundColor:'#eee',
        marginVertical:5,
        marginLeft: 20,
    },
    circle:{
        width:7,
        height:7,
        backgroundColor:'#000000',
        position:'absolute',
        top:30,
        left:15,
        borderRadius:5,
    },
    line:{
        width:1,
        height:50,
        backgroundColor:'#91919191',
        position:'absolute',
        top:37,
        left:18,
        borderRadius:5,
    },
    square:{
        width:7,
        height:7,
        backgroundColor:'#000000',
        position:'absolute',
        top:80,
        left:15,
    },
});
 
export default styles;