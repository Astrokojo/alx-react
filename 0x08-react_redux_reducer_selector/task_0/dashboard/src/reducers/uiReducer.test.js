import uiReducer,{ initialState } from './uiReducer';
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_FAILURE, LOGIN_SUCCESS } from "../../actions/uiActionTypes";

describe('uiReducer', () => {
    it('should return the initial state when no action is passed', () => {
        const state = uiReducer(undefined, {});
        expect(state).toEqual(initialState);
    });

    it('should return the initial state when the action SELECT_COURSE is passed', () => {
        const state = uiReducer(undefined, {type: 'SELECT_COURSE'});
        expect(state).toEqual(initialState);
    });

    it('should handle DISPLAY_NOTIFICATION_DRAWER', () => {
        const state = uiReducer(undefined, {type: DISPLAY_NOTIFICATION_DRAWER});
        expect(state).toEqual({
            ...initialState, isNotificationDrawerVisible: true
        });
    });
})