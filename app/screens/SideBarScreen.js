import React from 'react';
import {StyleSheet, Text} from 'react-native'

function SideBarScreen(props) {
    return (
        <Text style={styles.baseText}>Side Bar Screen</Text>
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

export default SideBarScreen;
