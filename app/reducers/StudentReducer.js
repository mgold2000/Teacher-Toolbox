import { ADD_STUDENT, DELETE_STUDENT } from "../actions/types";

const initialState = {
  listOfStudents: [],
};

const ClassReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CLASS:
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
    case DELETE_CLASS:
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

export default ClassReducer;
