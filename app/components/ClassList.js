import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ClassBox from './ClassBox'

//The Class Lis Component Displays a List of ClassBox
//It Takes in Data from an API


const ClassList = () => {


    return (
    <View style={styles.container}>
        <FlatList
                data={[
                    { 
                      key:1,
                      title: 'Class1',
                      classNum: 'Description',
                      image_url: require('../assets/Potluck.jpg'),
                      backgroundClr: '#a8e6cf'
                    },
                    { 
                        key:2,
                        title: 'Class2',
                        classNum: 'Decription',
                        image_url: require('../assets/Potluck.jpg'),
                        backgroundClr: '#dcedc1'
                      },
                      { 
                        key:3,
                        title: 'Class3',
                        classNum: 'Decription',
                        image_url: require('../assets/Potluck.jpg'),
                        backgroundClr: '#ffd3b6'
                      },
                      { 
                          key:4,
                          title: 'Class4',
                          classNum: 'Decription',
                          image_url: require('../assets/Potluck.jpg'),
                          backgroundClr: '#ffaaa5'
                        },
                ]}
                renderItem={({item}) => <ClassBox
                    classID={item.key}
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