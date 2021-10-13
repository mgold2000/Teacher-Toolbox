import React, {useEffect,userContext} from 'react';
import {StyleSheet, Text, Button, View, TouchableOpacity} from 'react-native'
import ClassList from '../components/ClassList'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addClass } from '../actions/actions.js';


//This is the Screen displaying the list of Classes the teacher has

const ClassScreen = ({navigation} ) => {
    const [clas, setClass] = useState('');
    const dispatch = useDispatch();
    const submitClass = (clas) => dispatch(addClass(clas));

    return (
        <View style={styles.container}>
        <Text style={styles.baseText}>Class</Text>
        <ClassList/>
        <TouchableOpacity style={styles.addClassButton} 
        onPress={() => submitClass("Class 4")}
            ><Text>ADD CLASS</Text></TouchableOpacity>
    </View>

    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },
    baseText: {
        color: "black",
        textAlign: "left",
        fontWeight: "bold",
        marginTop: 50,
        fontSize: 30,
        textAlignVertical: "center",
        left: 6
    },
    container: {
        flex: 1,
        backgroundColor: '#FCFCFC',
      },
    addClassButton: {
        justifyContent: 'center',
        textAlign: 'center', 
        fontWeight: 'bold',
        fontSize: 30,
        position: 'absolute',
        left: 135,
        bottom: 20,
        backgroundColor: 'orange',
        width: 100,
        height: 50,
    }
})

export default ClassScreen;



