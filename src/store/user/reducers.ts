import { combineReducers } from 'redux';
import { LOGIN_USER, LOGOUT_USER, LOGIN_FAILED, UserActionTypes } from './types';
import { User } from './types';

const InitialState = (): User => ({
    name: '',
    email: '',
    password: '',
    isAuthenticated: false,
});

export function userReducer(state: User = InitialState(), action: UserActionTypes): User {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                ...action.payload,
            };
        case LOGOUT_USER:
            return InitialState();
        default:
            return state;
    }
}

export function errorReducer(state = '', action: UserActionTypes): string {
    switch (action.type) {
        case LOGIN_FAILED:
            return action.payload;
        case LOGOUT_USER:
            return '';
        default:
            return state;
    }
}

export const rootReducer = combineReducers({
    user: userReducer,
    error: errorReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
