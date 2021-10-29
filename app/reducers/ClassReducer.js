import { ADD_CLASS, DELETE_CLASS } from "../actions/types";

const initialState = {
  listOfClasses: [
    {
      classID: "C2-1230",
      className: "Class Name 1",
      backgroundClr: "white",
      title: "Class " + "1",
      image_url: require("../assets/Potluck.jpg"),
    },
  ],
};

const ClassReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CLASS:
      return {
        ...state,
        listOfClasses: state.listOfClasses.concat({
          classID: "C2-123" + state.listOfClasses.length,
          className: "Class " + (state.listOfClasses.length + 1),
          backgroundClr: "white",
          title: "Class " + (state.listOfClasses.length + 1),
          image_url: require("../assets/Potluck.jpg"),
        }),
      };
    case DELETE_CLASS:
      return {
        ...state,
        listOfClasses: state.listOfClasses.filter(
          (item) => item.key !== action.key
        ),
      };
    default:
      return state;
  }
};

export default ClassReducer;
