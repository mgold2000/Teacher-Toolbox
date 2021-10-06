import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ClassView from '../components/ClassView'

const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
});


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
                renderItem={({item}) => <ClassView
                    title={item.title}
                    classNum={item.classNum}
                    image_url={item.image_url}
                    backgroundClr={item.backgroundClr}
                />}
            />
    </View>
    );
};

export default ClassList;