import axios from 'axios';

const setAuthToken = function (token: string): void {
    if (token !== 'false') {
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
};

export default setAuthToken;
