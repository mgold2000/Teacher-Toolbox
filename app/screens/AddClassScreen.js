import AsyncStorage from '@react-native-async-storage/async-storage';

import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';



export default function App() {
    const [name, setName] = useState();
    const [user, setUser] = useState();
    
    const [classID, setClassID] = useState();
    const [className, setClassName] = useState();
    const [title, setTitle] = useState();


    const save = async () => {
        try {
            //await AsyncStorage.clear()
            if (user === undefined) {
                setUser([])
            }

            let temp = {
                classID: classID,
                className: className,
                backgroundClr: "white",
                title: title,
                image_url: require("../assets/Class.png"),
            };

            user.push(temp);

            await AsyncStorage.setItem("MyClass", JSON.stringify(user));


        } catch (err) {
            alert(err)
        }


    }

    const load = async () => {
        try {
            setUser([])
            let jsonValue = await AsyncStorage.getItem("MyClass")

            if (jsonValue !== null) {
                setName(jsonValue)
                setUser(JSON.parse(jsonValue))
            }
        } catch (err) {
            alert(err);
        }
    }

    const remove = async () => {
        try {
            await AsyncStorage.removeItem("MyClass");
        } catch (err) {
            alert(err);
        } finally {
            setName("")
        }
    }

    useEffect(() => {
        load();
    }, []);

    return (
        <View style={styles.container}>
            <ScrollView style={{ height: 30 }}>
                <Text>{name}</Text>
            </ScrollView>

            <TextInput style={styles.input} placeholder="Class ID ie:C2-1230" onChangeText={(text) => setClassID(text)} />
            <TextInput style={styles.input} placeholder="Class Name ie:My Class 1" onChangeText={(text) => setClassName(text)} />
            <TextInput style={styles.input} placeholder="Title ie:Class 1" onChangeText={(text) => setTitle(text)} />

            <TouchableOpacity style={styles.button} onPress={() => save()} >
                <Text style={{ color: "white" }}>Save Class</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.button} onPress={() => remove()} >
                <Text style={{ color: "white" }}>Clear All Classes</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => load()} >
                <Text style={{ color: "white" }}>Load All Classes</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    name: {
        fontSize: 24,
        fontWeight: "300",
    },
    input: {
        borderWidth: 1,
        borderColor: 'orange',
        alignSelf: "stretch",
        margin: 13,
        height: 64,
        borderRadius: 6,
        paddingHorizontal: 16,
        fontSize: 24,
        fontWeight: "300",
    },
    button: {
        backgroundColor: "orange",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "stretch",
        paddingVertical: 12,
        paddingHorizontal: 32,
        marginTop: 5,
        marginBottom: 18,
        marginHorizontal: 32,
        borderRadius: 6,
    }

});

/*
export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Student Name</Text>
                <TouchableOpacity onPress={this.saveData}>
                    <Text>click me to save data</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.displayData}>
                    <Text>click me to display data</Text>
                </TouchableOpacity>
            </View>
        )
    }

    saveData() {
        let obj = {
            name: 'John Doe',
            email: 'test@gmail.com',
            city: 'Stockholm',
        }
        AsyncStorage.setItem('user', JSON.stringify(obj));
    }

    displayData = async () => {
        try {
            let user = await AsyncStorage.getItem('user');
            let parsed = JSON.parse(user);
            alert(parsed.email);
        }
        catch(error) {
            alert(error);
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})
*/