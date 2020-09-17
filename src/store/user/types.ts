export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export interface User {
    email: string;
    password: string;
    name?: string;
    isAuthenticated?: boolean;
}

interface LoginUser {
    type: typeof LOGIN_USER;
    payload: User;
}

interface LogoutUser {
    type: typeof LOGOUT_USER;
}

interface LoginFailed {
    type: typeof LOGIN_FAILED;
    payload: string;
}

export type UserActionTypes = LoginUser | LogoutUser | LoginFailed;
