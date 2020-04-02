import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, TouchableOpacity, FlatList, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import TaskList from './src/components/TaskList/index';


export default function App() {
  const [task, setTask] = useState([
    { key:1, task: 'Comprar pão'},
    { key:2, task: 'estudar RN'},
    { key:3, task: 'acordar de manha para comer adadadsdfddfsdfsdf'},
    { key:4, task: 'carro novo'},
    { key:5, task: 'note novo'},
    

  ]);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#20201d' barStyle='light-content' />

      <View style={styles.content}>             
      </View>

      <View style={styles.Logo}>
      <Image source={require('../Tarefas/src/assets/Logo.png')} style={styles.title}/>   
      </View>      

      <FlatList 
      marginHorizontal={10}
      showsVerticalScrollIndicator={false}
      data={task}
      keyExtractor={(item)=> String(item.key)}
      renderItem={({item})=> <TaskList data={item}/>}

      />

      <TouchableOpacity style={styles.fab} >
        <Ionicons name='ios-add' size={35} color='#fff' />
      </TouchableOpacity>



    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#980000', 
    
  },
  content:{

  },
  title:{  
    width:150,
    height:150,
    alignItems:'center',
    justifyContent:'center'  
  },
  Logo:{
    alignItems:'center'
  },
  fab:{
    position:'absolute',
    width:60,
    height:60,
    backgroundColor:'#ffe000',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:30,
    right:25,
    bottom:25,
    elevation:2,
    zIndex:9,
    shadowColor:'#000',
    shadowOpacity:0.2,
    shadowOffset:{
      width:1,
      height:3,
    }  
  },

});
