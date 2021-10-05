import React from 'react';
import {StyleSheet, Text, Button, View} from 'react-native'
import ClassList from '../components/ClassList'



const ClassScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
        <Text style={styles.baseText}>Class Screen</Text>
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
        color: "orange",
        textAlign: "center",
        textAlign: "center",
        fontWeight: "bold",
        marginTop: 50,
        fontSize: 30,
        textAlignVertical: "center",
    },
    container: {
        flex: 1,
        backgroundColor: '#FCFCFC',
      }
})

export default ClassScreen;



