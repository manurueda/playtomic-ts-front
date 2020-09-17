import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { User, LOGIN_USER, LOGOUT_USER } from './store/user/types';
import { paths } from './paths';

import { Provider } from 'react-redux';
import PrivateRoute from './utils/PrivateRoute';

import Login from './pages/login';
import Dashboard from './pages/dashboard';

import store from './store';
import * as serviceWorker from './utils/serviceWorker';

import 'rbx/index.css';
import './static/css/fonts.css';

if (localStorage.jwtToken) {
    console.log(localStorage.jwtToken);
    // We setup the headers for axios calls
    setAuthToken(localStorage.jwtToken);

    // We store the decoded version in the store
    const { name, email, password, exp } = jwt_decode(localStorage.jwtToken);
    const setUser: User = {
        name,
        email,
        password,
        isAuthenticated: true,
    };

    store.dispatch({
        type: LOGIN_USER,
        payload: setUser,
    });

    // We check if the token expired
    const currentTime = Date.now() / 1000;
    if (exp < currentTime) {
        store.dispatch({
            type: LOGOUT_USER,
        });
        window.location.href = paths.login;
    }
}

const App = () => (
    <Provider store={store}>
        <Router>
            <div className="App">
                <Switch>
                    <PrivateRoute path="/dashboard" component={Dashboard} />
                    <Route exact path="/" component={Login} />
                    <Route path="/login" component={Login} />
                </Switch>
            </div>
        </Router>
    </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
