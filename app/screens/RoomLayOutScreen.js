import React from 'react';
import {StyleSheet, Text, Button, View} from 'react-native'

const WelcomeScreen = ({navigation}) => {
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

