import { Map, List } from 'immutable';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications';

const initialState = Map({
    notifications: List(), // Initialize notifications as an Immutable List
    filter: 'DEFAULT'
});

const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_NOTIFICATIONS_SUCCESS:
            const normalizedData = notificationsNormalizer(action.data);
            return state.mergeIn(['notifications'], List(normalizedData.entities.notifications.values()));

        case MARK_AS_READ:
            // Assuming action.index corresponds to the index of the notification in the List
            return state.updateIn(['notifications', action.index], notification =>
                notification.set('isRead', true)
            );

        case SET_TYPE_FILTER:
            return state.set('filter', action.filter);

        default:
            return state;
    }
};

export default notificationReducer;
