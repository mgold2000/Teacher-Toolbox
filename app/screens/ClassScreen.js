import React, { useEffect, userContext, useRef } from "react";
import {
  StyleSheet,
  Text,
  Button,
  Animated,
  Modal,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import ClassList from "../components/ClassList";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addClass } from "../actions/actions.js";
import { globalStyles } from "../global";

//This is the Screen displaying the list of Classes the teacher has
const W = Dimensions.get("window").width;
const H = Dimensions.get("window").height;

const ClassScreen = ({ navigation }) => {
  const [clas, setClass] = useState("");
  const dispatch = useDispatch();
  const submitClass = (clas) => dispatch(addClass(clas));
  const [visible1, setVisible1] = useState(false);
  const AddClassPopUp = ({ visible, children }) => {
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

  return (
    <View style={styles.container}>
      <AddClassPopUp visible={visible1}>
        <View style={[styles.box1, { flex: 0.25 }, { flexDirection: "row" }]}>
          <TouchableOpacity
            style={{
              poisiton: "absolute",
              left: H / 4 + 20,
              top: -129,
            }}
            onPress={() => setVisible1(false)}
          >
            <Text style={{ fontSize: 20 }}>x</Text>
          </TouchableOpacity>
          <Text>Add Class</Text>
        </View>
      </AddClassPopUp>
      <Text style={styles.baseText}>Class</Text>
      <ClassList />
      <TouchableOpacity
        style={styles.addClassButton}
        onPress={() => navigation.navigate("AddClassScreen", { name: "AddClassScreen" })}
      >
        <Text style={({ fontSize: 25 }, { textAlign: "center" })}>
          ADD CLASS
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  baseText: {
    color: "black",
    textAlign: "left",
    fontWeight: "bold",
    marginTop: 5,
    fontSize: 30,
    textAlignVertical: "center",
    left: 6,
  },
  container: {
    flex: 1,
    backgroundColor: "#FCFCFC",
  },
  addClassButton: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
    position: "absolute",
    left: W - 140 - (W - 140) / 2,
    bottom: 20,
    backgroundColor: "orange",
    width: 140,
    height: 50,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#d6d6d6",
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
    textAlign: "center",
  },
});

export default ClassScreen;
