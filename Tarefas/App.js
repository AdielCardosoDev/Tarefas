import React, {useState, useCallback, useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, TouchableOpacity, FlatList, Linking, Modal, TextInput, AsyncStorage, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import TaskList from './src/components/TaskList/index';
import * as Animatable from 'react-native-animatable';

const AnimatableBtn = Animatable.createAnimatableComponent(TouchableOpacity);



export default function App() {
  const [task, setTask] = useState([]);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [sobre, setSobre] = useState(false);

  useEffect(() => {
   async function loadTasks(){
      const taskStorage = await AsyncStorage.getItem('@task');
      if(taskStorage){
        setTask(JSON.parse(taskStorage));
      }
    }

    loadTasks();

  }, []);

  useEffect(() => {
    async function saveTasks(){
      await AsyncStorage.setItem('@task', JSON.stringify(task));
    }

    saveTasks();

  }, [task]);



  function handleAdd(){
    if(input === '') return;
    const data = {
      key: input,
      task: input
    };

    setTask([...task, data]);
    setOpen(false);
    setInput('');
  }

 

 const handleDelete = useCallback((data)=>{
   const find = task.filter(r => r.key !== data.key);
   setTask(find);
 })

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#20201d' barStyle='light-content' />

      <View style={styles.content}>             
      </View>

      <View style={styles.title}>
      <Text style={styles.titleM}>Minhas Tarefas</Text>   
      </View>      

      <FlatList 
      marginHorizontal={10}
      showsVerticalScrollIndicator={false}
      data={task}
      keyExtractor={(item)=> String(item.key)}
      renderItem={({item})=> <TaskList data={item} handleDelete={handleDelete}/>}

      />

      <Modal animationType='slide' transparent={false} visible={open} >
      <SafeAreaView style={styles.modal} >

        <View style={styles.modalHeader} >
        <TouchableOpacity onPress={()=>setOpen(false)}>
          <Ionicons style={{marginLeft:5, marginRight:5 }} name='md-arrow-back' size={40} color="#D32F2F" />
        </TouchableOpacity>

        <Text style={styles.modalTitle}>Nova Tarefa</Text>
        </View>

        <Animatable.View style={styles.modalBody} animation='fadeInUp' useNativeDriver>
          <TextInput 
          
          placeholder='Qual a bronca?' 
          style={styles.input} 
          multiline={true} 
          autoCorrect={false}
          placeholderTextColor='#747474' 
          value={input}
          onChangeText={(texto)=> setInput(texto)}
          
          
          />

          <TouchableOpacity style={styles.handleAdd} 
          onPress={handleAdd}
          activeOpacity={0.7}
          >
            <Text style={styles.handleAddText} >Salvar</Text>
          </TouchableOpacity>
        </Animatable.View>

              


      </SafeAreaView>
      </Modal>

      <AnimatableBtn style={styles.fab}
      useNativeDriver
      animation='bounceInUp'
      duration={1300}
      onPress={()=> setOpen(true)}
      activeOpacity={0.7}
      >
        <Ionicons name='ios-add' size={35} color='#fff' />
      </AnimatableBtn>



    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd', 
    
  },
  content:{

  },
  title:{      
    alignItems:'center',
    justifyContent:'center',
    marginTop:15, 
     
  },
  titleM:{
    fontSize:30,
    color:'#212121',
    fontWeight:'bold'
  },  
  fab:{
    position:'absolute',
    width:60,
    height:60,
    backgroundColor:'#212121',
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
  modal:{
    flex:1,
    backgroundColor:'#ddd'
  },
  modalHeader:{
    marginLeft:10,
    marginTop:20,
    flexDirection:'row',
    alignItems:'center'
  },
  modalTitle:{
    marginLeft:15,
    fontSize:23,
    color:'#212121',
    fontWeight:'bold'
  },
  modalBody:{
    marginTop:15,
  },
  input:{
    fontSize:15,
    marginLeft:10,
    marginRight:10,
    marginTop:25,
    backgroundColor:'#fff',
    padding:9,
    height:85,
    textAlignVertical:'top',
    color:'#000',
    borderRadius:5
  },
  handleAdd:{
    backgroundColor:'#D32F2F',
    marginTop:10,
    alignItems:'center',
    justifyContent:'center',
    marginLeft:10,
    marginRight:10,
    height:40,
    borderRadius:5
  },
  handleAddText:{
    fontSize:20,
    color:'#fff'
  },
  sobre:{
    textAlign:'center',
    marginTop:350,
    fontSize:20,
    fontWeight:'bold',
    
  },
  modalSobre:{
   marginLeft:10,
    marginTop:20,
    flexDirection:'row',
    alignItems:'center'
     
  },
  voltar:{
    marginLeft:5,
    fontSize:23,
    color:'#212121',
    fontWeight:'bold'
  },
  h1:{
    fontSize:20,
    textAlign:'center',
    fontWeight:'bold',
    marginTop:50,
    marginLeft:10,
    marginEnd:10
  },
  h2:{
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center',
    marginTop:30,
    color:'#D32F2F',
  
  },
  P1:{
    textAlign:'center',
    marginTop:15,
    fontSize:20,
    fontWeight:'bold',
    
    
  },
  P2:{
    marginTop:5,
    textAlign: 'center',
    fontSize:20,
    fontWeight:'bold'
  },
 
});
