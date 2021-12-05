import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogInScreen from "./app/screens/LogInScreen";
import AssignmentListScreen from "./app/screens/AssignmentListScreen";
import ClassGradeScreen from "./app/screens/ClassGradeScreen";
import ClassScreen from "./app/screens/ClassScreen";
import CreateAssignmentScreen from "./app/screens/CreateAssignmentScreen";
import ModRoomLayOutScreen from "./app/screens/ModRoomLayOutScreen";
import AddStudentScreen from './app/screens/AddStudentScreen';
import AddClassScreen from './app/screens/AddClassScreen';
import RoomLayOutScreen from "./app/screens/RoomLayOutScreen";
import SideBarScreen from "./app/screens/SideBarScreen";
import StudentScreen from "./app/screens/StudentScreen";
import TakingRollScreen from "./app/screens/TakingRollScreen";
import ClassList from "./app/components/ClassList";
import ClassBox from "./app/components/ClassBox";
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from "./app/store.js";
import configureStore from './app/store';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
 
const Store = configureStore();
 
const Stack = createNativeStackNavigator();
 
 
export default App = () => {
 
 return (
   <Provider store={store}>
     <NavigationContainer>
       <Stack.Navigator>
         <Stack.Screen title="" style={styles.headerStyle} name="LogInScreen" component={LogInScreen} />
         <Stack.Screen title="" style={styles.headerStyle} name="ClassScreen" component={ClassScreen} />
         <Stack.Screen title="" style={styles.headerStyle} name="AssignmentListScreen" component={AssignmentListScreen} />
         <Stack.Screen title="" style={styles.headerStyle} name="ClassGradeScreen" component={ClassGradeScreen} />
         <Stack.Screen title="" style={styles.headerStyle} name="CreateAssignmentScreen" component={CreateAssignmentScreen} />
         <Stack.Screen title="" style={styles.headerStyle} name="ModRoomLayOutScreen" component={ModRoomLayOutScreen} />
         <Stack.Screen title="" style={styles.headerStyle} name="RoomLayOutScreen" component={RoomLayOutScreen} />
         <Stack.Screen title="" style={styles.headerStyle} name="SideBarScreen" component={SideBarScreen} />
         <Stack.Screen title="" style={styles.headerStyle} name="StudentScreen" component={StudentScreen} />
         <Stack.Screen title="" style={styles.headerStyle} name="AddStudentScreen" component={AddStudentScreen} />
         <Stack.Screen title="" style={styles.headerStyle} name="AddClassScreen" component={AddClassScreen} />
         <Stack.Screen title="" style={styles.headerStyle} name="TakingRollScreen" component={TakingRollScreen} />
         <Stack.Screen title="" style={styles.headerStyle} name="ClassList" component={ClassList} />
         <Stack.Screen title="" style={styles.headerStyle} name="ClassBox" component={ClassBox} />
       </Stack.Navigator>
     </NavigationContainer>
 
   </Provider>
 )
};
 
const styles = StyleSheet.create({
 headerStyle: {
   backgroundColor: '#545454',
 }
});
 
/*
 
//const [students2, setStudents2] = useState();
 
 const load = async () => {
   try {
     let temp = [
       {
         classID: "C2-1230",
         studentID: "11257911",
         studentName: "Tuulikki Bene22",
         image_url: "Image URL Here 1 ",
         grade: "Grade Here",
         attendace: "Present",
         seatID: "7",
       },
       {
         classID: "C2-1230",
         studentID: "StudentID (Test) 3",
         studentName: "Kerstin Nikki2",
         image_url: "Image URL Here 1 ",
         grade: "Grade Here 1",
         attendace: "Present",
         seatID: "8",
       },
       {
         classID: "C2-1230",
         studentID: "11257912",
         studentName: "Tuulikki M22",
         image_url: "Image URL Here 1 ",
         grade: "Grade Here",
         attendace: "Present",
         seatID: "",
       },
       {
         classID: "C2-1230",
         studentID: "StudentID (Test) 4",
         studentName: "Nikki Nikki2",
         image_url: "Image URL Here 1 ",
         grade: "Grade Here 1",
         attendace: "Present",
         seatID: "3",
       },
       {
         classID: "C2-1230",
         studentID: "11257913",
         studentName: "Benedicte L22",
         image_url: "Image URL Here 1 ",
         grade: "Grade Here",
         attendace: "Present",
         seatID: "4",
       },
       {
         classID: "C2-1230",
         studentID: "StudentID (Test) 5",
         studentName: "Kerstin Kerstin2",
         image_url: "Image URL Here 1 ",
         grade: "Grade Here 1",
         attendace: "Present",
         seatID: "5",
       },
       {
         classID: "C2-1233",
         studentID: "StudentID (Test) 6",
         studentName: "Seventh Son2",
         image_url: "Image URL Here 1 ",
         grade: "Grade Here 1",
         attendace: "Present",
         seatID: "6",
       },
       {
         classID: "C2-1233",
         studentID: "StudentID (Test) 2",
         studentName: "Hai Marciano2",
         image_url: "Image URL Here 1 ",
         grade: "Grade Here 1",
         attendace: "Attendance Here 1",
         seatID: "0",
       },
     ];
     //setStudents2(temp);
    
     await AsyncStorage.setItem("MyName", JSON.stringify(temp))
     //let jsonValue = await AsyncStorage.getItem("MyName")
 
     //if (jsonValue !== null) {
     //  setStudents2(JSON.parse(jsonValue))
     //}
   } catch (err) {
     alert(err);
   }
 }
 
 useEffect(() => {
   load();
 }, []);
 
*/
 
 

