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
import { changeStudentIndex, changeTakenRoll } from "../actions/actions.js";
import { ADD_STUDENT } from "../actions/types";

const W = Dimensions.get("window").width;
const H = Dimensions.get("window").height;
var randomInt = 0;
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}


//formatting the flatlist
const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
  while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
    data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow = numberOfElementsLastRow + 1;
  }

  return data;
}


const RoomLayOutScreen = ({ navigation }) => {
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

  //This function changes the random Integer for the random student
  const changeRandomInt = (size) => {
    while (true) {
      randomInt = getRandomInt(0, size);
      if (Students[randomInt].classID == selectedData) {
        break;
      }
    }
  };

  //Function to Change The Current Student on the take roll Button
  const changeStudent = () => {
    var classSize = 0;
    for (var i = 0; i < Students.length; i++) {
      if (Students[i].classID === selectedData) {
        classSize++;
      }
    }

    if (currentStudent + 1 == classSize) {
      dispatch(changeTakenRoll(0));
      setVisible1(false);
    }

    for (var i = currentStudent + 1; i < Students.length; i++) {
      if (Students[i].classID == selectedData) {
        dispatch(changeStudentIndex(i));
        break;
      }
    }
  };

  //This is the modal pop up for the take roll
  const TakeRollPopUp = ({ visible, children }) => {
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
              globalStyles.container,
              { transform: [{ scale: scaleValue }] },
            ]}
          >
            {children}
          </Animated.View>
        </View>
      </Modal>
    );
  };

  const RandomStudentPopUp = ({ visible, children }) => {
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
              globalStyles.container,
              { transform: [{ scale: scaleValue }] },
            ]}
          >
            {children}
          </Animated.View>
        </View>
      </Modal>
    );
  };

  const AddStudentPopUp = ({ visible, children }) => {
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

  //This is the pop up for the top three
  const ChangeLayOutPopUp = ({ visible, children }) => {
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
  const renderStudent = (ID, name, sID, p, seatID) => {
    if (selectedData === ID) {
      return (
        <Pressable style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'white' : 'blue',
          },
          styles.sButton,
        ]}
          onPress={() =>
            navigation.navigate("StudentScreen", {
              studentName: name,
              classID: ID,
              studentID: sID,
              photo: p,
            })
          } >
          <Text style={styles.sText}>{name}</Text>
        </Pressable>
      );
    }
    return false;
  };

  const renderTakeRoll = (t) => {
    if (t === 1) {
      return (
        <TakeRollPopUp visible={visible1}>
          <View
            style={[
              globalStyles.container,
              {
                // Try setting `flexDirection` to `"row"`.
                flexDirection: "column",
              },
            ]}
          >
            <View style={[styles.box1, { flexDirection: "row" }]}>
              <TouchableOpacity
                style={{
                  poisiton: "absolute",
                  left: H / 4 + 20,
                  top: -129,
                }}
                onPress={() => setVisible1(false)}
              >
                <Text style={{ fontSize: 20 }}> x</Text>
              </TouchableOpacity>

              <View>
                <Image
                  style={styles.photo}
                  source={require("../assets/StudentIcon.png")}
                />
                <Text style={{ fontSize: 30 }}>
                  {Students[currentStudent].studentName}
                </Text>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    top: "15%",
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity
                    style={{
                      flex: 0.75,
                      backgroundColor: "#ff7d7d",
                      borderRadius: 16,
                      width: "42%",
                      height: "200%",
                      alignItems: "center",
                      justifyContent: "center",
                      left: -7,
                      padding: 10,
                    }}
                    onPress={() => {
                      changeStudent();
                    }}
                  >
                    <Text>Absent</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      flex: 0.75,
                      backgroundColor: "#80e37b",
                      borderRadius: 16,
                      width: "60%",
                      height: "200%",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: 10,
                      left: 7,
                    }}
                    onPress={() => {
                      changeStudent();
                    }}
                  >
                    <Text>Present</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </TakeRollPopUp>
      );
    } else {
      return (
        <TakeRollPopUp visible={visible1}>
          <View
            style={[
              globalStyles.container,
              {
                flexDirection: "column",
              },
            ]}
          >
            <View style={[styles.box1, { flexDirection: "row" }]}>
              <TouchableOpacity
                style={{
                  poisiton: "absolute",
                  left: H / 4 + 70,
                  top: -129,
                }}
                onPress={() => setVisible1(false)}
              >
                <Text style={{ fontSize: 20 }}> x</Text>
              </TouchableOpacity>

              <View>
                <Text style={{ fontSize: 30 }}>Already Taken Roll</Text>
              </View>
            </View>
          </View>
        </TakeRollPopUp>
      );
    }
  };

  return (
    <View>
      {renderTakeRoll(takenRoll)}

      <RandomStudentPopUp visible={visible2}>
        <View
          style={[
            globalStyles.container,
            {
              // Try setting `flexDirection` to `"row"`.
              flexDirection: "column",
            },
          ]}
        >
          <View style={[styles.box1, { flexDirection: "row" }]}>
            <View>
              <View style={styles.photo}>
                <Text>Photo</Text>
              </View>
              <Text style={{ fontSize: 30 }}>
                {Students[randomInt].studentName}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  top: "15%",
                }}
              >
                <Button
                  title="Cancel"
                  color="#528282"
                  onPress={() => {
                    setVisible2(false);
                    changeRandomInt(Students.length);
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </RandomStudentPopUp>

      <AddStudentPopUp visible={visible3}>
        <View style={{ alignItems: "center" }}>
          <View style={styles.header}></View>
          <View>
            <Text style={styles.modalText}>
              Would you like to add a student?
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
                onPress={() => setVisible3(false)}
              />
              <Button
                title="Confirm"
                //onPress={() => setVisible3(false)}
                onPress={() => 
                navigation.navigate("AddStudentScreen", { name: "AddStudentScreen" },
                setVisible3(false))}
              />
            </View>
          </View>
        </View>
      </AddStudentPopUp>

      <ChangeLayOutPopUp visible={visible4}>
        <View style={{ alignItems: "center" }}>
          <View style={styles.header}></View>
          <View>
            <Text style={styles.modalText}>
              Do you wish to make changes to the Room Lay Out?
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
                onPress={() => setVisible4(false)}
              />
              <Button title="Confirm"
                onPress={() =>
                  navigation.navigate("ModRoomLayOutScreen", { name: "ModRoomLayOutScreen" },
                    setVisible4(false))
                }
              />
            </View>
          </View>
        </View>
      </ChangeLayOutPopUp>
      <Text style={globalStyles.baseText}>Class {selectedData}</Text>


      <FlatList
        data={formatData(Students, 3)}
        numColumns={3}
        renderItem={({ item, index }) => (
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
              item.image_url,
              item.seatID
            )}
          </View>
        )}

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
        <TouchableOpacity style={styles.box} onPress={() => setVisible1(true)}>
          <Text style={styles.buttonText}>Take Roll</Text>
          <Image
            style={styles.tinyIcon}
            source={require("../assets/Checklist.png")}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box} onPress={() => setVisible2(true)}>
          <Text style={styles.buttonText}>Call Random Student</Text>
          <Image
            style={styles.tinyIcon}
            source={require("../assets/Hand.png")}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box} onPress={() => setVisible3(true)}>
          <Text style={styles.buttonText}>Add Student</Text>
          <Image
            style={styles.tinyIcon}
            source={require("../assets/Checklist.png")}
          ></Image>
        </TouchableOpacity>
      </View>
      <TouchableWithoutFeedback>
        <TouchableOpacity
          style={styles.leftBox}
          onPress={() => setVisible4(true)}
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
    width: "80%",
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
  },
  sText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default RoomLayOutScreen;
