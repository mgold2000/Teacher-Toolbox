import { ADD_STUDENT, DELETE_STUDENT } from "../actions/types";

const initialState = {
  listOfStudents: [
    {
      classID: "C2-1230",
      studentID: "11257911",
      studentName: "Tuulikki Benedicte ",
      image_url: require("../assets/Potluck.jpg"),
      grade: "Grade Here",
      attendace: "Present",
    },
    {
      classID: "C2-1230",
      studentID: "StudentID (Test) 3",
      studentName: "Kerstin Nikki",
      image_url: "Image URL Here 1 ",
      grade: "Grade Here 1",
      attendace: "Present",
    },
    {
      classID: "C2-1233",
      studentID: "StudentID (Test) 2",
      studentName: "Hai Marciano",
      image_url: "Image URL Here 1 ",
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
          classID: "C2-1233",
          studentID: "11223344",
          studentName: "Generic Student Name",
          image_url: require("../assets/Potluck.jpg"),
          attendacne: "Default Attendance ",
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
