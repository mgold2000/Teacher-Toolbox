import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native'
import {useNavigation} from '@react-navigation/native'


const ClassView = ({title, description,image_url}) => {
    const navigation = useNavigation();
    return (
    <View >
        <ScrollView>
        <TouchableOpacity style={styles.container} onPress={() =>
            navigation.navigate('RoomLayOutScreen', { name: 'RoomLayOutScreen' })
        }>
    <View style style={styles.container}>
        <Image style={styles.photo} source={image_url}/>
        <View style={styles.container_text}>
            <Text style={styles.title}>
                {title}
            </Text>
            <Text style={styles.description}>
                {description}
            </Text>
        </View>
    </View>
    </TouchableOpacity>
    </ScrollView>
    </View>
    );
    };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        marginLeft:16,
        marginRight:16,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 5,
        backgroundColor: '#ffdf87',
        elevation: 2,
    },
    title: {
        fontSize: 25,
        color: '#000',
        flex: .25,
    },
    container_text: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 12,
        justifyContent: 'center',
    },
    description: {
        fontSize: 11,
        fontStyle: 'italic',
    },
    photo: {
        height: 100,
        width: 100,
    },
})

export default ClassView;

