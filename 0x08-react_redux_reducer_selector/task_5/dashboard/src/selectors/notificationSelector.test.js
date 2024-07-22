import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import Immutable from 'immutable';
import {
    filterTypeSelected,
    getNotifications,
    getUnreadNotifications,
} from './notificationSelector';
import {
    fetchNotificationsSuccess,
} from '../actions/notificationActionCreators';
import { notificationReducer } from './../reducers/notificationReducer';

configure({ adapter: new Adapter() });

describe("Testing the notificationSelector", () => {

    it("should return the correct filter type selected", () => {
        let action = fetchNotificationsSuccess();
        let expectedState = notificationReducer(undefined, action);
        let result = filterTypeSelected(expectedState);
        expect(result).to.equal(expectedState.getIn(['filter']));
    });

    it("should return the notifications from the state", () => {
        let action = fetchNotificationsSuccess();
        let expectedState = notificationReducer(undefined, action);
        let result = getNotifications(expectedState);
        expect(Immutable.is(result, expectedState.getIn(['notifications']))).to.be.true;
    });

    it("should return the unread notifications from the state", () => {
        let action = fetchNotificationsSuccess();
        let expectedState = notificationReducer(undefined, action);
        let result = getUnreadNotifications(expectedState);
        let expectedUnread = expectedState.getIn(['notifications'])
            .filter(notification => !notification.get('isRead'));
        expect(Immutable.is(result, expectedUnread)).to.be.true;
    });

});
