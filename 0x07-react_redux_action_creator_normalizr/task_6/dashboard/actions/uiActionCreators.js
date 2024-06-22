import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';
import { connect } from 'react-redux';

export const login = (email, password) => ({
    type: LOGIN,
    user: { email, password }
});

export const logout = () => ({
    type: LOGOUT
});

export const displayNotificationDrawer = () => ({
    type: DISPLAY_NOTIFICATION_DRAWER
});

export const hideNotificationDrawer = () => ({
    type: HIDE_NOTIFICATION_DRAWER
});

// Example of connecting them to dispatch (simulated usage)
export const boundLogin = (email, password) => dispatch => {
    return dispatch(login(email, password));
};

export const boundLogout = () => dispatch => {
    return dispatch(logout());
};

export const boundDisplayNotificationDrawer = () => dispatch => {
    return dispatch(displayNotificationDrawer());
};

export const boundHideNotificationDrawer = () => dispatch => {
    return dispatch(hideNotificationDrawer());
};
