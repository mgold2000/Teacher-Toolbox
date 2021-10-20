import React, { useEffect, userContext, useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  Button,
  View,
  width,
  height,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Modal,
  Animated,
} from "react-native";
import { useSelector } from "react-redux";

const WIDTH = 1125;
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
          style={[styles.container, { transform: [{ scale: scaleValue }] }]}
        >
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

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

const RoomLayOutScreen = ({ navigation }) => {
  //Sets the Title to ''
  const selectedData = useSelector((state) => state.reducer.classID);
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  return (
    <View>
      <TakeRollPopUp visible={visible1}>
        <View style={{ alignItems: "center" }}>
          <View style={styles.header}></View>
          <TouchableOpacity onPress={() => setVisible1(false)}>
            <Text>
              This will display a student picture and name. ALong with buttons
              that say present or absent{" "}
            </Text>
          </TouchableOpacity>
        </View>
      </TakeRollPopUp>

      <RandomStudentPopUp visible={visible2}>
        <View
          style={[
            styles.container,
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
              <Text style={{ fontSize: 30 }}>Student Name</Text>
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
                  onPress={() => setVisible2(false)}
                />
              </View>
            </View>
          </View>
        </View>
      </RandomStudentPopUp>

      <ChangeLayOutPopUp visible={visible3}>
        <View style={{ alignItems: "center" }}>
          <View style={styles.header}></View>
          <View>
            <Text style={styles.modalText}>
              Do you fish to make changes to the Room Lay Out?
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
              <Button title="Confim" />
            </View>
          </View>
        </View>
      </ChangeLayOutPopUp>
      <Text style={styles.baseText}>Class {selectedData}</Text>
      <Button
        title="Go to Student Screen"
        onPress={() =>
          navigation.navigate("StudentScreen", { name: "StudentScreen" })
        }
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          position: "absolute",
          bottom: -540,
        }}
      >
        <TouchableOpacity style={styles.box} onPress={() => setVisible1(true)}>
          <Text style={styles.buttonText}>Take Roll</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box} onPress={() => setVisible2(true)}>
          <Text style={styles.buttonText}>Call Random Student</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box}>
          <Text style={styles.buttonText}>Take Roll</Text>
        </TouchableOpacity>
      </View>
      <TouchableWithoutFeedback>
        <TouchableOpacity
          style={styles.leftBox}
          onPress={() => setVisible3(true)}
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
  background: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  baseText: {
    color: "orange",
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 50,
    fontSize: 30,
    top: -40,
    textAlignVertical: "center",
  },
  box: {
    width: WIDTH / 3 / 3 - 4.5,
    height: 100,
    backgroundColor: "orange",
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 25,
    margin: 2,
    bottom: -50,
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
    fontSize: 20,
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
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default RoomLayOutScreen;
