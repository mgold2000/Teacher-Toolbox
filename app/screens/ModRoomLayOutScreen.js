import React, { Component, useEffect, userContext, useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  Button,
  View,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
  Modal,
  Animated,
  Alert,
  Dimensions,
  FlatList,
  Pressable,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { globalStyles } from "../global";
import { ADD_STUDENT } from "../actions/types";
import { changeStudentIndex, changeTakenRoll } from "../actions/actions.js";
//import { Container, Row, Col, Card } from 'react-bootstrap';
//import {Container, Row, Col, Card} from 'react-bootstrap';
import {DragDropContext} from 'react-beautiful-dnd';



const W = Dimensions.get("window").width;
const H = Dimensions.get("window").height;
var randomInt = 0;
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
const ModRoomLayOutScreen = ({ navigation }) => {
    //Sets the Title to ''
    const selectedData = useSelector((state) => state.reducer.classID);
    const dispatch = useDispatch();
    const Students = useSelector((state) => state.StudentReducer.listOfStudents);
    const currentStudent = useSelector(
        (state) => state.ClassReducer.currentStudentIndex
    );
    const takenRoll = useSelector((state) => state.ClassReducer.takenRoll);
    const [visible1, setVisible1] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);
    const [visible4, setVisible4] = useState(false);
    const [visible5, setVisible5] = useState(false);

    const ModLayOutPopUp = ({ visible, children }) => {
        const [showModal, setShowModal] = useState(visible);
        const scaleValue = useRef(new Animated.Value(0)).current;
        useEffect(() => {
            toggleModal();
        }, [visible]);
        const toggleModal = () => {
            if (visible) {
                setShowModal(true);
                Animated.spring(scaleValue, {
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: true,
                }).start();
            } else {
                setTimeout(() => setShowModal(false), 200);
                Animated.timing(scaleValue, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true,
                }).start();
            }
        };
        return (
            <Modal transparent visible={showModal}>
                <View style={styles.modalBackground}>
                    <Animated.View
                        style={[
                            styles.modalContainer,
                            { transform: [{ scale: scaleValue }] },
                        ]}
                    >
                        {children}
                    </Animated.View>
                </View>
            </Modal>
        );
    };



    //This renders the student as a button
    const renderStudent = (ID, name, sID, p) => {
        if (selectedData === ID) {
            return (

                <Pressable style={styles.sButton} >
                  <Text style={styles.sText}>{name}</Text>
                </Pressable>
            );
        }
        return false;
    };
    /*
        const allStudents = Students.map((Students, i) => {
            return (
                <div style={{ display: 'flex', justifyContent: 'center', height: '100%' }}>
                    <DragDropContext onDropEnd={result => console.log(result)}>
                        {Object.entries(columns).map(([id, column]) => {
                            return (
                                <Droppable droppableId={id}>
                                    {(provided, snapshot) => {
                                        return (
                                            <div
                                                {...provided.droppableProps}
                                                ref={provided.innerRef}
                                                style={{
                                                    background: snapshot.isDraggingOver ? 'lightblue' : 'lightgrey',
                                                    padding: 4,
                                                    width: 250,
                                                    minHeight: 500
                                                }}
                                            ></div>
                                        )
                                    }}
                                </Droppable>
                            )
                        })}
                    </DragDropContext>
                </div>
            );
        });*/

    /*
        //This renders the student as a button
        const renderStudent = (ID, name, sID, p) => {
            if (selectedData === ID) {
                return (
                    <Container>
                        <DragDropContext>
                            <Droppable
                                droppableId="studentSequence"
                                direction="horizontal"
                                type="column"
                            >
                                {() =>
                                    <Row
                                        className="my-4"
                                        {...provided.droppableProps}
                                        ref="provided.innerRef"
                                    >{allStudents}
                                        {provided.placeholder}
                                    </Row>}
                                <Button
                                    title={name}
                                //onPress={() => //change to let it be moved and be in little boxes
    
                                />
                            </Droppable>
                        </DragDropContext>
                    </Container>
                );
            }
            return false;
        };
    
    */
        
          return (
            <View>
              <ModLayOutPopUp visible={visible5}>
                <View style={{ alignItems: "center" }}>
                  <View style={styles.header}></View>
                  <View>
                    <Text style={styles.modalText}>
                      Do you wish to save changes to the Room Layout?
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        top: "4%",
                      }}
                    >
                      <Button
                        title="Cancel"
                        color="#528282"
                        onPress={() => setVisible5(false)}
                      />
                      <Button title="Save"
                        onPress={() =>
                          navigation.navigate("RoomLayOutScreen", { name: "RoomLayOutScreen" },
                          setVisible5(false))
                        }
                      />
                    </View>
                  </View>
                </View>
              </ModLayOutPopUp>
              <Text style={globalStyles.baseText}>Modify Class Layout</Text>
              
              <FlatList
                data={Students}
                renderItem={({ item }) => (
                     <View
                     style={{
                      flex: 1,
                      flexDirection: 'column',
                      margin: 1
                    }}>
                     {renderStudent(
                       item.classID,
                       item.studentName,
                       item.studentID,
                       item.image_url
                     )}
                     </View>
                )}
                //numColumns={3}
                keyExtractor={(item, studentID) => studentID.toString()}
              />
        
              <View style={styles.thinline}></View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  position: "absolute",
                  top: H - 200,
                  width: "99%",
                }}
              >
                <TouchableOpacity style={styles.box}>
                  <Text style={styles.buttonText}></Text>
                  <Image
                    style={styles.tinyIcon}
                    source={require("../assets/Checklist.png")}
                  ></Image>
                </TouchableOpacity>
                <TouchableOpacity style={styles.box}>
                  <Text style={styles.buttonText}></Text>
                  <Image
                    style={styles.tinyIcon}
                    source={require("../assets/Hand.png")}
                  ></Image>
                </TouchableOpacity>
                <TouchableOpacity style={styles.box}>
                  <Text style={styles.buttonText}></Text>
                  <Image
                    style={styles.tinyIcon}
                    source={require("../assets/Checklist.png")}
                  ></Image>
                </TouchableOpacity>
              </View>
              <TouchableWithoutFeedback>
                <TouchableOpacity
                  style={styles.leftBox}
                  onPress={() => setVisible5(true)}
                >
                  <View style={styles.tinyDot}></View>
                  <View style={styles.tinyDot}></View>
                  <View style={styles.tinyDot}></View>
                </TouchableOpacity>
              </TouchableWithoutFeedback>
            </View>
          );
        };
