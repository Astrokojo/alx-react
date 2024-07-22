import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';
import { connect } from 'react-redux';

export const markAsRead = (index) => ({
    type: MARK_AS_READ,
    index
});

export const setNotificationFilter = (filter) => ({
    type: SET_TYPE_FILTER,
    filter
});

// Example of connecting them to dispatch (simulated usage)
export const boundMarkAsRead = (index) => dispatch => {
    return dispatch(markAsRead(index));
};

export const boundSetNotificationFilter = (filter) => dispatch => {
    return dispatch(setNotificationFilter(filter));
};
