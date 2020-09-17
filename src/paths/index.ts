// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const API = process.env.REACT_APP_BACKEND_SERVER! + process.env.REACT_APP_API_VERSION!;

export const paths = {
    test: '/test',
    login: '/login',
    dashboard: {
        secret: '/dashboard/secret',
        settings: '/dashboard/settings',
    },
    backend: {
        login: '/users/login',
    },
    api: {
        users: 'https://jsonplaceholder.typicode.com/users',
        photos: 'https://jsonplaceholder.typicode.com/photos',
    },
};

export const DefaultPage = '/login';
