import React from 'react';
import {View,Text, StyleSheet, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function TaskList({data, handleDelete}){
    return(
        <Animatable.View 
        style={styles.Container}
        animation='bounceIn'
        useNativeDriver
        >            
             <View >
                 <Text style={styles.cardDes}>Descrição da tarefa</Text>
                <Text style={styles.task}>{data.task}</Text>                

            {/* Botão finalizar tarefa*/}
            <View style={styles.card}>    

            {/* Botão ecluir tarefa */}         
            <TouchableOpacity activeOpacity={0.7} onPress={()=>handleDelete(data)} >
            <MaterialCommunityIcons name="delete-circle" size={31} color="#D32F2F" />
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.7}  >
            <MaterialCommunityIcons name="check-circle" size={30} color="#D32F2F" />            
            </TouchableOpacity>                        
            </View>

            </View> 
            
            
            
        </Animatable.View>
    )
}

const styles = StyleSheet.create({
    Container:{
        flex:1,
        margin:8,        
        backgroundColor:'#FFF',
        borderRadius:5,
        padding:7,
        elevation:1.5,
        shadowColor:'#000',
        shadowOpacity:0.2,
        shadowOffset:{
            width:1,
            height:3,
        }
    },
    task:{
        color: '#212121',
        fontSize:20,
        paddingLeft:8,
        paddingRight:20
    },
    card:{
        marginTop:8,
        flexDirection: 'row-reverse',
        paddingLeft:8,       
        paddingRight:8,
        
    },
    cardDes:{
        paddingLeft:8,
        color:"#D32F2F",
        fontWeight:'bold',

    },
   
});