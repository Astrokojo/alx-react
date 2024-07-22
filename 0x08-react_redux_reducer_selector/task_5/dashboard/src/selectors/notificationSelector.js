import { Map } from 'immutable';

export const filterTypeSelected = state => state.getIn(['filter']);

export const getNotifications = state => state.getIn(['notifications']);

export const getUnreadNotifications = state => {
    const notifications = state.getIn(['notifications']);
    return notifications.filter(notification => !notification.get('isRead'));
};
