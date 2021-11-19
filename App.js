import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogInScreen from "./app/screens/LogInScreen";
import AssignmentListScreen from "./app/screens/AssignmentListScreen";
import ClassGradeScreen from "./app/screens/ClassGradeScreen";
import ClassScreen from "./app/screens/ClassScreen";
import CreateAssignmentScreen from "./app/screens/CreateAssignmentScreen";
import RoomLayOutScreen from "./app/screens/RoomLayOutScreen";
import SideBarScreen from "./app/screens/SideBarScreen";
import StudentScreen from "./app/screens/StudentScreen";
import TakingRollScreen from "./app/screens/TakingRollScreen";
import ClassList from "./app/components/ClassList";
import ClassBox from "./app/components/ClassBox";
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import configureStore from './app/store';
import { StyleSheet } from "react-native";


const Store = configureStore();

const Stack = createNativeStackNavigator();


export default App = () => {
  
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen title="" style={styles.headerStyle} name="LogInScreen" component={LogInScreen} />
          <Stack.Screen title="" style={styles.headerStyle} name="ClassScreen" component={ClassScreen} />
          <Stack.Screen title="" style={styles.headerStyle} name="AssignmentListScreen" component={AssignmentListScreen} />
          <Stack.Screen title="" style={styles.headerStyle} name="ClassGradeScreen" component={ClassGradeScreen} />
          <Stack.Screen title="" style={styles.headerStyle} name="CreateAssignmentScreen" component={CreateAssignmentScreen} />
          <Stack.Screen title="" style={styles.headerStyle} name="RoomLayOutScreen" component={RoomLayOutScreen} />
          <Stack.Screen title="" style={styles.headerStyle} name="SideBarScreen" component={SideBarScreen} />
          <Stack.Screen title="" style={styles.headerStyle} name="StudentScreen" component={StudentScreen} />
          <Stack.Screen title="" style={styles.headerStyle} name="TakingRollScreen" component={TakingRollScreen} />
          <Stack.Screen title="" style={styles.headerStyle} name="ClassList" component={ClassList} />
          <Stack.Screen title="" style={styles.headerStyle} name="ClassBox" component={ClassBox} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>


  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#545454'
  }
});
