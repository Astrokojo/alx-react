import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { loginRequest, loginSuccess, loginFailure } from './uiActionCreators';
import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('uiActionCreators', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('should dispatch LOGIN and LOGIN_SUCCESS actions on successful login', () => {
    fetchMock.getOnce('/login-success.json', { status: 200, body: { /* mock response */ } });

    const expectedActions = [
      { type: LOGIN, user: { email: 'test@example.com', password: 'password123' } },
      { type: LOGIN_SUCCESS }
    ];

    const store = mockStore({});

    return store.dispatch(loginRequest('test@example.com', 'password123')).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should dispatch LOGIN and LOGIN_FAILURE actions on failed login', () => {
    fetchMock.getOnce('/login-success.json', { status: 400 });

    const expectedActions = [
      { type: LOGIN, user: { email: 'test@example.com', password: 'password123' } },
      { type: LOGIN_FAILURE }
    ];

    const store = mockStore({});

    return store.dispatch(loginRequest('test@example.com', 'password123')).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
