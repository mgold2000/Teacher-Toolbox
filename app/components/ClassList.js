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
                      description: 'Decription',
                      image_url: require('../assets/Potluck.jpg'),
                    },
                    { 
                        key:2,
                        title: 'Class2',
                        description: 'Decription',
                        image_url: require('../assets/Potluck.jpg'),
                      },
                ]}
                renderItem={({item}) => <ClassView
                    title={item.title}
                    description={item.description}
                    image_url={item.image_url}
                />}
            />
    </View>
    );
};

export default ClassList;