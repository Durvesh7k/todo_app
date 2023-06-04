import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Keyboard, ScrollView } from 'react-native';
import Task from './screens/Task';
import React, { useState } from 'react';

export default function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState(['Hello']);

  const handleTask = () => {
    Keyboard.dismiss();
    setTaskList([...taskList, task]);
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskList];
    itemsCopy.splice(index, 1);
    setTaskList(itemsCopy);
  }



  return (
    <View style={styles.container}>
      {/* Added this scroll view to enable scrolling when list gets longer than the page */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      ></ScrollView>


      <View style={styles.taskContainer}>
        <View className='p-8 mt-8'>
          <Text className='font-semibold text-2xl'>Today's task</Text>
        </View>
        <View style={styles.taskWrapper}>
          {taskList.map((task, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Task task={task} />
              </TouchableOpacity>
            )
          })}
        </View>

      </View>


      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.inputWrapper}
      >
        <TextInput placeholder={'Write a task'} style={styles.textInput} onChangeText={text => setTask(text)} />
        <TouchableOpacity style={styles.addTask} onPress={() => handleTask()}>
          <Text style={styles.addText}>+</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({

  inputWrapper: {
    position: 'absolute',
    bottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    padding: 5,
  },

  textInput: {
    height: 50,
    width: 250,
    borderRadius: 40,
    padding: 15,
    fontSize: 15,
    backgroundColor: 'white',
  },


  addTask: {
    backgroundColor: 'white',
    borderRadius: 60,
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',

  },

  addText: {
    fontSize: 40,
    color: '#55BCF6',

  },

  taskWrapper: {
    padding: 10,
    margin: 10,
  },

  container: {
    backgroundColor: '#E8EAED',
    height: '100%',
    justifyContent: 'space-around',
  },

  taskContainer: {
    position : 'absolute',
    top: 10,
    width: '100%',
  }
})

