import { Map } from 'immutable';
import courseReducer from './courseReducer';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';

describe('courseReducer', () => {
    it('should return the initial state with Immutable.js Map', () => {
        // Initial state should be an Immutable.js Map
        expect(courseReducer(undefined, {})).toEqual(Map({
            courses: Map(),
            notifications: Map()
        }));
    });

    it('should handle FETCH_COURSE_SUCCESS', () => {
        const courses = [
            { id: 1, name: 'ES6', credit: 60 },
            { id: 2, name: 'Webpack', credit: 20 },
            { id: 3, name: 'React', credit: 40 },
        ];
        const action = {
            type: FETCH_COURSE_SUCCESS,
            data: courses,
        };

        const expectedState = Map({
            courses: Map({
                '1': Map({ id: 1, name: 'ES6', credit: 60, isSelected: false }),
                '2': Map({ id: 2, name: 'Webpack', credit: 20, isSelected: false }),
                '3': Map({ id: 3, name: 'React', credit: 40, isSelected: false }),
            }),
            notifications: Map()
        });

        expect(courseReducer(Map(), action)).toEqual(expectedState);
    });

    it('should handle SELECT_COURSE', () => {
        const initialState = Map({
            courses: Map({
                '1': Map({ id: 1, name: 'ES6', credit: 60, isSelected: false }),
                '2': Map({ id: 2, name: 'Webpack', credit: 20, isSelected: false }),
                '3': Map({ id: 3, name: 'React', credit: 40, isSelected: false }),
            }),
            notifications: Map()
        });

        const action = {
            type: SELECT_COURSE,
            index: '2',
        };

        const expectedState = Map({
            courses: Map({
                '1': Map({ id: 1, name: 'ES6', credit: 60, isSelected: false }),
                '2': Map({ id: 2, name: 'Webpack', credit: 20, isSelected: true }),
                '3': Map({ id: 3, name: 'React', credit: 40, isSelected: false }),
            }),
            notifications: Map()
        });

        expect(courseReducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle UNSELECT_COURSE', () => {
        const initialState = Map({
            courses: Map({
                '1': Map({ id: 1, name: 'ES6', credit: 60, isSelected: false }),
                '2': Map({ id: 2, name: 'Webpack', credit: 20, isSelected: true }),
                '3': Map({ id: 3, name: 'React', credit: 40, isSelected: false }),
            }),
            notifications: Map()
        });

        const action = {
            type: UNSELECT_COURSE,
            index: '2',
        };

        const expectedState = Map({
            courses: Map({
                '1': Map({ id: 1, name: 'ES6', credit: 60, isSelected: false }),
                '2': Map({ id: 2, name: 'Webpack', credit: 20, isSelected: false }),
                '3': Map({ id: 3, name: 'React', credit: 40, isSelected: false }),
            }),
            notifications: Map()
        });

        expect(courseReducer(initialState, action)).toEqual(expectedState);
    });
});
