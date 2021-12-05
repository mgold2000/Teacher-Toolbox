import { ADD_STUDENT, DELETE_STUDENT } from "../actions/types";

const initialState = {
  listOfStudents: [
    {
      classID: "C2-1230",
      studentID: "11257911",
      studentName: "Tuulikki Bene",
      image_url: require("../assets/Potluck.jpg"),
      grade: "Grade Here",
      attendace: "Present",
      seatID: "0",
    },
    {
      classID: "C2-1230",
      studentID: "StudentID (Test) 3",
      studentName: "Kerstin Nikki",
      image_url: "Image URL Here 1 ",
      grade: "Grade Here 1",
      attendace: "Present",
      seatID: "1",
    },
    {
      classID: "C2-1230",
      studentID: "11257912",
      studentName: "Tuulikki M",
      image_url: require("../assets/Potluck.jpg"),
      grade: "Grade Here",
      attendace: "Present",
      seatID: "2",
    },
    {
      classID: "C2-1230",
      studentID: "StudentID (Test) 4",
      studentName: "Nikki Nikki",
      image_url: "Image URL Here 1 ",
      grade: "Grade Here 1",
      attendace: "Present",
      seatID: "3",
    },
    {
      classID: "C2-1230",
      studentID: "11257913",
      studentName: "Benedicte L",
      image_url: require("../assets/Potluck.jpg"),
      grade: "Grade Here",
      attendace: "Present",
      seatID: "4",
    },
    {
      classID: "C2-1230",
      studentID: "StudentID (Test) 5",
      studentName: "Kerstin Kerstin",
      image_url: "Image URL Here 1 ",
      grade: "Grade Here 1",
      attendace: "Present",
      seatID: "5",
    },
    {
      classID: "C2-1233",
      studentID: "StudentID (Test) 6",
      studentName: "Seventh Son",
      image_url: "Image URL Here 1 ",
      grade: "Grade Here 1",
      attendace: "Present",
      seatID: "6",
    },
    {
      classID: "C2-1233",
      studentID: "StudentID (Test) 2",
      studentName: "Hai Marciano",
      image_url: "Image URL Here 1 ",
      grade: "Grade Here 1",
      attendace: "Attendance Here 1",
      seatID: "0",
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
          seatID: "#",
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
