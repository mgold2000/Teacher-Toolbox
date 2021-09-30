import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, SafeAreaView, Button,Alert } from 'react-native';

export default function App() {
  //Functions Go Here
const handlePress = () => console.log("Text Pressed");
  return (
    <SafeAreaView style={styles.container}>
      <Button color ="orange" title="Click Me Fucker" 
      onPress={() => Alert.prompt("Title", "Message", text => console.log(text))}/>
      <Text numberOfLines={1} onPress={handlePress}> text</Text>
      <TouchableHighlight onPress={() => console.log("Image Tapped")} >
        <Image source={{     
          width:200,
          height: 200,
          uri: "https://picsum.photos/200/300"}}/>
      </TouchableHighlight>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: "orange"}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
