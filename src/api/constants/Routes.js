import React from 'react';
import Loadable from 'react-loadable';
import DefaultLayout from '../../containers/DefaultLayout/DefaultLayout';


function Loading() {
    return <div>Loading...</div>
}

const Dashboard = Loadable({
    loader: () => import('../../views/pages'),
    loading: Loading,
});

const Login = Loadable({
    loader: () => import('../../views/pages'),
    loading: Loading,
});

const Page404 = Loadable({
    loader: () => import('../../views/pages'),
    loading: Loading,
});

const routes = [
    { path: '/', name: 'HomeP', component: DefaultLayout, exact: true },
    { path: '/dashboard', name:'DashboardP', component: Dashboard},
    { path: '/login', name: 'LoginP', component: Login },
    { path: '/error404', name: 'Page404P', component: Page404}
    
];

export default routes;