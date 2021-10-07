import React, {useEffect,userContext} from 'react';
import {StyleSheet, Text, Button, View} from 'react-native'

const WelcomeScreen = ({navigation}) => {
    //Sets the Title to ''
    useEffect(() => { 
        navigation.setOptions({ 
          headerTitle: '',
        }) 
      }, [])

    return (
        <View>
        <Text style={styles.baseText}>Student Screen</Text>
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
    }
})

export default WelcomeScreen;

