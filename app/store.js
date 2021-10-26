import { createStore, combineReducers } from "redux";
import ClassReducer from "./reducers/ClassReducer";
import reducer from "./reducers/reducer";
import StudentReducer from "./reducers/StudentReducer";

const rootReducer = combineReducers({
  ClassReducer: ClassReducer,
  reducer: reducer,
  StudentReducer: StudentReducer,
});

const configureStore = () => createStore(rootReducer);

export default configureStore;
