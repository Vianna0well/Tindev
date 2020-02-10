import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './Pages/Login';
import Main from './Pages/Main';

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path='/' exact component={Login} />
            <Route path='/dev/:id' exact component={Main} />
        </BrowserRouter>
    );
}