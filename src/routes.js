import React from 'react';

const Home = React.lazy(() => import('./Pages/Home/home.page'));


const routes = [
    {path: '/', exact: true, component: Home}
]

export default routes;