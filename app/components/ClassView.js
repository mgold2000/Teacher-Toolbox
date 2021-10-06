import React from 'react';
import * as Font from 'expo-font'
import {StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native'
import {useNavigation} from '@react-navigation/native'

const ITEM_HEIGHT = 150;
const ClassView = ({title, classNum,image_url, backgroundClr}) => {
    const navigation = useNavigation();
    return (
    <View > 
    <TouchableOpacity onPress={() =>
            navigation.navigate('RoomLayOutScreen', { name: 'RoomLayOutScreen' })
        } 
        style={{
        flex: 1,
        flexDirection: 'row',
        borderRadius: 5,
        elevation: 2,
        borderRadius: 18,
        height: ITEM_HEIGHT,
        marginBottom: 2,
        marginTop: 2,
        marginLeft: 2,
        marginRight: 2,
        borderColor: '#d6d6d6',
        borderTopWidth: 0,
        borderLeftWidth: 2.5,
        borderRightWidth: 2.75,
        borderWidth: 5,
        backgroundColor: backgroundClr

    }} >
        <ScrollView>
    <View >
        <Image style={styles.photo} source={image_url}/>
        <View style={styles.container_text}>
            <Text style={styles.title}>
                {title}
            </Text>
            <Text style={styles.classNum}>
                {classNum}
            </Text>
        </View>
    </View>
    </ScrollView>
    </TouchableOpacity>
    </View>
    );
    };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 5,
        elevation: 2,
        borderRadius: 18,
        height: ITEM_HEIGHT,
        padding: 10,
        marginBottom: 4,
        marginLeft: 2,
        marginRight: 2,

    },
    title: {
        fontSize: 40,
        color: '#1f1f1f',
        flex: 2,
    },
    container_text: {
        flex: 1,
        color: '#7a7a7a',
        flexDirection: 'column',
        marginLeft: 12,
        justifyContent: 'center',
        alignItems: 'center',
        left: 10,
    },
    classNum: {
        fontSize: 12,
        fontStyle: 'italic',
        color: '#595959'
    },
    photo: {
        height: ITEM_HEIGHT *.8,
        width: ITEM_HEIGHT*.8,
        position: 'absolute',
        borderRadius: 10,
        marginLeft: ITEM_HEIGHT * .08,
        marginTop: ITEM_HEIGHT * .1,
        borderColor: '#d6d6d6',
    },
})

export default ClassView;

