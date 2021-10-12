import { createStore, combineReducers } from 'redux';
import ClassReducer from './reducers/ClassReducer';
import reducer from './reducers/reducer'    

const rootReducer = combineReducers({
  ClassReducer: ClassReducer,
  reducer: reducer,
})

const configureStore = () => createStore(rootReducer);

export default configureStore;