import React, { useEffect, userContext } from "react";
import {
  StyleSheet,
  Text,
  Button,
  View,
  TextInput,
  SafeAreaView,
} from "react-native";
import { globalStyles } from "../global";

const LogInScreen = ({ navigation }) => {
  const [text, onChangeText] = React.useState(null);
  const [text2, onChangeText2] = React.useState(null);
  //Sets the Title to ''
  useEffect(() => {
    navigation.setOptions({
      headerTitle: "",
    });
  }, []);

  return (
    <SafeAreaView>
      <SafeAreaView>
        <Text style={styles.baseText}>LOGIN</Text>
        <SafeAreaView>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            allowFontScaling={true}
            placeholder="Username"
          />

          <TextInput
            style={styles.input}
            onChangeText={onChangeText2}
            value={text2}
            placeholder="Password"
          />
          <Text>Username - {text}</Text>
          <Text>Password - {text2}</Text>
        </SafeAreaView>
      </SafeAreaView>
      <SafeAreaView>
        <Button
          title="LOGIN"
          onPress={() =>
            navigation.navigate("ClassScreen", { name: "ClassScreen" })
          }
        />
      </SafeAreaView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "brown",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  baseText: {
    color: "orange",
    textAlign: "center",
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 50,
    fontSize: 50,
    textAlignVertical: "center",
    padding: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 20,
    borderWidth: 0.5,
    flex: 1,
  },
});

export default LogInScreen;
