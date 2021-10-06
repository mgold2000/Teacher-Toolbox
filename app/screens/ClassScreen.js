import React from 'react';
import {StyleSheet, Text, Button, View} from 'react-native'
import ClassList from '../components/ClassList'



const ClassScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
        <Text style={styles.baseText}>Class</Text>
        <ClassList/>
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
      }
})

export default ClassScreen;



