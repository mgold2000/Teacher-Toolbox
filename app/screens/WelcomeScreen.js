import React from 'react';
import {StyleSheet} from 'react-native'

function WelcomeScreen(props) {
    return (
        <Text style={styles.background} >Welcome Screen</Text>
    );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    background: {
        flex: 1
    }
})