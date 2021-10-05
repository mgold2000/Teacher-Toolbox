import React from 'react';
import {StyleSheet, Text, Button, View} from 'react-native'

const WelcomeScreen = ({navigation}) => {
    return (
        <View>
        <Text style={styles.baseText}>Welcome Screen</Text>
        <Button 
            title="Go to Class Screen"
            onPress={() =>
            navigation.navigate('ClassScreen', { name: 'ClassScreen' })
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

