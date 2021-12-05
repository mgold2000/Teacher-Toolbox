import {
  CLICKED_ON_CLASS,
  ADD_CLASS,
  DELETE_CLASS,
  CHANGE_STUDENT_INDEX,
  CHANGE_TAKEN_ROLL,
  ADD_STUDENT,
  DELETE_STUDENT,
} from "./types";

export const clickedOnClass = (classID) => ({
  type: CLICKED_ON_CLASS,
  data: classID,
});
export const addClass = (clas) => ({
  type: ADD_CLASS,
  data: clas,
});
export const deleteClass = (key) => ({
  type: DELETE_CLASS,
  key: key,
});
export const addStudent = (stu) => ({
  type: ADD_STUDENT,
  data: stu,
});
export const deleteStudent = (key) => ({
  type: DELETE_STUDENT,
  key: key,
});
export const changeStudentIndex = (key) => ({
  type: CHANGE_STUDENT_INDEX,
  key: key,
});
export const changeTakenRoll = (key) => ({
  type: CHANGE_TAKEN_ROLL,
  key: key,
});
