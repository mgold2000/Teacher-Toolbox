import { ADD_STUDENT, DELETE_STUDENT } from "../actions/types";

const initialState = {
  listOfStudents: [
    {
      classID: "C2-1230",
      studentID: "11257911",
      studentName: "Tuulikki Benedicte ",
      image_url: require("../assets/Potluck.jpg"),
      grade: "Grade Here",
      attendace: "Attendance Here",
    },
    {
      classID: "C2-1234",
      studentID: "StudentID (Test) 3",
      studentName: "Kerstin Nikki",
      image_url: "Image URL HEre 1 ",
      grade: "Grade Here 1",
      attendace: "Attendance Here 1",
    },
    {
      classID: "C2-1233",
      studentID: "StudentID (Test) 2",
      studentName: "Hai Marciano",
      image_url: "Image URL HEre 1 ",
      grade: "Grade Here 1",
      attendace: "Attendance Here 1",
    },
  ],
};

const StudentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_STUDENT:
      return {
        ...state,
        listOfStudents: state.listOfStudents.concat({
          classID: state.listOfStudents.length + 1,
          classNum: "Class " + (state.listOfStudents.length + 1),
          backgroundClr: "white",
          title: "Class " + (state.listOfStudents.length + 1),
          image_url: require("../assets/Potluck.jpg"),
        }),
      };
    case DELETE_STUDENT:
      return {
        ...state,
        listOfStudents: state.listOfStudents.filter(
          (item) => item.key !== action.key
        ),
      };
    default:
      return state;
  }
};

export default StudentReducer;
