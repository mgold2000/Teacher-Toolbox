import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet } from "react-native";
import ClassBox from "./ClassBox";
import { useDispatch, useSelector } from "react-redux";
import { globalStyles } from "../global";
import AsyncStorage from '@react-native-async-storage/async-storage';

//The Class Lis Component Displays a List of ClassBox
//It Takes in Data from an API
const ClassList = () => {
  const [classes2, setClasses2] = useState();
  const load = async () => {
    setClasses2([{
    }])
    try {
      let jsonValue = await AsyncStorage.getItem("MyClass")

      if (jsonValue !== null) {
        setClasses2(JSON.parse(jsonValue))
      }
    } catch (err) {
      alert(err);
    }
  }
  useEffect(() => {
    load();
  }, []);




  const dispatch = useDispatch();

  const Classes = useSelector((state) => state.ClassReducer.listOfClasses);
  //const Classes2 = useSelector((state) => state.ClassReducer.listOfClasses);
  
  return (
    <View style={styles.container}>
      <FlatList
        data={Classes}
        renderItem={({ item }) => (
          <ClassBox
            classID={item.classID}
            title={item.title}
            classNum={item.classNum}
            image_url={item.image_url}
            backgroundClr={item.backgroundClr}
          />
        )}
        keyExtractor={(item, classID) => classID.toString()}
      />
        <FlatList
        data={classes2}
        renderItem={({ item }) => (
          <ClassBox
            classID={item.classID}
            title={item.title}
            classNum={item.classNum}
            image_url={item.image_url}
            backgroundClr={item.backgroundClr}
          />
        )}
        keyExtractor={(item, classID) => classID.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default ClassList;