const styles = StyleSheet.create({
    box: {
        width: W / 3,
        height: 100,
        justifyContent: "center",
        alignItems: "center",
    },
    tinyDot: {
        width: 5,
        height: 5,
        backgroundColor: "#545454",
        borderRadius: 5 / 2,
        margin: 2,
        top: 15,
    },
    leftBox: {
        right: -5,
        top: 0,
        position: "absolute",
        alignItems: "center",
        alignContent: "center",
        width: 60,
        height: 60,
    },
    buttonText: {
        textAlign: "center",
        alignItems: "center",
        fontSize: 12,
        fontWeight: "bold",
        justifyContent: "center",
        margin: 12,
        textAlignVertical: "center",
        color: "#757575",
    },
    modalBackground: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    modalContainer: {
        width: "90%",
        backgroundColor: "white",
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderRadius: 20,
        elevation: 20,
    },
    modalText: {
        fontSize: 20,
        textAlign: "center",
        color: "#363636",
    },
    box1: {
        flex: 0.25,
        backgroundColor: "white",
        borderRadius: 18,
        padding: 60,
        elevation: 2,
        top: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    photo: {
        height: 140 * 0.8,
        width: 140 * 0.8,
        borderRadius: (200 * 0.8) / 2,
        left: 35,
        bottom: 15,
        borderColor: "#d6d6d6",
        backgroundColor: "orange",
        alignItems: "center",
        justifyContent: "center",
    },
    tinyIcon: {
        height: H * 0.05,
        width: W * 0.1,
    },
    thinline: {
        width: W,
        height: 1,
        backgroundColor: "grey",
        top: H * 0.75,
        position: "absolute",
    },
    sButton: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 12,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'blue',
    },
    sText: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
  
});

export default ModRoomLayOutScreen;
