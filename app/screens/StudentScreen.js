import React, { useEffect, userContext } from "react";
import {
  StyleSheet,
  Text,
  Button,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { globalStyles } from "../global";

const W = Dimensions.get("window").width;
const H = Dimensions.get("window").height;
const WelcomeScreen = (props) => {
  //Sets the Title to ''
  return (
    <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: "column",
        },
      ]}
    >
      <View style={[styles.box, { flexDirection: "row" }]}>
        <View>
          <View style={styles.photo}>
            <Text>Photo</Text>
          </View>
          <Text style={{ margin: 10 }}>Student Name</Text>
        </View>
        <View style={{ flex: 1, left: 50 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold", paddingBottom: 2 }}>
            STUDENT ID
          </Text>
          <Text style={{ paddingBottom: 15 }}>The Students name</Text>
          <Text style={{ fontSize: 20, fontWeight: "bold", paddingBottom: 2 }}>
            CLASS ID
          </Text>
          <Text>The Students name</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.box1}>
        <Text style={styles.titleText}>View Grades </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box1}>
        <Text style={styles.titleText}>View Attendance </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  baseText: {
    padding: 5,
  },
  box: {
    flex: 0.25,
    backgroundColor: 10,
    padding: 10,
    borderColor: 12,
    borderWidth: 3,
    borderRadius: 18,
    elevation: 2,
    top: 10,
    padding: 10,
    marginBottom: 4,
    marginLeft: 2,
    marginRight: 2,
    borderColor: "#d6d6d6",
    borderTopWidth: 0,
    borderLeftWidth: 2.5,
    borderRightWidth: 2.75,
    borderWidth: 5,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  photo: {
    height: 140 * 0.8,
    width: 140 * 0.8,
    borderRadius: (200 * 0.8) / 2,
    borderColor: "#d6d6d6",
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  box1: {
    flex: 0.15,
    backgroundColor: 20,
    padding: 10,
    borderColor: 12,
    borderWidth: 3,
    borderRadius: 18,
    elevation: 2,
    top: 30,
    padding: 10,
    marginBottom: 30,
    marginLeft: 2,
    marginRight: 2,
    borderColor: "#d6d6d6",
    borderTopWidth: 0,
    borderLeftWidth: 2.5,
    borderRightWidth: 2.75,
    borderWidth: 5,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default WelcomeScreen;
