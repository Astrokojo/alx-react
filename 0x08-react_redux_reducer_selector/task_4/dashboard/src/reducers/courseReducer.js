import {
    FETCH_COURSE_SUCCESS,
    SELECT_COURSE,
    UNSELECT_COURSE,
} from '../actions/courseActionTypes';

import coursesNormalizer from '../schema/courses';

const initialState = Map({
    courses: Map(),
    notifications: Map(),
});

const courseReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COURSE_SUCCESS:
            const normalizedCourses = coursesNormalizer(action.data);
            return state.mergeIn(['courses'], normalizedCourses);

        case SELECT_COURSE:
            return state.updateIn(['courses', action.index], course =>
                course.set('isSelected', true)
            );

        case UNSELECT_COURSE:
            return state.updateIn(['courses', action.index], course =>
                course.set('isSelected', false)
            );

        case MARK_NOTIFICATION_READ:
            return state.updateIn(['notifications', action.notificationId], notification =>
                notification.set('isRead', true)
            );

        default:
            return state;
    }
};

export default courseReducer;