import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import TaskList from './src/components/TaskList/index';


export default function App() {
  const [task, setTask] = useState([
    { key:1, task: 'Comprar pão'},
    { key:2, task: 'estudar RN'},
    { key:3, task: 'acordar de manha para comer'},
    { key:4, task: 'carro novo'},
    { key:5, task: 'note novo'},

  ]);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#20201d' barStyle='light-content' />

      <View style={styles.content}>
        <Text style={styles.title} >TAREFAS.COM</Text>
      </View>

      <FlatList 
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
    marginTop:30,
    textAlign:'center',
    fontSize:40,
    color:'#fff',
    fontWeight:'bold'
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
  }
});
