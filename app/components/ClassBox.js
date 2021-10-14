import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TouchableWithoutFeedback} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {clickedOnClass} from '../actions/actions.js'
import {connect } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux';


//The Class Box Component Displays information of each class
    //Name, Image, ClassID
//The Teacher can click on a Class Box and be routed to it's roomlayout
function getColor(){
    if(index +1 > colors.length){
        index = 0;
    }else{
        index++;
    }
    return colors[index];
}
const colors = ["#acddde", "#caf1de", "#fef8dd", "#eif8dc", "#ffe7c7",];
var index = 0;
const ITEM_HEIGHT = 150;
const ClassBox = (props) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const submitClass = (classID) => dispatch(clickedOnClass(classID));

    return (
    <View > 
        
        <TouchableOpacity onPress={() =>{
                navigation.navigate('RoomLayOutScreen', { name: 'RoomLayOutScreen' }),
                submitClass(props.classID);
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
            backgroundColor: getColor(),   

        }} >
            
        <ScrollView>
            <View >
            <Image style={styles.photo} source={props.image_url}/>
            <View style={styles.container_text}>
                <Text style={styles.title}>
                    {props.title}
                </Text>
                <Text style={styles.classNum}>
                </Text>
            </View>
        </View>
        </ScrollView>
        </TouchableOpacity>
        <TouchableWithoutFeedback>
            <TouchableOpacity style={styles.leftBox} onPress={() => console.log("clicked the three buttons")}>
                <View style={styles.tinyDot}></View>
                <View style={styles.tinyDot}></View>
                <View style={styles.tinyDot}></View>
            </TouchableOpacity>
        </TouchableWithoutFeedback>
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
        flex: 5,
        right: -10,
        top: 5
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
    leftBox: {
        right:0,
        top: 0,
        position: 'absolute', 
        alignItems: 'center',
        alignContent: 'center',
        width: 60,
        height: 60, 
  
    },
    tinyDot: {
        width: 5,
        height: 5,
        backgroundColor: 'grey',
        borderRadius: 5/2,
        margin: 1.5,
        top: 15   
    }
})

const mapStateToProps = (state) => ({key: state.key});
const mapDispatchToProps = (dispatch) => ({
    clickedOnClass: () => dispatch({type: ActionTypes.CLICKED_ON_CLASS})
})
const connectComponent = connect(mapStateToProps, mapDispatchToProps);

export default connectComponent(ClassBox);
