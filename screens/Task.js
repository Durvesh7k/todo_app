import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Task = ({task}) => {
    return (
        <View  className='flex h-18 bg-white rounded-md mb-6 justify-center'>
            <View style={styles.taskStyle}>
                <View style={styles.square}></View>
                <Text style={{flex: 9}}>{task}</Text>
                <View style={styles.circle}></View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({

    taskStyle:{
        flexDirection: 'row',
        alignItems: 'center',
    },


    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        margin: 15,
        borderRadius: 5,
    },

    circle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        borderColor: 'black',
        borderWidth : 1,
        margin: 10,
    }




})

export default Task