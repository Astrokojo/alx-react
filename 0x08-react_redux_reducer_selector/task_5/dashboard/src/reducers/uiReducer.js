import { Map } from 'immutable';
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../actions/uiActionTypes';

export const initialState = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {},
};

const uiReducer = (state = Map(initialState), action) => {
  switch (action.type) {
    case DISPLAY_NOTIFICATION_DRAWER:
      return state.set('isNotificationDrawerVisible', true);

    case HIDE_NOTIFICATION_DRAWER:
      return state.set('isNotificationDrawerVisible', false);

    case LOGIN_SUCCESS:
      return state.set('isUserLoggedIn', true);

    case LOGIN_FAILURE:
    case LOGOUT:
      return state.set('isUserLoggedIn', false); // using both cases (LOGIN_FAILURE, LOGOUT) as the same time because they expect the same response

    default:
      return state;
  }
};

export default uiReducer;
