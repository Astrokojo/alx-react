import {
    LOGIN,
    LOGOUT,
    DISPLAY_NOTIFICATION_DRAWER,
    HIDE_NOTIFICATION_DRAWER,
    LOGIN_FAILURE,
    LOGIN_SUCCESS
} from "../../actions/uiActionTypes";

const initialState = {
    isNotificationDrawerVisible: false,
    isUserLoggedin: false,
    user: {}
};

const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case DISPLAY_NOTIFICATION_DRAWER:
            return {
                ...state,
                isNotificationDrawerVisible: true
            };
        case HIDE_NOTIFICATION_DRAWER:
            return {
                ...state,
                isNotificationDrawerVisible: false
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isUserLoggedin: true
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                isUserLoggedin: false
            };
        case LOGOUT:
            return {
                ...state,
                isUserLoggedin: false
            };
        default:
            return state;
    }
};

export default uiReducer;