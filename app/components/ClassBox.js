import React from 'react';
import store from '../store'
import * as Font from 'expo-font'
import {StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {clickedOnClass} from '../actions/actions.js'
import {connect } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux';


//The Class Box Component Displays information of each class
    //Name, Image, ClassID
//The Teacher can click on a Class Box and be routed to it's roomlayout


const ITEM_HEIGHT = 150;
const ClassBox = (props) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const clickedOnClass = (clas) => dispatch(clickedOnClass(clas));
    return (
    <View > 
        <TouchableOpacity onPress={() =>{
                navigation.navigate('RoomLayOutScreen', { name: 'RoomLayOutScreen' }),
                store.dispatch(clickedOnClass(props.classID));
            }
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
            backgroundColor: props.backgroundClr,   

        }} >
            <ScrollView>
        <View >
            <Image style={styles.photo} source={props.image_url}/>
            <View style={styles.container_text}>
                <Text style={styles.title}>
                    {props.title}
                </Text>
                <Text style={styles.classNum}>
                    {props.classNum}
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

const mapStateToProps = (state) => ({key: state.key});
const mapDispatchToProps = (dispatch) => ({
    clickedOnClass: () => dispatch({type: ActionTypes.CLICKED_ON_CLASS})
})
const connectComponent = connect(mapStateToProps, mapDispatchToProps);

export default connectComponent(ClassBox);
