import * as React from 'react';
import { View } from 'react-native';
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
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LogInScreen" component={LogInScreen}/>
        <Stack.Screen name="ClassScreen" component={ClassScreen} />
        <Stack.Screen name="AssignmentListScreen" component={AssignmentListScreen} />
        <Stack.Screen name="ClassGradeScreen" component={ClassGradeScreen} />
        <Stack.Screen name="CreateAssignmentScreen" component={CreateAssignmentScreen} />
        <Stack.Screen name="RoomLayOutScreen" component={RoomLayOutScreen} />
        <Stack.Screen name="SideBarScreen" component={SideBarScreen} />
        <Stack.Screen name="StudentScreen" component={StudentScreen} />
        <Stack.Screen name="TakingRollScreen" component={TakingRollScreen} />
        <Stack.Screen name="ClassList" component={ClassList} />
        <Stack.Screen name="ClassBox" component={ClassBox} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;