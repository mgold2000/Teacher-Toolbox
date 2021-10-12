import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ClassBox from './ClassBox'
import { useDispatch, useSelector } from 'react-redux';

//The Class Lis Component Displays a List of ClassBox
//It Takes in Data from an API
const ClassList = () => {
  const dispatch = useDispatch();

  const Classes = useSelector(state => state.ClassReducer.listOfClasses)
    return (
    <View style={styles.container}>
        <FlatList
                data={Classes}
                renderItem={({item}) => <ClassBox
                    classID={item.classID}
                    title={item.title}
                    classNum={item.classNum}
                    image_url={item.image_url}
                    backgroundClr={item.backgroundClr}
                />}
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