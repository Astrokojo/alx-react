import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';
import { connect } from 'react-redux';

export const selectCourse = (index) => ({
  type: SELECT_COURSE,
  index
});

export const unSelectCourse = (index) => ({
  type: UNSELECT_COURSE,
  index
});

// Example of connecting them to dispatch (simulated usage)
export const boundSelectCourse = (index) => dispatch => {
  return dispatch(selectCourse(index));
};

export const boundUnSelectCourse = (index) => dispatch => {
  return dispatch(unSelectCourse(index));
};
