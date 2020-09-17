import { Dispatch } from 'redux';
import axios from 'axios';

import setAuthToken from '../../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

import { LOGIN_USER, LOGOUT_USER, LOGIN_FAILED, User } from './types';
import { API, paths } from '../../paths';

export const LoginUser = (user: User) => async (dispatch: Dispatch): Promise<void> => {
    try {
        const { data } = await axios.post(API + paths.backend.login, user);
        const { token } = data;
        localStorage.setItem('jwtToken', token);
        setAuthToken(token);
        const { name, email, password } = jwt_decode(token);
        const setUser: User = {
            name,
            email,
            password,
            isAuthenticated: true,
        };
        dispatch({
            type: LOGIN_USER,
            payload: setUser,
        });
    } catch ({ response }) {
        console.log(response.data[Object.keys(response.data)[0]]);
        dispatch({
            type: LOGIN_FAILED,
            payload: response.data[Object.keys(response.data)[0]],
        });
    }
};

export const LogoutUser = () => async (dispatch: Dispatch): Promise<void> => {
    try {
        localStorage.removeItem('jwtToken');
        setAuthToken('false');
        dispatch({
            type: LOGOUT_USER,
        });
    } catch ({ response }) {
        dispatch({
            type: LOGIN_FAILED,
            payload: response.data,
        });
    }
};
