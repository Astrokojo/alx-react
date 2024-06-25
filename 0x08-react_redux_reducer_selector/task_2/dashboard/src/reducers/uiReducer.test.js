import uiReducer, { initialState } from './uiReducer';
import { DISPLAY_NOTIFICATION_DRAWER } from "../../actions/uiActionTypes";

describe('uiReducer', () => {
    it('should return the initial state when no action is passed', () => {
        const state = uiReducer(undefined, {});
        expect(state).toEqual(initialState);
    });

    it('should handle DISPLAY_NOTIFICATION_DRAWER', () => {
        const state = uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER });
        expect(state).toEqual({
            ...initialState, isNotificationDrawerVisible: true
        });

        // Convert newState to JS object for comparison
        expect(newState.toJS()).toEqual({
            isNotificationDrawerVisible: true,
            isUserLoggedIn: false,
            user: {},
        });
    });
})