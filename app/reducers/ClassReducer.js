import { ADD_CLASS, DELETE_CLASS } from '../actions/types';

const initialState = {
  listOfClasses: []
}
  


const ClassReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case ADD_CLASS:
      return {
        ...state,   
        listOfClasses: state.listOfClasses.concat({
          classID: Math.random(),
          classNum: "Class 1",
          backgroundClr:'orange',
          title: "Class 1",
          image_url: './assets/Potluck.jpg'
        })
      };
    case DELETE_CLASS:
      return {
        ...state,
        listOfClasses: state.listOfClasses.filter((item) =>
          item.key !== action.key)
      };
    default:
      return state;
  }
}

export default ClassReducer;