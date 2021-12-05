import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StyleSheet, Text, View, Button } from 'react-native';
import { addStudent } from "../actions/actions.js";



//Currently bugged dont navigate to this screen. Feel free to modify



const AddStudentScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <Text>Add students here!</Text>
        {
          students.possible.map((student, index) => (
            <Button
              key={ student }
              title={ `Add ${ student }` }
              onPress={() =>
                this.props.addStudent(index)
              }
            />
          ))
        }
        <Button
          title="Back to modroomlayout"
          onPress={() =>
            navigation.navigate('ModRoomLayoutScreen')
          }
        />
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = (state) => {
  const { students } = state
  return { students }
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
      addStudent,
    }, dispatch)
  );


export default connect(mapStateToProps, mapDispatchToProps)(AddStudentScreen);