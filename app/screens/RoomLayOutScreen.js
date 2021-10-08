import React, {useEffect,userContext} from 'react';
import {StyleSheet, Text, Button, View, width, height} from 'react-native'

const WIDTH = 1125;

const RoomLayOutScreen = ({navigation}) => {
    //Sets the Title to ''
    useEffect(() => { 
        navigation.setOptions({ 
          headerTitle: '',
        }) 
      }, [])
      
    return (
        <View>
        <Text style={styles.baseText}>Room Layout Screen</Text>
        <Button 
            title="Go to Student Screen"
            onPress={() =>
            navigation.navigate('StudentScreen', { name: 'StudentScreen' })
            }
        />
        <Button 
            title="Go to Take Roll"
            onPress={() =>
            navigation.navigate('TakingRollScreen', { name: 'TakingRollScreen' })
            }
        />
        <View style={{flexDirection: 'row',justifyContent: 'center',position: 'absolute', bottom: -540, }}>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
        </View>
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
    box: {
        width: WIDTH/3 /3 -4.5,
        height: 100,
        backgroundColor: "orange",
        flexDirection: "row",
        borderWidth: 4,
        borderColor: 'white',
        borderRadius: 25,
        margin:2,    

        
    }
})

export default RoomLayOutScreen;

