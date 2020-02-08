import { ADD_COURSE, DELETE_COURSE, UPDATE_COURSE, ADD_BOOK, DELETE_BOOK, UPDATE_BOOK } from './types';

export const addCourse = (course) => (
  (dispatch) => {
    dispatch({ type: ADD_COURSE, payload: { course } });
  }
);

export const deleteCourse = (course) => (
  (dispatch) => {
    dispatch({ type: DELETE_COURSE, payload: { course } });
  }
);

export const updateCourse = (course) => (
  (dispatch) => {
    dispatch({ type: UPDATE_COURSE, payload: { course } });
  }
);
