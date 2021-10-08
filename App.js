import * as React from 'react';
import { View } from 'react-native';
import store from './app/store'
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
import {Provider} from 'react-redux'
const Stack = createNativeStackNavigator();



const App = (props) => (


    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{title: '', headerStyle:{ backgroundColor: '#545454'}}} name="LogInScreen" component={LogInScreen}/>
        <Stack.Screen options={{title: '', headerStyle:{ backgroundColor: '#545454'}}} name="ClassScreen" component={ClassScreen} />
        <Stack.Screen options={{title: '', headerStyle:{ backgroundColor: '#545454'}}} name="AssignmentListScreen" component={AssignmentListScreen} />
        <Stack.Screen options={{title: '', headerStyle:{ backgroundColor: '#545454'}}} name="ClassGradeScreen" component={ClassGradeScreen} />
        <Stack.Screen options={{title: '', headerStyle:{ backgroundColor: '#545454'}}} name="CreateAssignmentScreen" component={CreateAssignmentScreen} />
        <Stack.Screen options={{title: '', headerStyle:{ backgroundColor: '#545454'}}} name="RoomLayOutScreen" component={RoomLayOutScreen} />
        <Stack.Screen options={{title: '', headerStyle:{ backgroundColor: '#545454'}}} name="SideBarScreen" component={SideBarScreen} />
        <Stack.Screen options={{title: '', headerStyle:{ backgroundColor: '#545454'}}} name="StudentScreen" component={StudentScreen} />
        <Stack.Screen options={{title: '', headerStyle:{ backgroundColor: '#545454'}}} name="TakingRollScreen" component={TakingRollScreen} />
        <Stack.Screen options={{title: '', headerStyle:{ backgroundColor: '#545454'}}} name="ClassList" component={ClassList} />
        <Stack.Screen options={{title: '', headerStyle:{ backgroundColor: '#545454'}}} name="ClassBox" component={ClassBox} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>

);

export default App;