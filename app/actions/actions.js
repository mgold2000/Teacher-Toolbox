import { CLICKED_ON_CLASS, ADD_CLASS, DELETE_CLASS } from "./types";

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
